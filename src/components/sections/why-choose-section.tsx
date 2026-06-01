import {
  BadgeCheck,
  HandCoins,
  MessageCircleHeart,
  MapPinned,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/src/components/ui/card";
import type { Language } from "@/src/config/site-content";

const chooseIcons: Record<string, LucideIcon> = {
  personalised: MapPinned,
  flexible: HandCoins,
  "local-support": BadgeCheck,
  communication: MessageCircleHeart,
};

type WhyChooseSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    items: readonly {
      key: string;
      title: { en: string; zh: string };
      description: { en: string; zh: string };
    }[];
  };
};

export function WhyChooseSection({ language, content }: WhyChooseSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  const iconShellStyles = [
    "from-[#e8f4f5] to-[#dbeff1] text-[#0f5f6d]",
    "from-[#fff3df] to-[#ffe8c5] text-[#b36c00]",
    "from-[#ecf8f1] to-[#d9f1e6] text-[#0e6d4b]",
    "from-[#eef3ff] to-[#dde7ff] text-[#3452a3]",
  ] as const;

  return (
    <section id="why-choose-us" className="bg-[var(--color-muted-bg)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = chooseIcons[item.key] ?? BadgeCheck;
            const shellStyle = iconShellStyles[index % iconShellStyles.length];
            return (
              <Card
                key={item.key}
                className="group h-full transition-all duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
              >
                <div
                  className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${shellStyle} shadow-sm transition-transform duration-300 motion-reduce:transition-none motion-safe:group-hover:scale-105`}
                >
                  <div className="absolute inset-1 rounded-xl border border-white/60" aria-hidden="true" />
                  <Icon
                    className="relative h-6 w-6 transition-transform duration-300 motion-reduce:transition-none motion-safe:group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                  {item.title[langText]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {item.description[langText]}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}