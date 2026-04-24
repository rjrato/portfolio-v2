"use client";

import {
  Code,
  FileCode,
  Database,
  Terminal,
  GitBranch,
  Cloud,
  Boxes,
  Braces,
  Globe,
  Server,
  Layers,
  Cpu,
  Workflow,
  Link,
} from "lucide-react";

interface SkillIconProps {
  icon: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  javascript: FileCode,
  typescript: FileCode,
  python: Code,
  c: Terminal,
  react: Boxes,
  nextjs: Layers,
  html5: Globe,
  css3: Braces,
  tailwind: Braces,
  bootstrap: Braces,
  nodejs: Server,
  express: Server,
  flask: Server,
  mongodb: Database,
  sql: Database,
  api: Workflow,
  git: GitBranch,
  github: GitBranch,
  aws: Cloud,
  docker: Boxes,
  vscode: Code,
  terminal: Terminal,
  web3: Globe,
  blockchain: Link,
};

export function SkillIcon({ icon, className = "h-5 w-5" }: SkillIconProps) {
  const IconComponent = iconMap[icon] || Cpu;
  return <IconComponent className={className} />;
}
