import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/app/[lang]/about/page";
import { SkillsSection } from "@/app/[lang]/skills/page";
import { ProjectsSection } from "@/app/[lang]/projects/page";
import { ContactSection } from "@/app/[lang]/contact/page";
import { Footer } from "@/components/layout/footer";
import type { Locale } from "@/lib/i18n/config"

export default async function HomePage({
  params,
} : {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen bg-background">
      <Header dict={dict} lang={lang as Locale} />
      <main>
        <HeroSection dict={dict.hero}  lang={lang as Locale} />
        <AboutSection dict={dict.about}  lang={lang as Locale} />
        <SkillsSection dict={dict.skills} />
        <ProjectsSection dict={dict.projects} />
        <ContactSection dict={dict.contact} lang={lang as Locale} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}