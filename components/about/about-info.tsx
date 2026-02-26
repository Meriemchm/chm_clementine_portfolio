import { Heart } from "lucide-react";
import React from "react";

export const AboutInfo = () => {
  return (
    <div className="bg-[#1a1a1a] border-2 border-[#333] rounded-3xl p-8">
      <h3
        className="md:text-5xl text-md mb-6 text-transparent"
        style={{
          WebkitTextStroke: "0.5px #a3a3a3", // couleur du contour
        }}
      >
        Game Designer
      </h3>
      <div className="space-y-4  md:text-lg text-[#f2f2f2] leading-relaxed">
        <p>
          Freshly graduated of the Game Design specialization at Objectif 3D
          (Montpellier, France), I put efforts into{" "}
          <span className="text-[#f0d784] ">teamwork and communication</span>,
          and like to focus my work on game feel and making my games as
          satisfying, ergonomic, and fun as possible.
        </p>
        <p>
          I have been working on numerous student projects, varying from{" "}
          <span className="text-[#f0d784] ">video games</span>, board games,
          tabletop RPG, and virtual reality; and seek new experiences by
          participating in game jams and realizing side projects during my free
          time.
        </p>
        <div className="pt-4 flex items-center gap-3 text-[#f0d784]">
          <Heart className="w-6 h-6 fill-current" />
          <p className="">I am currently open to work.</p>
        </div>
      </div>
    </div>
  );
};
