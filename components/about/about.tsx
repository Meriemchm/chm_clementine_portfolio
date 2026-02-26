"use client";
import { motion } from "framer-motion";
import { GameButton } from "../ui/GameButton";
import { Gamepad2, Heart, Film, Music, Download } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";
import { SkillsCard } from "../ui/skills-card";
import { AboutCvCard } from "./about-cv-card";
import { AboutSkills } from "./about-skills";
import { AboutInfo } from "./about-info";
import { AboutContact } from "./about-contact";

export const About = () => {
  return (
    <section id="about" className="relative py-32 md:px-6 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <SectionTitle title="About Me" />
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Bio Section */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutInfo />

            {/* Skills Grid */}
            <AboutSkills />
          </motion.div>

          {/* CV Card */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AboutCvCard />

            {/* Contact Quick Info */}
            <AboutContact />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
