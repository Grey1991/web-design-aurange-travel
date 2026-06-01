"use client";

import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import type { MouseEvent } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "cta-solid"
  | "cta-inverse"
  | "on-dark-primary"
  | "on-dark-secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-dark)] hover:shadow-md focus-visible:ring-[var(--color-primary)]",
  secondary:
    "bg-white text-[var(--color-primary)] border border-[var(--color-primary)] shadow-sm hover:bg-[var(--color-primary-light)] hover:shadow-md focus-visible:ring-[var(--color-primary)]",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-muted-bg)] focus-visible:ring-[var(--color-primary)]",
  "cta-solid":
    "bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-dark)] hover:shadow-md focus-visible:ring-[var(--color-primary)]",
  "cta-inverse":
    "bg-white text-[var(--color-primary)] border border-white/80 shadow-sm hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary-light)] hover:shadow-md focus-visible:ring-[var(--color-primary)]",
  "on-dark-primary":
    "bg-white text-[var(--color-primary-dark)] border border-white shadow-sm hover:bg-[#f5fbfb] hover:shadow-md focus-visible:ring-white",
  "on-dark-secondary":
    "bg-white/10 text-white border border-white/85 shadow-sm backdrop-blur-sm hover:bg-white/20 hover:border-white focus-visible:ring-white",
};

const baseClassName =
  "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200 motion-reduce:transition-none motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  magnetic?: boolean;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonLinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps | ButtonLinkProps) {
  const { children, className = "", variant = "primary", magnetic = false } = props;
  const classes = `${baseClassName} ${variantClasses[variant]} ${magnetic ? "magnetic-button" : ""} ${className}`.trim();

  const updateMagneticOffset = (target: EventTarget & (HTMLAnchorElement | HTMLButtonElement), x: number, y: number) => {
    target.style.setProperty("--mx", `${x}px`);
    target.style.setProperty("--my", `${y}px`);
  };

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!magnetic || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 4;
    updateMagneticOffset(target, offsetX, offsetY);
  };

  const handleMouseLeave = (target: EventTarget & (HTMLAnchorElement | HTMLButtonElement)) => {
    if (!magnetic) {
      return;
    }
    updateMagneticOffset(target, 0, 0);
  };

  if ("href" in props && props.href) {
    const { href, onMouseMove, onMouseLeave, ...rest } = props;
    return (
      <a
        href={href}
        className={classes}
        onMouseMove={(event) => {
          handleMouseMove(event);
          onMouseMove?.(event);
        }}
        onMouseLeave={(event) => {
          handleMouseLeave(event.currentTarget);
          onMouseLeave?.(event);
        }}
        {...rest}
      >
        <span className={magnetic ? "magnetic-content" : ""}>{children}</span>
      </a>
    );
  }

  const { type = "button", onMouseMove, onMouseLeave, ...rest } = props as ButtonProps;
  return (
    <button
      type={type}
      className={classes}
      onMouseMove={(event) => {
        handleMouseMove(event);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        handleMouseLeave(event.currentTarget);
        onMouseLeave?.(event);
      }}
      {...rest}
    >
      <span className={magnetic ? "magnetic-content" : ""}>{children}</span>
    </button>
  );
}