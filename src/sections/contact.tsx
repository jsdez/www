"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"; // Importing custom form components
import { Button } from "@/components/ui/button"; // Assuming you have a button component

// Define your form schema using Zod for validation
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit, control, formState: { errors } } = form;

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setResponse("Email sent successfully!");
      } else {
        setResponse(`Error: ${result.error}`);
      }
    } catch (error) {
      setResponse("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-secondaryBlack w-full py-20">
      <div className="mx-auto w-container max-w-lg px-5">
        <h2 className="text-center text-2xl font-heading mb-8">Contact Us</h2>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name Field */}
            <FormField control={control} name="firstName">
              {({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      className="w-full p-2 border-2 rounded-md"
                      placeholder="Your Name"
                    />
                  </FormControl>
                  <FormMessage>{errors.firstName?.message}</FormMessage>
                </FormItem>
              )}
            </FormField>

            {/* Email Field */}
            <FormField control={control} name="email">
              {({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      className="w-full p-2 border-2 rounded-md"
                      placeholder="Your Email"
                    />
                  </FormControl>
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
              )}
            </FormField>

            {/* Message Field */}
            <FormField control={control} name="message">
              {({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      className="w-full p-2 border-2 rounded-md"
                      placeholder="Your Message"
                    />
                  </FormControl>
                  <FormMessage>{errors.message?.message}</FormMessage>
                </FormItem>
              )}
            </FormField>

            {/* Submit Button */}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>

        {/* Response Message */}
        {response && (
          <p className="mt-4 text-center text-gray-700 dark:text-white">{response}</p>
        )}
      </div>
    </section>
  );
}
