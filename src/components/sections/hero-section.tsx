"use client";

import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "../ui/social-links";
import type { Translations } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  dict: Translations["hero"];
  lang: Locale;
}

export function HeroSection({ dict }: HeroSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {dict.greeting}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            {dict.name}
            <span className="text-primary">.</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            {dict.title}
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            {dict.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {dict.cta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href={process.env.NEXT_PUBLIC_RESUME} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                {dict.resume}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
