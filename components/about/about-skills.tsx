import React from "react";
import { SkillsCard } from "../ui/skills-card";
import { SkillsData } from "@/data/SkillsData";

export const AboutSkills = () => {
  return (
    <div>
      <h3 className="text-3xl mb-6 text-white">Skills & Expertise</h3>
      <div className="flex flex-wrap gap-3">
        {SkillsData.map((skill, index) => (
          <SkillsCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};
