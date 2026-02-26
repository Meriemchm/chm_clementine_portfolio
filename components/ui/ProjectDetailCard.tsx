"use client";

import Image from "next/image";

interface ProjectDetailCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ProjectDetailCard({
  title,
  description,
  image,
  reverse = false,
}: ProjectDetailCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full lg:w-1/2 h-[300px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          {title}
        </h2>
        <p className="text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}