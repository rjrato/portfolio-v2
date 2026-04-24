/**
 * Projects Data
 * 
 * Estrutura modular para projetos. Para adicionar um novo projeto:
 * 1. Adicione uma nova entrada ao array `projects`
 * 2. Preencha os campos obrigatórios: title, description, stack
 * 3. Opcionalmente adicione: githubUrl, liveUrl
 * 
 * Para remover um projeto:
 * 1. Elimine a entrada correspondente do array
 */

export interface Project {
  /** id do projeto */
  id: string;
  /** Título do projeto */
  title: string;
  /** Descrição breve do projeto */
  description: string;
  /** Stack tecnológica (separada por vírgula no display) */
  stack: string[];
  /** URL do repositório GitHub (opcional) */
  githubUrl?: string;
  /** URL do projeto em produção (opcional) */
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "greenlink",
    title: "Greenlink",
    description: "Enabling broader access to compute power, making AI development more accessible from experimentation to production.",
    stack: ["React", "TypeScript", "Next.js", "Supabase", "Vercel"],
    liveUrl: "https://greenlink.pt",
  },
  {
    id: "aventuras-no-limits",
    title: "Aventura No Limits",
    description: "A children's entertainment company, providing inflatables rent, face painting, and others.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/rjrato/aventuranolimits",
    liveUrl: "https://www.aventurasnolimits.com/",
  },
  {
    id: "simon-game",
    title: "Simon Game",
    description: "Let's see how good is your visual memory!",
    stack: ["JavaScript", "HTML", "CSS", "Game Dev"],
    githubUrl: "https://github.com/rjrato/Simon-Game",
    liveUrl: "https://main.d30vxygnwrd7hy.amplifyapp.com/",
  },
  {
    id: "pong-game",
    title: "Pong Game",
    description: "Experience the nostalgia of the classic Pong Game. Built with Python's Tkinter Library.",
    stack: ["Python", "Tkinter", "Game Dev"],
    githubUrl: "https://github.com/rjrato/Python-Projects/tree/main/Pong%20Game",
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description: "Remember the good old snake game? Who doesn't?! Crafted with Python's Tkinter library.",
    stack: ["Python", "Tkinter", "Game Dev"],
    githubUrl: "https://github.com/rjrato/Python-Projects/tree/main/Snake%20Game",
  },
  {
    id: "turtle-crossing",
    title: "Turtle Crossing",
    description: "Let's cross the road! Could you guide the little turtle without being hit?!",
    stack: ["Python", "Tkinter", "Game Dev"],
    githubUrl: "https://github.com/rjrato/Python-Projects/tree/main/Turtle%20Crossing%20Game",
  },
  {
    id: "shieldpass-vault",
    title: "ShieldPass Vault",
    description: "Never save another password on browser! Keep it safe with this simple and effective password manager.",
    stack: ["Python", "Security", "Encryption"],
    githubUrl: "https://github.com/rjrato/Python-Projects/tree/main/ShieldPass%20Vault",
  },
];

/**
 * Retorna todos os projetos
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Retorna o número total de projetos
 */
export function getProjectsCount(): number {
  return projects.length;
}
