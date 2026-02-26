"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl md:text-7xl mb-6 bg-linear-to-r leading-tight from-[#f0d784] to-[#ad8915] bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="h-1 w-64 max-w-full mx-auto mb-6 bg-linear-to-r from-transparent via-[#f0d784] to-transparent" />
      {description && (
        <p className="text-xl text-[#f2f2f2]/50 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};
