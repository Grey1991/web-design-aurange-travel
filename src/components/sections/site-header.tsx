"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import type { Language } from "@/src/config/site-content";

type NavLink = {
  id: string;
  label: {
    en: string;
    zh: string;
  };
};

type SiteHeaderProps = {
  language: Language;
  links: readonly NavLink[];
  ctaLabel: {
    en: string;
    zh: string;
  };
  languageSwitchLabel: {
    en: string;
    zh: string;
  };
  logo: {
    en: string;
    zh: string;
  };
  onToggleLanguage: () => void;
};

export function SiteHeader({
  language,
  links,
  ctaLabel,
  languageSwitchLabel,
  logo,
  onToggleLanguage,
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuToggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) {
        return;
      }

      const clickedInsideMenu = mobileMenuRef.current?.contains(target);
      const clickedToggleButton = menuToggleButtonRef.current?.contains(target);

      if (!clickedInsideMenu && !clickedToggleButton) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [mobileMenuOpen]);

  const langText = language === "en" ? "en" : "zh";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label={logo[langText]}>
            <span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-md">
              <Image src="/icon.svg" alt="AURANGE TRAVEL icon" fill sizes="24px" className="object-contain" />
            </span>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-[0.18em] text-[var(--color-primary)]">
              {logo.en}
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">{logo.zh}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-200 hover:text-[var(--color-primary)] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--color-primary)] after:transition-transform after:duration-200 motion-reduce:after:transition-none hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {link.label[langText]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-muted-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            {languageSwitchLabel[langText]}
          </button>
          <Button href="#contact" magnetic>
            {ctaLabel[langText]}
          </Button>
        </div>

        <button
          ref={menuToggleButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-primary)] lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="border-t border-[var(--color-border)] bg-white lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-muted-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                {link.label[langText]}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onToggleLanguage}
                className="h-11 flex-1 rounded-full border border-[var(--color-border)] text-sm font-medium text-[var(--color-text-primary)]"
              >
                {languageSwitchLabel[langText]}
              </button>
              <Button
                href="#contact"
                magnetic
                className="flex-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaLabel[langText]}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}