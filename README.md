# personal-lap-template

> A clean starting point for a personal lab — Next.js frontend + FastAPI backend,
> ready for experiments, demos, and a CV page.

**[Leer en Español →](README.es.md)**

---

## What's included

| Area | Detail |
|------|--------|
| **Frontend** | Next.js 16, React 19, TypeScript 5, Tailwind CSS 4 |
| **Backend** | FastAPI, Uvicorn (Python 3.11+) |
| **Linting** | ESLint 9 flat config |
| **Pages** | Home, CV placeholder, Lab index |
| **Lab app** | Word Counter — a working example to follow |
| **UI kit** | `components/ui/Page.tsx` — shared layout primitives |
| **Docs** | Setup, Git, Vercel + Render deployment guides (EN + ES) |
| **CLAUDE.md** | Context files at every level for AI-assisted development |

---

## Project structure

```
personal-lap-template/
├── frontend/
│   ├── app/
│   │   ├── layout.tsx        # global shell (Navbar + Footer)
│   │   ├── page.tsx          # home
│   │   ├── cv/page.tsx       # CV placeholder
│   │   └── lab/              # lab index + experiments
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── cv/CVContent.tsx  # fill in your details
│   │   ├── lab/LabCard.tsx
│   │   └── ui/Page.tsx       # PageContainer, Tag, ButtonLink, …
│   └── lib/
│       ├── api.ts            # fetch wrapper + healthCheck()
│       ├── labApps.ts        # lab experiment registry
│       └── lab/types.ts      # LabApp, LabStatus, LabKind
├── backend/
│   └── app/
│       ├── main.py           # FastAPI app + CORS
│       └── api/health.py     # GET /api/v1/health
├── docs/                     # step-by-step guides (EN + ES)
└── CLAUDE.md                 # repo-level AI context
```

---

## Quick start

You need two terminal windows open at the same time.

**Terminal 1 — backend**

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # macOS / Linux
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Runs on <http://localhost:8000>

**Terminal 2 — frontend**

```bash
cd frontend
cp .env.example .env.local    # macOS / Linux
# Copy-Item .env.example .env.local  (Windows PowerShell)
npm install
npm run dev
```

Runs on <http://localhost:3000>

---

## Adding a lab experiment

1. Create `frontend/app/lab/<slug>/meta.ts`:

```ts
import type { LabApp } from "@/lib/lab/types";

export const myExperimentMeta: LabApp = {
  href: "/lab/my-experiment",
  title: "My Experiment",
  description: "What it does in one sentence.",
  status: "building",
};
```

2. Register it in `frontend/lib/labApps.ts`:

```ts
import { myExperimentMeta } from "@/app/lab/my-experiment/meta";

export const labApps: LabApp[] = [myExperimentMeta];
```

3. Create the page at `frontend/app/lab/<slug>/page.tsx`.

See `frontend/app/lab/word-count/` for a complete working example.

### Lab status values

| Status | Meaning |
|--------|---------|
| `live` | Finished and working — renders as a clickable link |
| `building` | Work in progress |
| `idea` | Planned — renders as a greyed-out, non-clickable card |

---

## Documentation

Full step-by-step guides in **English** and **Spanish**:

| # | Guide | EN | ES |
|---|-------|----|----|
| 1 | Local setup | [→](docs/en/01_LOCAL_SETUP.md) | [→](docs/es/01_LOCAL_SETUP.md) |
| 2 | Git basics | [→](docs/en/02_GIT_BASICS.md) | [→](docs/es/02_GIT_BASICS.md) |
| 3 | Deploy frontend (Vercel) | [→](docs/en/03_DEPLOY_FRONTEND.md) | [→](docs/es/03_DEPLOY_FRONTEND.md) |
| 4 | Deploy backend (Render) | [→](docs/en/04_DEPLOY_BACKEND.md) | [→](docs/es/04_DEPLOY_BACKEND.md) |
| ★ | Challenge | [→](docs/en/CHALLENGE.md) | [→](docs/es/CHALLENGE.md) |

---

## Tech stack

| Layer | Technology | Hosting |
|-------|-----------|---------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 | Vercel |
| Backend | FastAPI, Uvicorn, Python 3.11+ | Render |
