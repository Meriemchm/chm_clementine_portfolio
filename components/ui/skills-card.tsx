import { motion } from "framer-motion";
import React from "react";

export const SkillsCard = ({ skill, index }: { skill: string; index: number }) => {
  return (
    <motion.span
      key={skill}
      className="px-5 py-3 bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] border-2 border-[#333] hover:border-[#f0d784] rounded-xl font-['Poppins:SemiBold',sans-serif] text-white transition-all cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, borderColor: "#f0d784" }}
    >
      {skill}
    </motion.span>
  );
};
