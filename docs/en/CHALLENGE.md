# Your Challenge

This repo is a blank canvas. Here are some ideas to get you started,
from smallest to most ambitious.

Work through the levels in order — each one builds on the last.

---

## Level 1 — Make it yours *(~30 minutes)*

- [ ] Change the site title and description in `frontend/app/layout.tsx`
- [ ] Update the home page text in `frontend/app/page.tsx`
- [ ] Fill in your real name, bio, and links in `frontend/components/cv/CVContent.tsx`
- [ ] Replace the placeholder experience and education entries with your own

---

## Level 2 — Add your first lab app *(a few hours)*

- [ ] Create `frontend/app/lab/hello-world/page.tsx` with any content
- [ ] Add a `meta.ts` file for it:
  ```ts
  // frontend/app/lab/hello-world/meta.ts
  import type { LabApp } from "@/lib/lab/types";

  export const helloWorldMeta: LabApp = {
    href: "/lab/hello-world",
    title: "Hello World",
    description: "My first lab experiment.",
    status: "live",
  };
  ```
- [ ] Register it in `frontend/lib/labApps.ts` and see it appear on the lab page
- [ ] Change the status to `"building"` and notice how the card looks different

---

## Level 3 — Connect to the backend *(half a day)*

- [ ] Add a new FastAPI route in `backend/app/api/` — for example, an endpoint
      that returns a random quote
- [ ] Mount the router in `backend/app/main.py` under `/api/v1/`
- [ ] Call it from your frontend page using the `request()` helper in `lib/api.ts`
- [ ] Display the result on screen

**Tip:** use `curl` or [Hoppscotch](https://hoppscotch.io) to test the API
endpoint before wiring up the frontend.

---

## Level 4 — Deploy it *(a day, first time)*

- [ ] Follow [docs/en/03_DEPLOY_FRONTEND.md](03_DEPLOY_FRONTEND.md) and get a live Vercel URL
- [ ] Follow [docs/en/04_DEPLOY_BACKEND.md](04_DEPLOY_BACKEND.md) and get a live Render URL
- [ ] Wire up the two URLs as environment variables in each service
- [ ] Share the link with someone

---

## Level 5 — Go further

- [ ] Add a page about yourself at `/about`
- [ ] Build a lab app that does something you actually want to exist
- [ ] Add an interesting dataset and visualise it (CSV → chart)
- [ ] Ask Cursor (or ChatGPT) to help you build something — that's the whole point
      of this template

---

> **The goal isn't to finish the list.** Pick the one thing that sounds most
> interesting right now and start there.
