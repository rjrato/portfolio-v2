"use client";

import { ContactForm } from "../../../components/sections/contact-form";
import { SocialLinks } from "@/components/ui/social-links";
import type { Translations } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

interface ContactSectionProps {
  dict: Translations["contact"];
  lang: Locale;
}

export function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-2">
              {dict.title}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {dict.heading}
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              {dict.subtitle}
            </p>
          </div>

          {/* Form */}
          <div className="bg-card/50 border border-border rounded-xl p-6 md:p-8">
            <ContactForm dict={dict} />
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Or find me on social media
            </p>
            <div className="flex justify-center">
              <SocialLinks iconSize="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
