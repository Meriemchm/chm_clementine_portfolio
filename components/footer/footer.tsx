import { FooterData } from "@/data/FooterData";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-black  p-12">
      <div className=" h-full flex justify-center items-center ">
        {FooterData.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={14}
              width={14}
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-auto h-auto object-cover inline-block mx-2 filter grayscale brightness-50 hover:scale-105 transition duration-300"
            />
          </Link>
        ))}
      </div>
      <p className="text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Clémentine Budon - Game Designer.
      </p>
    </div>
  );
};
