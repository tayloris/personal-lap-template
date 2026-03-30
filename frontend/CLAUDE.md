# Frontend Context

> Next.js App Router application — personal site + lab experiments.
> Last updated: 2026-03-30

## Key files

| Path | Purpose |
|------|---------|
| `app/layout.tsx` | Global shell (Navbar, Footer, root metadata) |
| `app/page.tsx` | Home page |
| `app/cv/page.tsx` | CV page (server component — exports metadata) |
| `app/lab/page.tsx` | Lab index (lists all lab apps) |
| `components/Navbar.tsx` | Sticky top nav with active-link highlighting |
| `components/Footer.tsx` | Simple bottom footer |
| `components/cv/CVContent.tsx` | CV client component (placeholder — fill in your details) |
| `components/lab/LabCard.tsx` | Renders a lab app card; clickable unless status is "idea" |
| `components/ui/Page.tsx` | Shared UI primitives: PageContainer, PageTitle, PageLead, Tag, ButtonLink, etc. |
| `lib/api.ts` | HTTP client wrapper + `healthCheck()` |
| `lib/labApps.ts` | Aggregates per-app `meta.ts` into the lab listing |
| `lib/lab/types.ts` | `LabApp`, `LabStatus`, `LabKind` types |

## Rules to follow

- Always use `"use client"` directive on components that use hooks, browser APIs, or event handlers.
- Always add a `meta.ts` file when creating a new lab app (exports `LabApp`), then register it in `lib/labApps.ts`.
- Always export `const metadata: Metadata` from every new `page.tsx` with a focused `title` and `description`.
- Never put `"use client"` directly on a `page.tsx` that needs metadata — use the Content component pattern (see SEO patterns below).
- Always use Tailwind utility classes for styling. Pair dark-mode classes with light variants.
- Always run `npm run lint` and `npm run build` in `frontend/` after changes to verify.
- Never import backend code or types directly — consume via HTTP fetch.
- Never use a global state store (no Redux/Zustand). Use local `useState`/`useEffect`.
- Prefer `next/image` for optimised images.

## Routing model

- File-system routing: `app/**/page.tsx`.
- Global chrome in root `layout.tsx`: `<Navbar />` + `<main>{children}</main>` + `<Footer />`.
- Lab apps can define their own `layout.tsx` to override the default chrome.
- Dynamic routes: `[param]/page.tsx` with `generateStaticParams()` for SSG.

## SEO patterns

- **Root metadata** lives in `app/layout.tsx`: title template, description.
- **Per-page metadata**: every `page.tsx` exports `const metadata: Metadata` with a unique `title` and `description`.
- **Content component pattern** — required when a page needs both `"use client"` and metadata:
  ```
  app/cv/page.tsx              ← Server Component: exports metadata, renders <CVContent />
  components/cv/CVContent.tsx  ← "use client": holds all hooks and interactivity
  ```

## Adding a lab experiment

1. Create `app/lab/<slug>/meta.ts` exporting a `LabApp` object.
2. Create `app/lab/<slug>/page.tsx` with the experiment UI.
3. Register the meta in `lib/labApps.ts`.
4. Optionally add `app/lab/<slug>/CLAUDE.md` with per-app context.

## State patterns

- Local component state via React hooks (`useState`, `useEffect`, `useCallback`, `useRef`).
- No shared client store. Each page owns its state.
- Side effects (data fetching) happen in `useEffect` or event handlers.

## Dev commands

```bash
cd frontend
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build (validates types + static pages)
npm run lint     # eslint
```

## Deeper context

| Scope          | File                               |
|----------------|------------------------------------|
| Root/contracts | `CLAUDE.md` (repo root)            |
| Per-app        | `app/lab/<app>/CLAUDE.md`          |
