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
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-2">{dict.title}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {dict.heading}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}
