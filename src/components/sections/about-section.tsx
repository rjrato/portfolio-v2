"use client";

import { SectionGlow } from "@/components/ui/section-glow";
import type { Translations } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

interface AboutSectionProps {
  dict: Translations["about"];
  lang: Locale;
}

export function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-6 md:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - Title */}
          <div className="lg:sticky lg:top-32 relative">
            <SectionGlow />
            <p className="text-primary font-mono text-sm mb-2">{dict.title}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {dict.heading}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          {/* Right column - Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {dict.description1}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {dict.description2}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {dict.description3}
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 mt-8">
              <p className="text-xl md:text-2xl font-medium text-foreground italic">
                {dict.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
