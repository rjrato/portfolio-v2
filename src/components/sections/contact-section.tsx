"use client";

import { ContactForm } from "@/components/sections/contact-form";
import type { Translations } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

interface ContactSectionProps {
  dict: Translations["contact"];
  lang: Locale;
}

export function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container px-6 md:px-12 xl:px-16">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-2">
              {dict.title}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {dict.heading}
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              {dict.subtitle}
            </p>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-6 md:p-8">
            <ContactForm dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
