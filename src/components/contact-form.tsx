"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required" }),
  companyName: z.string().min(1, { message: "Company is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

export default function Contact() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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

    // Show toast with form data
    toast(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      </pre>
    );
  };

  return (
    <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5 min-h-48 w-full lg:w-3/4 mx-auto">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full mx-auto py-10">
          {/* Full Name Field */}
          <FormField
            control={control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Name"
                    className="w-full p-2 border-2 rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Name Field */}
          <FormField
            control={control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Company"
                    className="w-full p-2 border-2 rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Email"
                    type="email"
                    className="w-full p-2 border-2 rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Your Message"
                    className="resize-none w-full p-2 border-2 rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" disabled={loading} className="w-full text-lg">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>

      {/* Response Message */}
      {response && (
        <p className="mt-4 text-center text-gray-700 dark:text-white text-lg">{response}</p>
      )}
    </div>
  );
}
