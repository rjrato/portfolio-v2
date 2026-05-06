"use client";

import Image from "next/image";
import { ExternalLink, Folder, ImageIcon } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-links";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data/projects";
import type { Translations } from "@/lib/i18n/dictionaries";

interface ProjectCardProps {
  project: Project;
  dict: Translations["projects"];
}

export function ProjectCard({ project, dict }: ProjectCardProps) {
  return (
    <Card className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <Folder className="h-10 w-10 text-primary" />
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={dict.viewCode}
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={dict.viewProject}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="grow space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image / animation zone */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-dashed border-border bg-card">
          {project.image ? (
            project.image.endsWith(".mp4") || project.image.endsWith(".webm") ? (
              <video
                src={project.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-contain"
              />
            )
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground/40">
              <ImageIcon className="h-10 w-10" />
              <span className="text-sm font-mono">preview</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-mono bg-secondary/50 hover:bg-secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
