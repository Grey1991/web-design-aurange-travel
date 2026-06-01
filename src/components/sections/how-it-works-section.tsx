import { CheckCircle2, MessageCircleMore, Route } from "lucide-react";
import { Card } from "@/src/components/ui/card";
import type { Language } from "@/src/config/site-content";

type StepItem = {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
};

type HowItWorksSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    steps: readonly StepItem[];
  };
};

const stepIcons = [MessageCircleMore, Route, CheckCircle2] as const;

export function HowItWorksSection({ language, content }: HowItWorksSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section className="bg-white py-16 sm:py-20" id="how-it-works">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {content.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? CheckCircle2;
            return (
              <Card key={step.title.en} className="h-full">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                  {step.title[langText]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {step.description[langText]}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}