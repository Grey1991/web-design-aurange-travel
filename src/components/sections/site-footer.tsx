import Image from "next/image";
import type { Language } from "@/src/config/site-content";

type NavLink = {
  id: string;
  label: {
    en: string;
    zh: string;
  };
};

type SiteFooterProps = {
  language: Language;
  links: readonly NavLink[];
  company: {
    logo: {
      en: string;
      zh: string;
    };
    name: {
      en: string;
      zh: string;
    };
    shortDescription: {
      en: string;
      zh: string;
    };
    phone: string;
    email: string;
    address: string;
    acn: string;
    abn: string;
    copyright: string;
  };
};

export function SiteFooter({ language, links, company }: SiteFooterProps) {
  const langText = language === "en" ? "en" : "zh";

  return (
    <footer className="bg-[#0c3f47] py-12 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-white/10">
              <Image src="/icon.svg" alt="AURANGE TRAVEL icon" fill sizes="24px" className="object-contain" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-[0.18em]">{company.logo.en}</p>
              <p className="text-xs text-white/75">{company.logo.zh}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/80">{company.shortDescription[langText]}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
            {langText === "en" ? "Navigate" : "导航"}
          </h3>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm text-white/80 hover:text-white">
                  {link.label[langText]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
            {langText === "en" ? "Contact" : "联系方式"}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="whitespace-pre-line">{company.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
            {langText === "en" ? "Company" : "公司信息"}
          </h3>
          <p className="mt-4 text-sm text-white/80">{company.name.en}</p>
          <p className="mt-1 text-sm text-white/80">ACN: {company.acn}</p>
          <p className="mt-1 text-sm text-white/80">ABN: {company.abn}</p>
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-white/15 px-4 pt-5 text-sm text-white/70 sm:px-6 lg:px-8">
        {company.copyright}
      </div>
    </footer>
  );
}