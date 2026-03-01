"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { GameButton } from "../ui/GameButton";
import { Gamepad2 } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const yCircle = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const rotateZ = useTransform(scrollYProgress, [0, 1], [45, 405]);
  const ySquare = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen pt-30 md:pt-0 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl mb-4">
            <span className="text-white">Clémentine Budon</span>
          </h1>

          <motion.div
            className="h-1 w-80 sm:w-96 max-w-full mx-auto mb-6 bg-linear-to-r from-transparent via-[#8c8c8c] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <h2 className="text-2xl md:text-4xl font-meduim mb-8 leading-tight text-primary-gradient">
            Game Designer
          </h2>

          <motion.p
            className="text-lg md:text-xl text-[#f2f2f2]/60 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum eget varius lectus. Nunc feugiat mollis condimentum.
            Praesent.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="/contact">
              <GameButton variant="gaming" size="large">
                <Gamepad2 className="w-6 h-6" />
                Press Start
              </GameButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Cercle */}
      <motion.div
        className="hidden md:block absolute bottom-20 left-0 w-80 h-80 rounded-full border-2 border-[#f0d784] opacity-20"
        style={{ scale, y: yCircle }}
      />

      {/* Carré */}
      <motion.div
        className="absolute md:top-0 -top-20 -right-25 md:right-0 w-64 h-64 border-2 border-[#333] -z-50"
        style={{ rotate: rotateZ, y: ySquare }}
      />
    </section>
  );
};