export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rjrato",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rjrato/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:projects@ricardorato.dev",
    icon: "email",
  },
];

export const resumeUrl = process.env.NEXT_PUBLIC_RESUME;
