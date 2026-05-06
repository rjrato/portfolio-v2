"use client";

import { Globe, Code2, Smartphone, Sparkles, Check, Clock, Wallet, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionGlow } from "@/components/ui/section-glow";
import type { Translations } from "@/lib/i18n/dictionaries";

interface ServicesSectionProps {
  dict: Translations["services"];
}

const serviceIcons: Record<string, LucideIcon> = {
  "landing-websites": Globe,
  "web-apps-mvps": Code2,
  "mobile-apps": Smartphone,
  "ai-features-automation": Sparkles,
};

type Service = Translations["services"]["services"][number];
type RetainerPlan = Translations["services"]["retainer"]["plans"][number];

function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.id] ?? Sparkles;

  return (
    <div className="group flex flex-col h-full bg-card/50 border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-mono text-primary">
          {service.starting_price}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {service.name}
      </h3>
      <p className="text-sm text-muted-foreground italic mb-5">
        {service.tagline}
      </p>

      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-2.5 mb-6">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-border space-y-3">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Wallet className="h-3.5 w-3.5 text-primary" />
            <span>{service.typical_range}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>{service.typical_timeline}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground/80 leading-relaxed">
          {service.pricing_note}
        </p>
      </div>
    </div>
  );
}

function RetainerCard({ plan }: { plan: RetainerPlan }) {
  return (
    <div className="flex flex-col h-full bg-secondary/30 border border-border rounded-xl p-6 md:p-7 hover:border-primary/40 transition-all duration-300">
      <div className="flex items-baseline justify-between gap-4 mb-5 pb-5 border-b border-border">
        <h4 className="text-lg font-semibold text-foreground">{plan.name}</h4>
        <span className="text-sm font-mono text-primary whitespace-nowrap">
          {plan.price}
        </span>
      </div>

      <ul className="space-y-2.5">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function scrollToContact() {
  const element = document.getElementById("contact");
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

export function ServicesSection({ dict }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/30">
      <div className="container px-6 md:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <SectionGlow />
          <p className="text-primary font-mono text-sm mb-2">{dict.section}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {dict.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
            {dict.subheadline}
          </p>
          <p className="text-xs md:text-sm font-mono text-muted-foreground/70 max-w-2xl mx-auto">
            {dict.intro_note}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-24">
          {dict.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Retainer */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-primary font-mono text-xs mb-3 uppercase tracking-wider">
              {dict.retainer.retainer}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {dict.retainer.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {dict.retainer.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {dict.retainer.plans.map((plan) => (
              <RetainerCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden bg-card/60 border border-border rounded-2xl p-8 md:p-12 text-center">
          <div className="relative max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {dict.cta.headline}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {dict.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="px-6"
              >
                {dict.cta.primary_button.label}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="px-6"
              >
                {dict.cta.secondary_button.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
