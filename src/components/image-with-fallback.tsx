"use client";

import Image from "next/image";
import { Compass } from "lucide-react";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageWithFallback({
  src,
  alt,
  fallbackLabel,
  className = "",
  sizes,
  priority = false,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full min-h-48 w-full items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-primary-light)] p-6 text-center ${className}`.trim()}
        role="img"
        aria-label={fallbackLabel}
      >
        <div className="flex max-w-xs flex-col items-center gap-3 text-[var(--color-primary-dark)]">
          <Compass className="h-7 w-7" aria-hidden="true" />
          <p className="text-sm font-medium">{fallbackLabel}</p>
          {/* TODO: Add local photo assets under /public/images to replace placeholders. */}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`.trim()}
      onError={() => setFailed(true)}
    />
  );
}