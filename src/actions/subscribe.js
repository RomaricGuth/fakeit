"use server"

import prisma from "../../prisma/client";
import { sendMail } from "@/lib/mail";
import subscribeSchema from "./schemas/subscribe";

export default async function subscribe(data) {
  const validatedData = subscribeSchema.safeParse(data)

  // Return early if the form data is invalid
  if (!validatedData.success) {
    throw new Error();
  }

  if (validatedData.data.comment) {
    sendMail({
      to: process.env.EMAIL_NOTIFICATION_ADDRESS,
      subject: `Fakeit - New subscriber ${validatedData.data.email}${validatedData.data.comment && ' with comment'}`,
      text: validatedData.data.comment,
      replyTo: validatedData.data.email,
    })
  }

  try {
    if (await prisma.subscribe.findUnique({
      where: {
        email: validatedData.data.email,
      }
    })) {
      return {
        error: 'already_subscribed',
      }
    }

    await prisma.subscribe.create({
      data: validatedData.data,
    })
  } catch (error) {
    console.error(error);
    throw new Error('Error subscribing email');
  }
}
