import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router

app = FastAPI(title="Personal LAP Template API")

cors_origins_env = os.getenv("CORS_ORIGINS", "http://localhost:3000")
cors_origins = [
    origin.strip()
    for origin in cors_origins_env.split(",")
    if origin.strip() and origin.strip().startswith(("http://", "https://"))
]
if not cors_origins:
    cors_origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix="/api/v1")
