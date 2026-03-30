"use client";

import Link from "next/link";
import type { LabApp } from "@/lib/lab/types";
import { Tag } from "@/components/ui/Page";

type LabCardProps = {
  app: LabApp;
};

export default function LabCard({ app }: LabCardProps) {
  const isClickable = app.status !== "idea";

  const content = (
    <>
      <div className="flex items-center gap-3">
        <span className="font-medium text-zinc-900 dark:text-zinc-100">
          {app.title}
        </span>
        <Tag tone={app.status}>{app.status}</Tag>
        {app.kind === "site" && <Tag tone="neutral">site</Tag>}
      </div>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {app.description}
      </p>
    </>
  );

  if (!isClickable) {
    return (
      <div className="block rounded-lg border border-zinc-200 p-4 opacity-60 dark:border-zinc-800">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={app.href}
      className="block rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
    >
      {content}
    </Link>
  );
}
