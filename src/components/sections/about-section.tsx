import { ImageWithFallback } from "@/src/components/image-with-fallback";
import type { Language } from "@/src/config/site-content";

type AboutSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    paragraphs: readonly { en: string; zh: string }[];
    image: {
      src: string;
      alt: { en: string; zh: string };
      fallbackLabel: { en: string; zh: string };
    };
  };
};

export function AboutSection({ language, content }: AboutSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {content.title[langText]}
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.en} className="text-base leading-8 text-[var(--color-text-secondary)]">
              {paragraph[langText]}
            </p>
          ))}
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted-bg)] shadow-sm">
          <ImageWithFallback
            src={content.image.src}
            alt={content.image.alt[langText]}
            fallbackLabel={content.image.fallbackLabel[langText]}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}