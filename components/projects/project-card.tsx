"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link} className="group relative w-full h-96 rounded-xl overflow-hidden border border-white/10">
      
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3 className="text-white text-xl font-semibold">
          {title}
        </h3>

        <p className="text-white/80 text-sm mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {description}
        </p>
      </div>
    </Link>
  );
}