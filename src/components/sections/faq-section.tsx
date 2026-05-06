"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionGlow } from "@/components/ui/section-glow";
import { cn } from "@/lib/utils";
import type { Translations } from "@/lib/i18n/dictionaries";

interface FaqSectionProps {
  dict: Translations["faq"];
}

type FaqItem = Translations["faq"]["items"][number];
type FaqCategoryKey = keyof Translations["faq"]["categories"];

const categoryOrder: FaqCategoryKey[] = ["services", "maintenance"];

interface FaqItemRowProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItemRow({ item, isOpen, onToggle }: FaqItemRowProps) {
  return (
    <div
      className={cn(
        "border border-border rounded-xl overflow-hidden bg-card/50 transition-all duration-300",
        isOpen ? "border-primary/50" : "hover:border-primary/30"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full flex items-center justify-between gap-6 px-5 md:px-6 py-5 text-left"
      >
        <span
          className={cn(
            "text-base md:text-lg font-medium transition-colors",
            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md border transition-colors",
            isOpen
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-secondary/50 text-muted-foreground border-border group-hover:text-primary"
          )}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ dict }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const grouped = categoryOrder.map((category) => ({
    category,
    label: dict.categories[category],
    items: dict.items.filter((item) => item.category === category),
  }));

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container px-6 md:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <SectionGlow />
          <p className="text-primary font-mono text-sm mb-2">{dict.section}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.headline}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {dict.subheadline}
          </p>
        </div>

        {/* Categories */}
        <div className="max-w-3xl mx-auto space-y-14">
          {grouped.map(({ category, label, items }) => (
            <div key={category}>
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-5">
                {label}
              </h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <FaqItemRow
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() =>
                      setOpenId((current) => (current === item.id ? null : item.id))
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
