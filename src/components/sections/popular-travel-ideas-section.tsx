import { ImageWithFallback } from "@/src/components/image-with-fallback";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import type { Language } from "@/src/config/site-content";

type PackageItem = {
  key: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  price: { en: string; zh: string };
  priceNote?: { en: string; zh: string };
  action: { en: string; zh: string };
  image: string;
};

type PopularTravelIdeasSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    items: readonly PackageItem[];
  };
};

export function PopularTravelIdeasSection({ language, content }: PopularTravelIdeasSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section className="bg-[var(--color-muted-bg)] py-16 sm:py-20" id="travel-ideas">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.items.map((item) => (
            <Card
              key={item.key}
              className="group overflow-hidden p-0 transition-all duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
            >
              <div className="relative min-h-52 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title[langText]}
                  fallbackLabel={item.title[langText]}
                  className="transition-transform duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3.5 p-3.5">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {item.title[langText]}
                </h3>
                <p className="min-h-20 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {item.description[langText]}
                </p>
                <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
                  <p className="text-lg font-semibold text-[var(--color-primary)]">{item.price[langText]}</p>
                  {item.priceNote ? (
                    <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                      {item.priceNote[langText]}
                    </p>
                  ) : null}
                </div>
                <Button href="#contact" className="w-full" magnetic>
                  {item.action[langText]}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}