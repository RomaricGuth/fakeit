"use server"

import prisma from "../../prisma/client";
import { sendMail } from "@/lib/mail";
import contactSchema from "./schemas/contact";

export default async function contact(data) {
  const validatedData = contactSchema.safeParse(data)

  // Return early if the form data is invalid
  if (!validatedData.success) {
    throw new Error();
  }

  sendMail({
    to: process.env.EMAIL_NOTIFICATION_ADDRESS,
    replyTo: validatedData.data.email,
    subject: `Fakeit - Contact : ${validatedData.data.subject}`,
    html: `<p>${validatedData.data.message}</p>`,
    text: validatedData.data.message,
  })

  try {
    await prisma.contact.create({
      data: validatedData.data,
    })
  } catch (error) {
    console.error(error);
    throw new Error('Error sending contact email');
  }
}