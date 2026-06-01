import { Quote, Star } from "lucide-react";
import { Card } from "@/src/components/ui/card";
import type { Language } from "@/src/config/site-content";

type ReviewItem = {
  rating: 5;
  quote: { en: string; zh: string };
  name: { en: string; zh: string };
  travelType: { en: string; zh: string };
  date: { en: string; zh: string };
};

type CustomerReviewsSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    subtitle: { en: string; zh: string };
    summary: {
      score: string;
      basedOn: { en: string; zh: string };
    };
    items: readonly ReviewItem[];
  };
};

export function CustomerReviewsSection({ language, content }: CustomerReviewsSectionProps) {
  const langText = language === "en" ? "en" : "zh";
  const loopItems = [...content.items, ...content.items];

  const renderReviewCard = (item: ReviewItem, key: string) => (
    <Card
      key={key}
      className="relative flex h-[290px] w-[300px] shrink-0 snap-center flex-col rounded-2xl border border-[var(--color-border)] bg-white shadow-sm sm:w-[340px]"
    >
      <Quote
        className="absolute right-5 top-5 h-5 w-5 text-[var(--color-primary)]/30"
        aria-hidden="true"
      />
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: item.rating }).map((_, index) => (
          <Star
            key={`${key}-star-${index}`}
            className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="flex-1 text-sm leading-7 text-[var(--color-text-secondary)]">“{item.quote[langText]}”</p>
      <div className="mt-6 border-t border-[var(--color-border)] pt-4">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.name[langText]}</p>
        <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{item.travelType[langText]}</p>
        <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{item.date[langText]}</p>
      </div>
    </Card>
  );

  return (
    <section id="reviews" className="bg-[var(--color-muted-bg)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)]">
          {content.subtitle[langText]}
        </p>

        <div className="mt-6 inline-flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-secondary)]">
          <span className="font-semibold text-[var(--color-text-primary)]">{content.summary.score}</span>
          <span>{content.summary.basedOn[langText]}</span>
        </div>

        <div className="mt-8 md:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6">
            {content.items.map((item) => renderReviewCard(item, `${item.name.en}-${item.date.en}`))}
          </div>
        </div>

        <div className="testimonial-marquee mt-8 hidden overflow-hidden md:block">
          <div className="testimonial-track flex w-max gap-5">
            {loopItems.map((item, index) =>
              renderReviewCard(item, `${item.name.en}-${item.date.en}-${index}`),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}