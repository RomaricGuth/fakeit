import 'server-only';
import nodemailer from 'nodemailer';

// Set up transporter (replace these with your SMTP details)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendMail({from, to, subject, text, html, replyTo}) {
  try {
    // Send mail
    await transporter.sendMail({
      from: from || process.env.EMAIL_DEFAULT_FROM,
      to, // Recipient
      replyTo, // Reply-to
      subject, // Subject line
      text: text, // Plain text body
      html: html, // HTML body
    });
    console.debug('Email sent:', { from, to, subject, text, html });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Email details:', { from, to, subject, text, html });
  }
}
