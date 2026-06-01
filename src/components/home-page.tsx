"use client";

import { useState } from "react";
import { demoContent } from "@/src/config/demo-content";
import { siteContent, type Language } from "@/src/config/site-content";
import { AboutSection } from "@/src/components/sections/about-section";
import { CompetitivePricingSection } from "@/src/components/sections/competitive-pricing-section";
import { ContactCtaSection } from "@/src/components/sections/contact-cta-section";
import { ContactSection } from "@/src/components/sections/contact-section";
import { CustomerReviewsSection } from "@/src/components/sections/customer-reviews-section";
import { DestinationsSection } from "@/src/components/sections/destinations-section";
import { FaqSection } from "@/src/components/sections/faq-section";
import { HeroSection } from "@/src/components/sections/hero-section";
import { HowItWorksSection } from "@/src/components/sections/how-it-works-section";
import { ServicesSection } from "@/src/components/sections/services-section";
import { SiteFooter } from "@/src/components/sections/site-footer";
import { SiteHeader } from "@/src/components/sections/site-header";
import { TrustStatisticsStrip } from "@/src/components/sections/trust-statistics-strip";
import { WhyChooseSection } from "@/src/components/sections/why-choose-section";

const STORAGE_KEY = "aurange-language";

export function HomePage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "zh" ? stored : "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "zh" : "en";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <div className="bg-white text-[var(--color-text-primary)]">
      <SiteHeader
        language={language}
        links={siteContent.navigation.links}
        ctaLabel={siteContent.navigation.cta}
        languageSwitchLabel={siteContent.navigation.languageSwitch}
        logo={siteContent.company.logo}
        onToggleLanguage={toggleLanguage}
      />
      <main>
        <HeroSection language={language} content={siteContent.hero} />
        <TrustStatisticsStrip language={language} items={demoContent.trustStats} />
        <AboutSection language={language} content={siteContent.about} />
        <ServicesSection language={language} content={siteContent.services} />
        <CompetitivePricingSection language={language} content={demoContent.samplePricing} />
        <DestinationsSection
          language={language}
          content={siteContent.destinations}
          prices={demoContent.destinationPrices}
        />
        <CustomerReviewsSection language={language} content={demoContent.reviews} />
        <WhyChooseSection language={language} content={siteContent.whyChooseUs} />
        <HowItWorksSection language={language} content={siteContent.howItWorks} />
        <FaqSection language={language} content={siteContent.faq} />
        <ContactCtaSection language={language} content={siteContent.ctaBanner} />
        <ContactSection
          language={language}
          content={siteContent.contact}
          company={siteContent.company}
        />
      </main>
      <SiteFooter
        language={language}
        links={siteContent.navigation.links}
        company={siteContent.company}
      />
    </div>
  );
}