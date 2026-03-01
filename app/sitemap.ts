import { ProjectsDetailsData } from "@/data/ProjectsDetailsData";

export default function sitemap() {
  const projects = ProjectsDetailsData.map((project) => ({
    url: `https://clémentine-portfolio.com/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://clémentine-portfolio.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://clémentine-portfolio.com/#about",
      lastModified: new Date(),
      priority: 0.7,
    },
    ...projects,
  ];
}

