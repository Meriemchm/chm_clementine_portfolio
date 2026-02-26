"use client";
import { GameButton } from "../ui/GameButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const CtaSection = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Image SVG en bas à gauche */}
      <div
        className="absolute bottom-0 left-0 w-32 h-32 md:w-96 md:h-full"
      >
        <Image
          src="/vector-cta-section.svg"
          alt="CTA decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#f0d784] rounded-3xl p-16 max-w-4xl mx-auto overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="font-medium text-5xl mb-6 text-primary-gradient leading-tight">
              Ready to Level Up?
            </h2>
            <p className="text-xl text-[#f2f2f2] mb-10 max-w-2xl mx-auto">
              Let's collaborate and create amazing gaming experiences together
            </p>
            <Link href="/contact">
              <GameButton variant="withIcon" size="large">
                Get in Touch
              </GameButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
