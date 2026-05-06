import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from 'zod';
import { db } from '@/db';
import { contacts } from '@/db/schema';
import { getDictionary } from "@/lib/i18n/dictionaries";

interface ContactRequest {
  name: string;
  email: string;
  service: string;
  message: string;
  turnstileToken: string;
}

type TurnstileVerifyResult = {
  success: boolean
  'error-codes'?: string[]
  hostname?: string
  action?: string
  challenge_ts?: string
}

const resend = new Resend(process.env.RESEND_API_KEY!)
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().max(50),
  service: z.array(z.string()).min(1),
  message: z.string().min(1).max(5000),
  locale: z.enum(["pt", "en"]).default("en"),
  turnstileToken: z.string().min(1),
})

async function verifyTurnstile(token: string): Promise<TurnstileVerifyResult> {
  try {
    const body = new URLSearchParams({
      secret: TURNSTILE_SECRET_KEY!,
      response: token,
    })

    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    })

    if (!res.ok) {
      return { success: false, 'error-codes': ['http-error'] }
    }

    return (await res.json()) as TurnstileVerifyResult
  } catch {
    return { success: false, 'error-codes': ['internal-error'] }
  }
}

function validateContactRequest(body: unknown): body is ContactRequest {
  if (!body || typeof body !== "object") return false;
  
  const request = body as Record<string, unknown>;
  
  return (
    typeof request.name === "string" &&
    request.name.trim().length > 0 &&
    typeof request.email === "string" &&
    request.email.includes("@") &&
    typeof request.message === "string" &&
    request.message.trim().length > 0 &&
    typeof request.turnstileToken === "string"
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body)

    // Validate request
    if (!validateContactRequest(body)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const isValidToken = await verifyTurnstile(body.turnstileToken);
    if (!isValidToken.success) {
      return NextResponse.json(
        { error: "Turnstile verification failed" },
        { status: 403 }
      );
    }

    await db.insert(contacts).values({
      name: data.name,
      email: data.email,
      message: data.message,
      service: data.service.join(', '),
      locale: data.locale
    })

    const dict = await getDictionary(data.locale)
    const confirmationEmail = dict.contact.confirmationEmail

    await Promise.all([
      // Notification to us
      resend.emails.send({
        from: 'ricardorato.dev <noreply@ricardorato.dev>',
        to: ['projects@ricardorato.dev'],
        subject: `Novo Contacto: ${data.name}`,
        template: {
          id: 'ricardorato-income-message',
          variables: {
            name: data.name,
            email: data.email,
            service: data.service.join(', '),
            message: data.message,
          },
        },
      }),
      // Confirmation to the sender
      resend.emails.send({
        from: 'ricardorato.dev <noreply@ricardorato.dev>',
        to: [data.email],
        subject: confirmationEmail.subject,
        template: {
          id: 'ricardorato-form-auto-response',
          variables: {
            salutation: confirmationEmail.salutation,
            name: data.name,
            intro: confirmationEmail.intro,
            message: confirmationEmail.message,
            sign_off: confirmationEmail.signOff,
            team_name: confirmationEmail.teamName,
            website_url: 'https://ricardorato.dev',
            privacy_url: `https://ricardorato.dev/${data.locale}/privacy`,
            privacy_label: confirmationEmail.privacyLabel,
          },
        },
      }),
    ])

    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: z.treeifyError(error) },
        { status: 400 }
      )
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
