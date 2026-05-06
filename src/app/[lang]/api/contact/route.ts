import { NextRequest, NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  turnstileToken: string;
}

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

async function verifyTurnstileToken(token: string) {
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          secret: TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return { success: false, "error-codes": ["internal-error"] };
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

    // Validate request
    if (!validateContactRequest(body)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const isValidToken = await verifyTurnstileToken(body.turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: "Invalid security token" },
        { status: 403 }
      );
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store the message in a database
    // 3. Integrate with a CRM or notification service
    
    // For now, we'll just log the contact
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
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
