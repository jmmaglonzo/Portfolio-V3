import { transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, subject } = body;

  try {
    await transporter.sendMail({
      from: `${name} <${process.env.NODEMAILER_EMAIL}>`,
      replyTo: email,
      to: process.env.EMAIL,
      subject: subject,
      text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}`,
      html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
    });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 },
    );
  }
}
