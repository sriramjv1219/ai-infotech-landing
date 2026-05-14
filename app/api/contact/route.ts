import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const escapeHtml = (input: string) =>
    input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = contactSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Please provide valid contact details." },
                { status: 400 }
            );
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            return NextResponse.json(
                { error: "Email service is not configured on the server." },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);
        const { firstName, lastName, email, topic, message } = parsed.data;
        const fullName = `${firstName} ${lastName}`;

        const toEmail = process.env.RESEND_TO_EMAIL ?? "surya.vf20@gmail.com";
        const subject2 = `A new enquiry has been received from ${fullName} (${email}) regarding ${topic}`;

        const { error } = await resend.emails.send({
            from: "ai-infotech-enquiry@resend.dev",
            to: toEmail,
            replyTo: email,
            subject: subject2,
            html: `
        <h2>Enquiry Details</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Sender Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
        });

        if (error) {
            return NextResponse.json(
                {
                    error: "Failed to send email. Please try again later.",
                    errorDetails: error instanceof Error ? error.message : "Unknown error",
                },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Unexpected server error while sending email." },
            { status: 500 }
        );
    }
}