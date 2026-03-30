# Project Context

> Personal lab template. Frontend and backend are independently deployable.
> Last updated: 2026-03-30

## What this is

A monorepo with two runtime units:
- `frontend/` — Next.js 16 app (e.g. Vercel)
- `backend/` — FastAPI service (e.g. Render)

No root `package.json`. Each unit manages its own deps.

## Tech stack

| Layer    | Stack                                                         |
|----------|---------------------------------------------------------------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4              |
| Backend  | FastAPI, Uvicorn                                              |
| Infra    | Frontend on Vercel, backend on Render (adapt as needed)       |

## Folder map

```
backend/
  app/
    main.py              # FastAPI bootstrap, CORS, router mounting
    api/health.py        # GET /api/v1/health
    lab/                 # app-specific backend modules (add per experiment)
  requirements.txt
  Dockerfile

frontend/
  app/
    layout.tsx           # global shell (Navbar + Footer)
    page.tsx             # home
    cv/page.tsx          # CV placeholder
    lab/page.tsx         # lab index
    lab/*/               # lab app routes + meta.ts per app
  components/
    Navbar.tsx, Footer.tsx
    cv/CVContent.tsx
    lab/LabCard.tsx
    ui/Page.tsx          # shared UI primitives
  lib/
    api.ts               # HTTP client (fetch wrapper + healthCheck)
    labApps.ts           # aggregates per-app meta.ts files
    lab/types.ts         # LabApp, LabStatus, LabKind
```

## Shared contracts

- API version prefix: `/api/v1` (mounted in `backend/app/main.py`).
- Health: `GET /api/v1/health` returns `{ "status": "ok" }`.
- Frontend consumes backend via `NEXT_PUBLIC_API_URL` env var (default `http://localhost:8000`).
- Backend CORS via `CORS_ORIGINS` env var (comma-separated). Must include the frontend origin in production.
- Lab metadata type: `LabApp = { href, title, description, status, kind?, showOnHome? }` with `LabStatus = "live" | "building" | "idea"`.

## Rules to follow

- Always keep frontend and backend changes independent unless touching a shared contract.
- Always use `NEXT_PUBLIC_` prefix for frontend env vars exposed at runtime.
- Always version API routes under `/api/v1`.
- Always keep backend route handlers thin — delegate logic to service modules.
- Always register new lab apps in `frontend/lib/labApps.ts` via per-app `meta.ts`.
- Never put business logic in route handlers (backend) or page components (frontend).
- Never duplicate shared contracts — reference this file instead.
- Prefer explicit simple mappings over magic auto-discovery.

## Naming conventions

- Frontend components: PascalCase filenames (`Navbar.tsx`, `LabCard.tsx`).
- Frontend routes: `app/<segment>/page.tsx` (Next.js App Router).
- Backend modules: snake_case (`health.py`, `health_check()`).
- Shared TS types: PascalCase (`LabApp`, `LabStatus`).

## Deeper context (use @mentions in Cursor)

| Scope             | File                               |
|-------------------|------------------------------------|
| Frontend patterns | `frontend/CLAUDE.md`               |
| Backend patterns  | `backend/CLAUDE.md`                |
| Per-app context   | `frontend/app/lab/<app>/CLAUDE.md` |
