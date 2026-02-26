import ProjectHero from "@/components/project-details/project-hero";
import ProjectSection from "@/components/project-details/project-section";
import { GameButton } from "@/components/ui/GameButton";
import { ProjectsDetailsData } from "@/data/ProjectsDetailsData";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = ProjectsDetailsData.find((p) => p.slug === slug);

  if (!project) {
    return <h1 className="text-white">Projet non trouvé</h1>;
  }

  return (
    <div className="bg-[#0e0e0e] py-12 text-white">
      <ProjectHero project={project} />

      <div className="max-w-6xl mx-auto px-6 pt-20 flex flex-col gap-32">
        {project.sections.map((section, index) => (
          <ProjectSection
            key={index}
            section={section}
            reverse={index % 2 !== 0}
            index={index}
          />
        ))}
      </div>

      <div className="py-12 mx-auto text-center">
        <Link href="/contact">
          <GameButton variant="withIcon" size="large">
            Get in Touch
          </GameButton>
        </Link>
      </div>
    </div>
  );
}
