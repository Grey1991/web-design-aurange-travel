"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Select } from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import type { Language } from "@/src/config/site-content";

type ContactSectionProps = {
  language: Language;
  content: {
    title: { en: string; zh: string };
    form: {
      fields: {
        name: { en: string; zh: string };
        phone: { en: string; zh: string };
        email: { en: string; zh: string };
        service: { en: string; zh: string };
        message: { en: string; zh: string };
      };
      serviceOptions: readonly {
        value: string;
        label: { en: string; zh: string };
      }[];
      submit: { en: string; zh: string };
      success: { en: string; zh: string };
      requiredError: { en: string; zh: string };
      emailError: { en: string; zh: string };
    };
  };
  company: {
    phone: string;
    email: string;
    address: string;
  };
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactSection({ language, content, company }: ContactSectionProps) {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const messageId = useId();
  const errorId = useId();
  const successId = useId();

  const langText = language === "en" ? "en" : "zh";

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const values = Object.values(formState).map((value) => value.trim());
    const missingRequired = values.some((value) => !value);

    if (missingRequired) {
      setError(content.form.requiredError[langText]);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email.trim())) {
      setError(content.form.emailError[langText]);
      return;
    }

    // TODO: Integrate with email API endpoint or transactional email service.
    setSuccess(content.form.success[langText]);
    setFormState(defaultState);
  };

  return (
    <section id="contact" className="bg-[var(--color-muted-bg)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {content.title[langText]}
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <Card>
              <p className="text-sm font-semibold text-[var(--color-text-secondary)]">Phone</p>
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone}
              </a>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-[var(--color-text-secondary)]">Email</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 inline-flex items-center gap-2 break-all text-base font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {company.email}
              </a>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-[var(--color-text-secondary)]">Address</p>
              <div className="mt-2 space-y-2 text-base text-[var(--color-text-primary)]">
                {company.address.split("\n").map((line) => {
                  const trimmedLine = line.trim();
                  if (!trimmedLine) {
                    return null;
                  }

                  return (
                    <p key={trimmedLine} className="inline-flex items-start gap-2">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
                      <span>{trimmedLine}</span>
                    </p>
                  );
                })}
              </div>
            </Card>
          </div>

          <Card>
            <form noValidate onSubmit={onSubmit} aria-describedby={error ? errorId : undefined}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]" htmlFor="name">
                    {content.form.fields.name[langText]}
                  </label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    required
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]" htmlFor="phone">
                    {content.form.fields.phone[langText]}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    required
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]" htmlFor="email">
                    {content.form.fields.email[langText]}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    required
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]" htmlFor="service">
                    {content.form.fields.service[langText]}
                  </label>
                  <Select
                    id="service"
                    value={formState.service}
                    onChange={(event) => handleChange("service", event.target.value)}
                    required
                  >
                    <option value="">--</option>
                    {content.form.serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label[langText]}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]" htmlFor={messageId}>
                    {content.form.fields.message[langText]}
                  </label>
                  <Textarea
                    id={messageId}
                    value={formState.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    rows={5}
                    required
                  />
                </div>
              </div>

              {error ? (
                <p id={errorId} role="alert" className="mt-4 text-sm font-medium text-red-700">
                  {error}
                </p>
              ) : null}

              {success ? (
                <p
                  id={successId}
                  role="status"
                  aria-live="polite"
                  className="mt-4 text-sm font-medium text-[var(--color-primary)]"
                >
                  {success}
                </p>
              ) : null}

              <Button type="submit" magnetic className="group mt-6 w-full cursor-pointer sm:w-auto">
                <span className="inline-flex items-center gap-2 whitespace-nowrap transition-transform duration-200 motion-reduce:transition-none motion-safe:group-hover:translate-x-0.5">
                  {content.form.submit[langText]}
                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}