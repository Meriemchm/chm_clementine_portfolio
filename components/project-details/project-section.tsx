"use client";

import { motion } from "framer-motion";
import ProjectMedia from "./project-media";
import ProjectTitle from "./project-title";

interface Props {
  section: any;
  reverse?: boolean;
  index: number;
}

export default function ProjectSection({ section, reverse, index }: Props) {
  const formattedNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="flex flex-col gap-12">

      {/* Main Content */}
      <motion.div
        className={`flex flex-col lg:flex-row gap-16 items-center ${reverse ? "lg:flex-row-reverse flex-col-reverse " : ""}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectMedia section={section} />

        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProjectTitle title={section.title} />

          {section.text && (
            <motion.p
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {section.text}
            </motion.p>
          )}

          {section.links && (
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {section.links.map((link: string, i: number) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className="px-5 py-2 border border-[#e4c46c] rounded-lg text-[#e4c46c] hover:bg-[#e4c46c] hover:text-black transition"
                >
                  View Link
                </a>
              ))}
            </motion.div>
          )}

          {section.files && (
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {section.files.map((file: string, i: number) => (
                <a
                  key={i}
                  href={file}
                  download
                  className="px-5 py-2 bg-[#151515] border border-[#2a2a2a] rounded-lg hover:border-[#e4c46c] transition"
                >
                  Download File
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Bottom Number Line */}
      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-white/80 text-lg font-medium">
          {formattedNumber}
        </span>
        <div className="flex-1 h-px bg-linear-to-r from-[#e4c46c] to-transparent" />
      </motion.div>
    </div>
  );
}