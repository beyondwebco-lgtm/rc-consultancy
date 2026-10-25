import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, service, message, website_field_hp } = body;

    // Check honeypot
    if (website_field_hp) {
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    if (!fullName || !phone || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Prepare email content
    const recipientEmail = "rc.consultancy@outlook.com";
    const emailSubject = `[Inquiry] ${service} - ${fullName}`;
    const emailText = `New consultation inquiry received via rcconsultancy.co.in:

Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Service Requested: ${service}

Requirement Details:
${message}

Submission Timestamp: ${new Date().toISOString()}
`;

    // Check if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"RC Consultancy Web" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: emailSubject,
        text: emailText,
      });
    } else {
      // In development or when SMTP is not yet set up in Vercel env, log inquiry safely
      console.log("=== NEW CONSULTATION INQUIRY ===");
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(emailText);
      console.log("================================");
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully transmitted.",
    });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send inquiry automatically. Please use the WhatsApp or direct email link.",
      },
      { status: 500 }
    );
  }
}
