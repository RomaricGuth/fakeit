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

const formSchema = z.object({
  email: z.string()
});

export function CheckoutButton({children}) {

  const form = useForm({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values) {
    try {
      console.log(values);
      toast(
        "Thanks for submitting your email! We'll be in touch soon."
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <HoverRippleButton>{children}</HoverRippleButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Leave us your email</DialogTitle>
          <DialogDescription>
            This product isn&apos;t ready yet. Wanna build it with us and get early access? Leave us your email !
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto py-10 flex gap-4">
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input 
                    placeholder=""
                    
                    type="email"
                    {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="self-end">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}