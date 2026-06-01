import { ChevronDown } from "lucide-react";
import type { Language } from "@/src/config/site-content";

type FaqItem = {
  question: { en: string; zh: string };
  answer: { en: string; zh: string };
};

type FaqSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    subtitle: { en: string; zh: string };
    items: readonly FaqItem[];
  };
};

export function FaqSection({ language, content }: FaqSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section id="faq" className="bg-[var(--color-muted-bg)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>
        <p className="mb-8 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)]">
          {content.subtitle[langText]}
        </p>
        <div className="space-y-3">
          {content.items.map((item) => (
            <details
              key={item.question.en}
              className="group rounded-2xl border border-[var(--color-border)] bg-white p-3.5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[var(--color-text-primary)] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]">
                <span className="min-w-0 break-words">{item.question[langText]}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                {item.answer[langText]}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}