"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";
import { AboutCvCard } from "./about-cv-card";
import { AboutSkills } from "./about-skills";
import { AboutInfo } from "./about-info";
import { AboutContact } from "./about-contact";
import { useRef } from "react";

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:px-6 px-4 scroll-mt-20 overflow-hidden"
    >
      {/* Vector haut gauche */}
      <motion.div
        className="hidden md:block absolute top-0 left-0 w-64 md:w-80 pointer-events-none z-0"
        style={{ y }}
      >
        <Image
          src="/vector-about.svg"
          alt="decorative vector"
          width={400}
          height={400}
          priority
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutInfo />
            <AboutSkills />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AboutCvCard />
            <AboutContact />
          </motion.div>
        </div>
      </div>
    </section>
  );
};