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
    offset: ["start end", "end start"], // Animation sur toute la traversée de la section
  });

  // Animations pour le cercle
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const yCircle = useTransform(scrollYProgress, [0, 1], [0, 150]); // Descente de 150px

  // Animations pour le carré
  const rotateZ = useTransform(scrollYProgress, [0, 1], [45, 405]); // Départ à 45° (comme rotate-45)
  const ySquare = useTransform(scrollYProgress, [0, 1], [0, 100]); // Descente de 100px

  return (
    <div ref={containerRef}>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 mx-auto"
      >
        <div className="container mx-auto text-center">
          {/* Contenu (inchangé) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl mb-4">
              <span className="text-white">Clémentine Budon</span>
            </h1>

            <motion.div
              className="h-1 w-96 max-w-full mx-auto mb-6 bg-linear-to-r from-transparent via-[#8c8c8c] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <h2 className="text-2xl md:text-4xl mb-8 leading-tight text-primary-gradient">
              Game Designer
            </h2>

            <motion.p
              className="md:text-xl text-lg text-[#f2f2f2]/60 max-w-3xl mx-auto mb-12"
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

        {/* Cercle en bas à gauche */}
        <motion.div
          className="md:block  absolute hidden bottom-20 left-0 w-80 h-80 rounded-full border-2 border-[#f0d784] opacity-20"
          style={{ scale, y: yCircle }}
        />

        {/* Carré en haut à droite */}
        <motion.div
          className="md:block absolute hidden top-0 right-0 w-64 h-64 border-2 border-[#333]"
          style={{ rotate: rotateZ, y: ySquare }}
        />
      </section>
    </div>
  );
};
