"use client"

import contactSchema from "@/actions/schemas/contact"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { StringField } from "./fields"
import { useState } from "react"
import contact from "@/actions/contact"
import {
  toast
} from "sonner"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ContactForm({lng}) {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(contactSchema)
  })

  async function onSubmit(data) {
    setMessage(null)
    setLoading(true)
    try {
      const result = await contact(data)
      toast("Your email has been sent successfully.")
    } catch(error) {
      setMessage('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4" autoComplete="on">
        <StringField form={form} name="email" label="Email" placeholder="your.email@address.com" />
        <StringField form={form} name="subject" label="Object" placeholder="What is your message about ?" />
        <StringField form={form} name="message" label="Message" multiline inputClassName="min-h-[100px] resize max-w-full" />
        {message && <FormMessage>{message}</FormMessage>}
        <Button type="submit" className="w-full mt-4 rounded" disabled={loading}>Send</Button>
      </form>
    </Form>
  )
}