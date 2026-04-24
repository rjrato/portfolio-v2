"use server";
import { z } from "zod";
import { db } from "@/db";
import { contacts } from "@/db/schema/contacts";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.enum([
    "landing-websites",
    "web-apps-mvps",
    "mobile-apps",
    "ai-features",
    "other",
  ], { message: "Please select a service" }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success?: boolean;
  errors?: z.ZodFormattedError<ContactFormData>;
  serverError?: string;
};

export async function submitContact(
  prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: result.error.format() };
  }

  try {
    await db.insert(contacts).values({
      name: result.data.name,
      email: result.data.email,
      service: result.data.service,
      message: result.data.message,
    });

    return { success: true };
  } catch {
    return { serverError: "Something went wrong. Please try again." };
  }
}