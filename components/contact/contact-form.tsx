"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contactSchema";
import { GameButton } from "../ui/GameButton";

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {

    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative bg-[#1a1a1a] border-2 border-[#333] p-8 overflow-hidden">
        {/* Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f0d784]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f0d784]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#f0d784]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#f0d784]" />

        <h2 className=" text-3xl mb-8 text-[#f0d784]">
          Send a Message
        </h2>

        {isSubmitted ? (
          <motion.div
            className="flex flex-col items-center justify-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <CheckCircle2 className="w-20 h-20 text-[#f0d784] mb-4" />
            <h3 className="text-2xl text-white mb-2">Message Sent!</h3>
            <p className="text-[#8c8c8c] text-center">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </motion.div>
        ) : (
          <form
            action={process.env.NEXT_PUBLIC_CONTACT_FORM_URL}
            method="POST"
            className="space-y-6"
          >
            {/* NAME */}
            <div>
              <label className="block text-sm text-[#f0d784] mb-2">
                Your Name *
              </label>
              <input
                {...register("name")}
                className="w-full px-4 py-3 bg-[#0d0d0d] border-2 border-[#333] rounded-xl text-white focus:border-[#f0d784] focus:outline-none"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-[#f0d784] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 bg-[#0d0d0d] border-2 border-[#333] rounded-xl text-white focus:border-[#f0d784] focus:outline-none"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-sm text-[#f0d784] mb-2">
                Subject *
              </label>
              <input
                {...register("subject")}
                className="w-full px-4 py-3 bg-[#0d0d0d] border-2 border-[#333] rounded-xl text-white focus:border-[#f0d784] focus:outline-none"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-[#f0d784] mb-2">
                Message *
              </label>
              <textarea
                rows={6}
                {...register("message")}
                className="w-full px-4 py-3 bg-[#0d0d0d] border-2 border-[#333] rounded-xl text-white focus:border-[#f0d784] focus:outline-none resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <GameButton
              type="submit"
              variant="rounded"
              size="large"
              className="w-full"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </GameButton>
          </form>
        )}
      </div>
    </motion.div>
  );
};
