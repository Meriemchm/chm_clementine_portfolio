"use client";
import { ProjectsData } from "@/data/ProjectsData";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/section-title";
import Image from "next/image";
import { Container } from "../ui/container";

export default function Projects() {
  return (
    <div className="relative flex flex-col gap-8 flex-wrap md:py-56 ">
      {/* Image SVG en haut à droite avec taille adaptative */}
      <div className="md:block absolute hidden -top-80 right-0 w-32 h-32 md:w-96 md:h-full">
        <Image
          src="/vector-projects.svg"
          alt="Vector projects"
          fill
          className="object-contain h-full w-full"
        />
      </div>

      <SectionTitle title="My Projects" description="A collection of games and experiences I've worked on, from competitive runners to VR narratives" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-6 grid-cols-1 xl:px-25 px-4"
      >
        {ProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </div>
  );
}
