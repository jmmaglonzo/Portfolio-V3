import nodemailer from "nodemailer";
const email = process.env.NODEMAILER_EMAIL;
const pass = process.env.EMAIL_PASS;
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});
