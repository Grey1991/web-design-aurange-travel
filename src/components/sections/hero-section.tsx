import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/src/components/image-with-fallback";
import { Button } from "@/src/components/ui/button";
import type { Language } from "@/src/config/site-content";

type HeroSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    subtitle: { en: string; zh: string };
    description: { en: string; zh: string };
    primaryAction: { en: string; zh: string };
    secondaryAction: { en: string; zh: string };
    image: {
      src: string;
      alt: { en: string; zh: string };
      fallbackLabel: { en: string; zh: string };
    };
  };
};

export function HeroSection({ language, content }: HeroSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section id="home" className="relative">
      <div className="relative mx-auto grid min-h-[72vh] w-full max-w-7xl overflow-hidden rounded-none bg-[var(--color-primary)] sm:rounded-b-3xl lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10 px-4 py-16 sm:px-8 lg:px-14 lg:py-20">
          <div className="max-w-2xl space-y-6">
            <p className="hero-reveal text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {content.subtitle[langText]}
            </p>
            <h1 className="hero-reveal hero-reveal-delay-1 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {content.title[langText]}
            </h1>
            <p className="hero-reveal hero-reveal-delay-2 max-w-xl text-base leading-8 text-white/90 sm:text-lg">
              {content.description[langText]}
            </p>
            <div className="hero-reveal hero-reveal-delay-3 flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                href="#services"
                variant="cta-solid"
                magnetic
                className="group w-full text-white sm:w-auto"
              >
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  {content.primaryAction[langText]}
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-white transition-transform duration-200 motion-reduce:transition-none motion-safe:group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-72 lg:min-h-full">
          <ImageWithFallback
            src={content.image.src}
            alt={content.image.alt[langText]}
            fallbackLabel={content.image.fallbackLabel[langText]}
            className="brightness-95"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/65 via-transparent to-transparent lg:bg-gradient-to-l" />
        </div>
      </div>
    </section>
  );
}