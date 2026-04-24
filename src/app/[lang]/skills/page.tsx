"use client";

import { getSkillsByCategory, type Skill } from "@/lib/data/skills";
import { SkillIcon } from "../../../components/ui/skill-icon";
import type { Translations } from "@/lib/i18n/dictionaries";

interface SkillsSectionProps {
  dict: Translations["skills"];
}

const categories = ["languages", "frontend", "backend", "tools", "emerging"] as const;

interface SkillBadgeProps {
  skill: Skill;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-200 group">
      <SkillIcon
        icon={skill.icon}
        className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
      />
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  if (skills.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-primary uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection({ dict }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-2">{dict.title}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            {dict.heading}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {dict.subheading}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories.map((category) => (
            <SkillCategory
              key={category}
              title={dict.categories[category]}
              skills={getSkillsByCategory(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
