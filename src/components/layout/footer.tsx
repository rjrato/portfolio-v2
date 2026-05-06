"use client";

import { Heart, Coffee } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";
import { WordmarkLogo } from "@/components/ui/wordmark-logo";
import type { Translations } from "@/lib/i18n/dictionaries";

interface FooterProps {
  dict: Translations["footer"];
}

export function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container px-6 md:px-12 xl:px-16">
        <div className="flex flex-col items-center gap-6">
          {/* Wordmark */}
          <WordmarkLogo className="h-24" />

          {/* Social Links */}
          <SocialLinks iconSize="sm" />

          {/* Made with */}
          <p className="text-sm text-muted-foreground flex items-center gap-1 flex-wrap justify-center">
            {dict.madeWith}
            <Heart className="h-4 w-4 text-destructive inline" />
            {dict.and}
            <Coffee className="h-4 w-4 text-primary inline" />
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ricardo Rato. {dict.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
