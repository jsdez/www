import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const { email, fullName, message, companyName } = await req.json();

    if (!email || !fullName || !message || !companyName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send confirmation email to the sender, CC or BCC yourself
    const { data, error } = await resend.emails.send({
      from: "Jake Dennison <jake@neoautomate.com>",
      to: [email], // Send to the customer
      bcc: ["jake@neoautomate.com"],
      subject: "We've received your message!",
      react: EmailTemplate({
        fullName,
        message: `Thank you for reaching out! I've received your message and will get back to you shortly.\n\n\nOriginal Message:\n"${message}"`,
      }),
    });

    return NextResponse.json({ success: "Message sent successfully!" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
