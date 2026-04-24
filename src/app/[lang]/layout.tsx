import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricardo Rato | Software & AI Consulting",
  description:
    "Do you need to modernize your business with intelligent software solutions? I help companies design and implement tailored software, AI‑driven features, and mobile applications that boost efficiency, improve user experience, and support growth. From strategy and consulting to full‑stack development, I transform your ideas into scalable digital solutions. Get in touch to explore how technology can work for your business.",
  keywords: [
    "Ricardo Rato",
    "Software Engineer",
    "Software Engineering",
    "Full-Stack",
    "Full Stack",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Mobile Development",
    "Portugal",
  ],
  authors: [{ name: "Ricardo Rato" }],
  creator: "Ricardo Rato",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: "en_US",
    url: "https://ricardorato.dev",
    title: "Ricardo Rato | Software & AI Consulting",
    description:
      "Custom software and AI solutions to solve real business problems — from idea to production.",
    siteName: "Ricardo Rato Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Rato | Software & AI Consulting",
    description:
      "Custom software and AI solutions to solve real business problems — from idea to production.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={cn("bg-background", inter.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">{children}</body>
      {process.env.NODE_ENV === "production" && <Analytics />}
    </html>
  );
}
