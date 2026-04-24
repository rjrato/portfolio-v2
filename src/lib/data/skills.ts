export interface Skill {
  name: string;
  icon: string;
  category: "languages" | "frontend" | "backend" | "tools" | "emerging";
}

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", icon: "javascript", category: "languages" },
  { name: "TypeScript", icon: "typescript", category: "languages" },
  { name: "Python", icon: "python", category: "languages" },
  { name: "C", icon: "c", category: "languages" },

  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "HTML5", icon: "html5", category: "frontend" },
  { name: "CSS3", icon: "css3", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express.js", icon: "express", category: "backend" },
  { name: "Flask", icon: "flask", category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", category: "backend" },
  { name: "Supabase", icon: "supabase", category: "backend" },
  { name: "RESTful APIs", icon: "api", category: "backend" },

  // Tools & DevOps
  { name: "Git", icon: "git", category: "tools" },
  { name: "GitHub", icon: "github", category: "tools" },
  { name: "AWS", icon: "aws", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "Command Line", icon: "terminal", category: "tools" },

  // Emerging Tech
  { name: "Web3.0", icon: "web3", category: "emerging" },
  { name: "ICP Blockchain", icon: "blockchain", category: "emerging" },
];

export function getSkillsByCategory(category: Skill["category"]): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
