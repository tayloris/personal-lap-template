"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer, PageTitle, PageLead } from "@/components/ui/Page";

// Note: metadata cannot be exported from "use client" pages.
// If SEO matters, extract to a server wrapper (see frontend/CLAUDE.md SEO patterns).

function computeStats(text: string) {
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = trimmed === "" ? 0 : trimmed.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = trimmed === "" ? 0 : text.split(/\n\s*\n/).filter((p) => p.trim() !== "").length;
  const readingTimeSec = Math.round((words / 200) * 60);
  const minutes = Math.floor(readingTimeSec / 60);
  const seconds = readingTimeSec % 60;
  const readingTime =
    words === 0
      ? "—"
      : minutes > 0
        ? `${minutes}m ${seconds}s`
        : `${seconds}s`;

  return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime };
}

export default function WordCountPage() {
  const [text, setText] = useState("");
  const stats = useMemo(() => computeStats(text), [text]);

  return (
    <PageContainer width="3xl">
      <Link
        href="/lab"
        className="mb-6 inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Lab
      </Link>

      <PageTitle>Word Counter</PageTitle>
      <PageLead>
        Paste or type any text below and get instant statistics.
      </PageLead>

      <div className="mt-6 space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here…"
          rows={10}
          className="w-full resize-y rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-950"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Stat label="Words" value={stats.words} />
          <Stat label="Characters" value={stats.chars} />
          <Stat label="Characters (no spaces)" value={stats.charsNoSpaces} />
          <Stat label="Sentences" value={stats.sentences} />
          <Stat label="Paragraphs" value={stats.paragraphs} />
          <Stat label="Reading time" value={stats.readingTime} />
        </div>

        {text.length > 0 && (
          <button
            onClick={() => setText("")}
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            Clear
          </button>
        )}
      </div>
    </PageContainer>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
        {value}
      </p>
    </div>
  );
}
