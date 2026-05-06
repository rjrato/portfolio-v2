import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui/fade-in";
import type { Locale } from "@/lib/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen bg-background">
      <Header dict={dict} lang={lang as Locale} />
      <main>
        <FadeIn>
          <HeroSection dict={dict.hero} lang={lang as Locale} />
        </FadeIn>
        <FadeIn>
          <AboutSection dict={dict.about} lang={lang as Locale} />
        </FadeIn>
        <FadeIn>
          <SkillsSection dict={dict.skills} />
        </FadeIn>
        <FadeIn>
          <ProjectsSection dict={dict.projects} />
        </FadeIn>
        <FadeIn>
          <ContactSection dict={dict.contact} lang={lang as Locale} />
        </FadeIn>
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}
