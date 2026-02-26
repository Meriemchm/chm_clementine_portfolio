import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export const AboutCvCard = () => {
  return (
    <div className="bg-[#1a1a1a] border-2 border-[#333] rounded-3xl p-6 text-center">
      <h3 className=" text-lg mb-4 text-[#f0d784] underline">
        Take a peek at my resume!
      </h3>
      <a
        href="https://drive.google.com/file/d/11M58K4q4sBfd_v8kPn1p8ODjir2UetRE/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
      >
        <motion.div
          className="relative rounded-2xl overflow-hidden border-2 border-[#333] group-hover:border-[#f0d784] transition-colors"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/cv.png"
            alt="CV Preview"
            height={500}
            width={350}
            className="object-contain md:w-full md:h-full w-auto h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
            <span className=" text-white">View Full Resume</span>
          </div>
        </motion.div>
      </a>
    </div>
  );
};
