"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import HoverRippleButton from "./hoverRippleButton"
import { Textarea } from "./ui/textarea"
import formSchema from "@/actions/schemas/subscribe"
import subscribe from "@/actions/subscribe"


export function CheckoutButton({children, ...props}) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data) {
    setLoading(true)
    setMessage(null)
    try {
      const result = await subscribe(data)
      if (result?.error === 'already_subscribed') {
        setMessage('You are already subscribed')
      } else if (result?.error) {
        setMessage('An error occurred. Please try again later.')
      } else {
        setOpen(false)
        toast(
          "Thanks for submitting your email! We'll be in touch soon."
        );
      }
    } catch(error) {
      setMessage('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <HoverRippleButton {...props}>{children}</HoverRippleButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Well, Fakeit either doesn&apos;t exist yet</DialogTitle>
          <DialogDescription>
            Yes, we are our own first user. Now you know what to do, leave us your email to take part of the journey and be notified when we launch.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto flex flex-col gap-paragraph">
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input 
                    placeholder="jim.halpert@gmail.com"
                    type="email"
                    {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Web developer willing to test a saas idea."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Tell us who you are and why you are interested in this product</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {message && <FormMessage>{message}</FormMessage>}

            <Button type="submit" className="self-center rounded" disabled={loading}>Send</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
