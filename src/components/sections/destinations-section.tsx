import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/src/components/image-with-fallback";
import { Card } from "@/src/components/ui/card";
import type { Language } from "@/src/config/site-content";

type DestinationsSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    enquire: { en: string; zh: string };
    items: readonly {
      key: string;
      title: { en: string; zh: string };
      description: { en: string; zh: string };
      image: string;
    }[];
  };
  prices?: readonly {
    key: string;
    fromPrice: { en: string; zh: string };
    note: { en: string; zh: string };
  }[];
};

export function DestinationsSection({ language, content, prices }: DestinationsSectionProps) {
  const langText = language === "en" ? "en" : "zh";
  const priceMap = new Map((prices ?? []).map((item) => [item.key, item]));

  return (
    <section id="destinations" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => {
            const price = priceMap.get(item.key);
            return (
              <Card
                key={item.key}
                className="group relative overflow-hidden p-0 transition-all duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
              >
              <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-transparent transition-all duration-300 motion-reduce:transition-none motion-safe:group-hover:ring-teal-200" />
              <div className="relative min-h-52 w-full overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title[langText]}
                  fallbackLabel={item.title[langText]}
                  className="transition-transform duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-105"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
              <div className="space-y-3 p-3.5">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {item.title[langText]}
                </h3>
                <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                  {item.description[langText]}
                </p>
                {price ? (
                  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-muted-bg)] px-3 py-2">
                    <p className="text-sm font-semibold text-[var(--color-primary)]">
                      {price.fromPrice[langText]}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{price.note[langText]}</p>
                  </div>
                ) : null}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
                >
                  {content.enquire[langText]}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 motion-reduce:transition-none motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}