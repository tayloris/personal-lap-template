# Backend Context

> FastAPI service providing HTTP API for the frontend.
> Last updated: 2026-03-30

## Key files

| Path | Purpose |
|------|---------|
| `app/main.py` | App bootstrap, CORS middleware, router mounting |
| `app/api/health.py` | `GET /api/v1/health` |
| `requirements.txt` | Python dependencies |
| `Dockerfile` | Container build (Uvicorn on port 8000) |

## Rules to follow

- Always keep route handlers thin — validate input, delegate to service, return response.
- Always mount new routers under `/api/v1` in `main.py`.
- Always use `HTTPException` for error responses with appropriate status codes (400, 404).
- Never embed compute/business logic in route handlers.
- Never define DB models until a real database is needed.
- Prefer module-level service functions over classes for simple logic.

## Folder structure

```
backend/
  app/
    main.py              # FastAPI app + CORS + router mounting
    api/
      health.py          # system health endpoint
    lab/
      <experiment>/
        api.py           # HTTP handlers
        service.py       # business logic
  requirements.txt
  Dockerfile
```

## Adding a new experiment endpoint

1. Create `app/lab/<slug>/api.py` with an `APIRouter`.
2. Create `app/lab/<slug>/service.py` with the business logic.
3. Mount the router in `app/main.py` under `/api/v1/<slug>`.
4. Add any new packages to `requirements.txt`.

## Request flow

1. `main.py` creates FastAPI app, adds CORS, mounts routers.
2. Request hits route handler in `api.py`.
3. Handler validates input (guard clauses with `HTTPException`).
4. Handler calls service function(s) in `service.py`.
5. Service returns data dict.
6. Handler returns dict as JSON response.

## Middleware

- CORS only (configured via `CORS_ORIGINS` env var, comma-separated).
- Default: `http://localhost:3000`.
- Production must include the deployed frontend origin.
- No auth middleware.

## Error handling

- 404: unknown resource.
- 400: invalid input (bad MIME, oversized file, parse failure).
- Pattern: validate early in handler, raise `HTTPException` with `detail` message.

## Dev commands

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload    # dev server on port 8000
```

## Deeper context

| Scope          | File                    |
|----------------|-------------------------|
| Root/contracts | `CLAUDE.md` (repo root) |
