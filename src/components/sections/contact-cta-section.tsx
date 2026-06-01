import { Button } from "@/src/components/ui/button";
import type { Language } from "@/src/config/site-content";

type ContactCtaSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    description: { en: string; zh: string };
    action: { en: string; zh: string };
  };
};

export function ContactCtaSection({ language, content }: ContactCtaSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[var(--color-primary)] px-6 py-10 text-white shadow-md sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-3xl font-bold leading-tight">{content.title[langText]}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/90">
              {content.description[langText]}
            </p>
          </div>
          <Button href="#contact" variant="cta-inverse" magnetic className="mt-6 w-full lg:mt-0 lg:w-auto">
            {content.action[langText]}
          </Button>
        </div>
      </div>
    </section>
  );
}