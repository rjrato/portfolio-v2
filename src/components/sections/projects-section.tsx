"use client";

import { getAllProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/sections/project-card";
import type { Translations } from "@/lib/i18n/dictionaries";

interface ProjectsSectionProps {
  dict: Translations["projects"];
}

export function ProjectsSection({ dict }: ProjectsSectionProps) {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-6 md:px-12 xl:px-16">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-2">{dict.title}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.heading}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}
