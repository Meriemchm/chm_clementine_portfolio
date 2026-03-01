import { motion } from "framer-motion";
import React from "react";

export const SkillsCard = ({ skill, index }: { skill: string; index: number }) => {
  return (
    <motion.span
      className="px-5 py-3 bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#333] hover:border-[#f0d784] rounded-xl text-white cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1], // easing smooth
      }}
      whileHover={{
        y: -4,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
    >
      {skill}
    </motion.span>
  );
};