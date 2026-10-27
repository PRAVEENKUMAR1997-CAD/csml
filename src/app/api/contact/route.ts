import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  company: z.string().trim().max(150).optional().default(""),
  interest: z.string().trim().min(1, "Please choose an area of interest.").max(100),
  message: z.string().trim().min(10, "Please add a little more detail.").max(4000)
});

const safeText = (value: string) => value.replace(/[<>]/g, "");

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message || "Please check the form fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form email settings are missing.");
    return NextResponse.json(
      { message: "The enquiry service is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const data = parsed.data;

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `CSML website enquiry: ${safeText(data.interest)}`,
      text: [
        "A new enquiry was submitted through the CSML website.",
        "",
        `Name: ${safeText(data.name)}`,
        `Email: ${data.email}`,
        `Company: ${safeText(data.company || "Not provided")}`,
        `Area of interest: ${safeText(data.interest)}`,
        "",
        "Message:",
        safeText(data.message)
      ].join("\n")
    });

    if (result.error) {
      console.error("Contact email provider returned an error.", result.error.name);
      return NextResponse.json(
        { message: "We could not send your enquiry right now. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Thank you. Your enquiry has been sent successfully." });
  } catch {
    console.error("Contact email delivery failed.");
    return NextResponse.json(
      { message: "We could not send your enquiry right now. Please try again later." },
      { status: 502 }
    );
  }
}