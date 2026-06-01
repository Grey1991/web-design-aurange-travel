import type { Language } from "@/src/config/site-content";

type TrustStatistic = {
  value: string;
  label: { en: string; zh: string };
  subLabel?: { en: string; zh: string };
};

type TrustStatisticsStripProps = {
  language: Language;
  items: readonly TrustStatistic[];
};

export function TrustStatisticsStrip({ language, items }: TrustStatisticsStripProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <section aria-label="Trust statistics" className="bg-white py-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted-bg)] p-4 lg:grid-cols-4">
          {items.map((item) => (
            <div key={`${item.value}-${item.label.en}`} className="rounded-xl bg-white p-3.5 shadow-sm">
              <p className="text-2xl font-semibold text-[var(--color-primary)]">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text-primary)]">
                {item.label[langText]}
              </p>
              {item.subLabel ? (
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                  {item.subLabel[langText]}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}