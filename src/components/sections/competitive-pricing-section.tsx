import { ArrowRight, BadgeDollarSign, MessageSquareMore, SlidersHorizontal } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import type { Language } from "@/src/config/site-content";

type Highlight = {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
};

type CompetitivePricingSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    paragraphs: readonly { en: string; zh: string }[];
    highlights: readonly Highlight[];
    cta: { en: string; zh: string };
  };
};

const highlightIcons = [BadgeDollarSign, SlidersHorizontal, MessageSquareMore] as const;

export function CompetitivePricingSection({ language, content }: CompetitivePricingSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section className="bg-white py-16 sm:py-20" id="pricing">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-muted-bg)] p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {content.title[langText]}
          </h2>
          <div className="mt-5 space-y-4">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.en} className="max-w-4xl text-base leading-8 text-[var(--color-text-secondary)]">
                {paragraph[langText]}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? BadgeDollarSign;
              return (
                <Card
                  key={item.title.en}
                  className="h-full border-transparent transition-all duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
                >
                  <Icon className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-[var(--color-text-primary)]">
                    {item.title[langText]}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {item.description[langText]}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12">
            <Button
              href="#contact"
              variant="cta-solid"
              magnetic
              className="group w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                {content.cta[langText]}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 motion-reduce:transition-none motion-safe:group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}