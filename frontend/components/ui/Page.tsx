import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const pageWidths = {
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
} as const;

type PageContainerProps = {
  children: ReactNode;
  width?: keyof typeof pageWidths;
  className?: string;
};

export function PageContainer({
  children,
  width = "2xl",
  className,
}: PageContainerProps) {
  return (
    <div className={cx("mx-auto px-6 py-16", pageWidths[width], className)}>
      {children}
    </div>
  );
}

export function PageEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "mb-1 text-sm font-medium text-amber-600 dark:text-amber-400",
        className
      )}
    >
      {children}
    </p>
  );
}

export function PageTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cx(
        "text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cx(
        "text-lg font-semibold text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function PageLead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-lg border border-zinc-200 p-4 dark:border-zinc-800",
        className
      )}
    >
      {children}
    </div>
  );
}

const tagTones = {
  neutral:
    "border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400",
  live: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  building:
    "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  idea: "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
} as const;

export function Tag({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof tagTones;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "rounded-full px-2 py-0.5 text-xs font-medium",
        tagTones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

const buttonTones = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300",
  secondary:
    "border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  tone?: keyof typeof buttonTones;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  children,
  tone = "secondary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
        buttonTones[tone],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "className" | "children"
>) {
  return (
    <Link
      href={href}
      className={cx(
        "font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
