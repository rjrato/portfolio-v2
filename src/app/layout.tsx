// src/app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Next.js permite "return children" APENAS quando um layout filho
  // fornece o <html> e <body> — é o único caso válido [web:24]
  return children as React.ReactElement;
}