"use client";

import { useState } from "react";
import { PageContainer, PageTitle, SectionTitle } from "@/components/ui/Page";

export default function CVContent() {
  return (
    <PageContainer width="3xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <PageTitle>Your Name</PageTitle>
            <p className="mt-1 text-base text-zinc-500 dark:text-zinc-400">
              Your title or tagline
            </p>
          </div>
          {/* Uncomment once you have a PDF ready: */}
          {/* <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            ↓ Download PDF
          </a> */}
        </div>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Write a short summary of your background, expertise, and what you
          build. Keep it to 2–3 sentences.
        </p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Experience */}
      <Section title="Experience">
        <TimelineItem
          period="2022 – present"
          title="Your Current Role"
          org="Company Name, City"
          description="Describe what you do: key responsibilities, technologies used, and impact delivered."
        />
        <TimelineItem
          period="2019 – 2022"
          title="Previous Role"
          org="Previous Company, City"
          description="Describe what you did here."
        />
      </Section>

      {/* Education */}
      <Section title="Education">
        <TimelineItem
          period="2015 – 2019"
          title="Degree in Your Field"
          org="University Name, City"
          description="Brief description of your thesis or specialization."
        />
      </Section>

      {/* Selected work */}
      <Section title="Selected work">
        <Expandable
          title="Project or contribution title"
          subtitle="Company or context"
          details={[
            "Key outcome or responsibility.",
            "Technology or method used.",
            "Impact or result achieved.",
          ]}
        />
        <Expandable
          title="Another project"
          subtitle="Context"
          details={[
            "What you built.",
            "How you built it.",
            "Why it mattered.",
          ]}
        />
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <SkillGroup label="Languages" skills={["TypeScript", "Python"]} />
        <SkillGroup
          label="Frameworks"
          skills={["Next.js", "React", "FastAPI"]}
        />
        <SkillGroup label="Tools" skills={["Git", "Docker"]} />
      </Section>
    </PageContainer>
  );
}

/* ── Sub-components ─────────────────────────────────────── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <SectionTitle className="mb-5">{title}</SectionTitle>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function TimelineItem({
  period,
  title,
  org,
  description,
}: {
  period: string;
  title: string;
  org: string;
  description?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-24 flex-shrink-0 pt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
        {period}
      </div>
      <div className="relative flex-1 border-l border-zinc-200 pb-1 pl-4 dark:border-zinc-800">
        <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950" />
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{org}</p>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function Expandable({
  title,
  subtitle,
  details,
}: {
  title: string;
  subtitle: string;
  details: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
      >
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {title}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{subtitle}</p>
        </div>
        <span
          className="ml-4 text-zinc-400 transition-transform dark:text-zinc-500"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ▸
        </span>
      </button>
      {open && (
        <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800">
          <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            {details.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function SkillGroup({
  label,
  skills,
}: {
  label: string;
  skills: string[];
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="w-20 flex-shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
