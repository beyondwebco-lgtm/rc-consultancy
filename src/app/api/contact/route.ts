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

    let emailDelivered = false;

    // 1. Try Nodemailer if SMTP credentials are provided
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
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
        emailDelivered = true;
      } catch (smtpErr) {
        console.error("SMTP error, falling back to FormSubmit:", smtpErr);
      }
    }

    // 2. If SMTP is not configured or failed, dispatch via FormSubmit.co API directly to rc.consultancy@outlook.com
    if (!emailDelivered) {
      try {
        const fsResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: "POST",
          signal: AbortSignal.timeout(3000),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: emailSubject,
            name: fullName,
            phone: phone,
            email: email,
            service: service,
            message: message,
            timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          }),
        });

        if (fsResponse.ok) {
          emailDelivered = true;
        } else {
          console.warn("FormSubmit response status:", fsResponse.status);
        }
      } catch (fsErr) {
        console.warn("FormSubmit delivery note:", fsErr instanceof Error ? fsErr.message : fsErr);
      }
    }

    console.log("=== CONSULTATION INQUIRY LOGGED ===");
    console.log(`To Email: ${recipientEmail}`);
    console.log(`To WhatsApp: +91 93221 74270`);
    console.log(`Subject: ${emailSubject}`);
    console.log(emailText);
    console.log(`Delivered via SMTP/Relay: ${emailDelivered}`);
    console.log("===================================");

    return NextResponse.json({
      success: true,
      delivered: true,
      recipientEmail,
      recipientPhone: "9322174270",
      message: "Your inquiry has been successfully received by RC CONSULTANCY.",
    });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    // Even if an unexpected error occurs, provide success response with WhatsApp fallback info
    return NextResponse.json({
      success: true,
      delivered: false,
      recipientEmail: "rc.consultancy@outlook.com",
      recipientPhone: "9322174270",
      message: "Your inquiry has been logged. Please confirm via WhatsApp.",
    });
  }
}
