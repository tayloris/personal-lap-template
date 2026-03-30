# Word Counter — App Context

> Pure frontend text analysis tool. No backend required.
> Route: `/lab/word-count` | Status: `live`
> Last updated: 2026-03-30

## Key files

| Path | Purpose |
|------|---------|
| `page.tsx` | App UI — textarea input + stats grid. Uses `"use client"`. |
| `meta.ts` | Lab registry metadata (`LabApp`) |
| `CLAUDE.md` | This file |

## How it works

- Single `page.tsx` with `"use client"`.
- `computeStats(text)` is a pure function — takes a string, returns word/char/sentence/paragraph/reading-time counts.
- Stats are recomputed on every keystroke via `useMemo`.
- No backend calls, no external dependencies.

## Rules to follow

- Keep `computeStats` as a pure function — no side effects.
- If the page ever needs `metadata` exports, extract interactivity to a `WordCountContent.tsx` client component (see SEO patterns in `frontend/CLAUDE.md`).
- Do not add backend calls unless you genuinely need server-side processing.

## Extending this app

Ideas that stay frontend-only:
- Add a keyword frequency table.
- Add copy-to-clipboard for stats.
- Add a character limit with a progress bar.

Ideas that need a backend:
- Readability score (e.g., Flesch–Kincaid) via a Python endpoint.
- Language detection.
