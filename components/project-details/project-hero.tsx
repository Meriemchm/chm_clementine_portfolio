"use client";

import { Info } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectHero({ project }: any) {
  return (
    <section className="relative min-h-screen bg-[#0e0e0e] text-white px-10 py-16 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Media */}
        <motion.div
          className="relative w-full h-87.5 rounded-2xl overflow-hidden mb-12 shadow-lg bg-[#141414]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.heroMedia ? (
            <Image
              src={project.heroMedia}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Image or video
            </div>
          )}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl font-semibold text-[#e4c46c] mb-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h1>

        {project.subtitle && (
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {project.subtitle}
          </motion.p>
        )}

        {/* Info Cards */}
        <motion.div
          className="flex flex-wrap gap-6 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {project.teamSize && <InfoCard label="Team size" value={project.teamSize} />}
          {project.duration && <InfoCard label="Duration" value={project.duration} />}
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="About the project"
            icon={<Info className="w-6 h-6 text-[#f0d784]" />}
          />

          <p className="text-gray-400 leading-relaxed max-w-3xl mb-16">
            {project.description}
          </p>
        </motion.div>

        {/* Tools Section */}
        {project.tools && project.tools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionTitle title="Tools & Technologies" />

            <div className="flex flex-wrap gap-4 mt-8 select-none">
              {project.tools.map((tool: string, index: number) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-[#141414] border border-[#2a2a2a] rounded-xl text-gray-300 hover:border-[#e4c46c] transition"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* Info Card */
function InfoCard({ label, value }: any) {
  return (
    <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-6 w-52 shadow-md">
      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-yellow-500/40 to-yellow-700/30 mb-4" />
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

/* Section Title */
function SectionTitle({ title, icon }: any) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {icon && <div className="text-primary text-2xl">{icon}</div>}
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <div className="flex-1 h-px bg-linear-to-r from-[#e4c46c] to-transparent" />
    </div>
  );
}