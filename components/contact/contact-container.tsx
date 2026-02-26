"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { GameButton } from "@/components/ui/GameButton";
import { ContactData } from "@/data/ContactData";
import { ContactInfo } from "./contact-info";
import { SectionTitle } from "../ui/section-title";
import { AnimatedBackground } from "../ui/animated-background";
import { ContactForm } from "./contact-form";

export default function ContactContainer() {

  return (
    <div className="relative min-h-screen py-30 px-6">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <SectionTitle
          title={"Get in Touch"}
          description={
            "Ready to collaborate on your next gaming project? Let's create something amazing together!"
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
