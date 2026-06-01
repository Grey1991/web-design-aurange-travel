import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={`h-11 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 text-sm text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${className}`.trim()}
      {...props}
    >
      {children}
    </select>
  );
}