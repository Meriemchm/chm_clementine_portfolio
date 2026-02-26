"use client";
import { About } from "@/components/about/about";
import { CtaSection } from "@/components/cta-section/cta-section";
import { Hero } from "@/components/hero/hero";
import ObsessionsSection from "@/components/obsession/obsession";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div className="overflow-hidden bg-">
      <Hero />
      <Projects />
      <About />
      <ObsessionsSection />
      <CtaSection />
    </div>
  );
}
