"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ObsessionData } from "@/data/ObsessionData";
import ObsessionCard from "../ui/obsession-card";
import { Container } from "../ui/container";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ObsessionsSection() {
  return (
    <Container>
      <fieldset className="border border-primary rounded-2xl p-6 md:p-10 bg-[#1a1a1a]">
        <legend className="px-4 md:text-4xl text-2xl text-primary font-semibold">
          My Current Obsessions
        </legend>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {ObsessionData.map((item, index) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true, amount: 0.2 });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <ObsessionCard {...item} />
              </motion.div>
            );
          })}
        </div>
      </fieldset>
    </Container>
  );
}
