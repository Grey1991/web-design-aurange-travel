import {
  BriefcaseBusiness,
  Bus,
  CarFront,
  Map,
  MapPin,
  PlaneTakeoff,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/src/components/ui/card";
import type { Language } from "@/src/config/site-content";

const serviceIcons: Record<string, LucideIcon> = {
  planning: Map,
  "worldwide-tours": MapPin,
  charter: CarFront,
  airport: PlaneTakeoff,
  group: Bus,
  business: BriefcaseBusiness,
};

type ServicesSectionProps = {
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

export function ServicesSection({ language, content }: ServicesSectionProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section id="services" className="bg-[var(--color-muted-bg)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {content.items.map((item) => {
            const Icon = serviceIcons[item.key] ?? Map;
            return (
              <Card
                key={item.key}
                className="group h-full transition-all duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-transform duration-300 motion-reduce:transition-none motion-safe:group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
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