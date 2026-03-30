# 01 — Run it on your computer

This guide gets the project running locally on your machine.
You will end up with two servers running at the same time:
the **backend** on port 8000 and the **frontend** on port 3000.

---

## What you need to install

Install these before you start. Click the links for the official download pages.

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | 18 or newer | [nodejs.org](https://nodejs.org) |
| **Python** | 3.11 or newer | [python.org](https://www.python.org/downloads/) |
| **Git** | any recent version | [git-scm.com](https://git-scm.com) |
| **Code editor** | — | [Cursor](https://cursor.sh) or [VS Code](https://code.visualstudio.com) |

To check if something is already installed, open a terminal and run:

```bash
node --version
python --version
git --version
```

---

## Step 1 — Clone the repo

"Cloning" downloads a copy of the project to your computer and sets up the
Git connection so you can save and share your changes later.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

> Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

---

## Step 2 — Start the backend

The backend is a Python API server. It handles data processing and exposes
endpoints your frontend can call.

Open a terminal window and run:

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment:

```bash
# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate
```

Install dependencies and start the server:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

You should see output ending with:

```
INFO:     Uvicorn running on http://127.0.0.1:8000
```

**Leave this terminal open.** Your API is now running on port 8000.
You can verify it by opening [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health) in your browser — it should return `{"status":"ok"}`.

---

## Step 3 — Start the frontend

The frontend is a Next.js app — the website you actually see in the browser.

Open a **second terminal window** (keep the backend one running) and run:

```bash
cd frontend
npm install
npm run dev
```

You should see:

```
▲ Next.js ready on http://localhost:3000
```

**Leave this terminal open too.**

---

## Step 4 — Open the site

Go to [http://localhost:3000](http://localhost:3000) in your browser.
You should see the home page with the navbar at the top.

> **Two terminals at once.** This is the most common "why isn't it working?" moment.
> You need one terminal for the backend and one for the frontend, both running
> at the same time. If you close one, that part stops working.

---

## Step 5 — Set up environment variables

Environment variables are settings your app reads at runtime — things like
API URLs or secret keys — that you don't want to hard-code or share publicly.

Copy the example files:

```bash
# In the frontend/ folder
cp frontend/.env.example frontend/.env.local

# In the backend/ folder
cp backend/.env.example backend/.env
```

> On Windows PowerShell use `Copy-Item` instead of `cp`:
> ```powershell
> Copy-Item frontend\.env.example frontend\.env.local
> Copy-Item backend\.env.example backend\.env
> ```

The defaults in the example files work for local development — you don't need
to change anything yet. You will update these when you deploy (see
[03_DEPLOY_FRONTEND.md](03_DEPLOY_FRONTEND.md) and [04_DEPLOY_BACKEND.md](04_DEPLOY_BACKEND.md)).

> **Never commit `.env` or `.env.local` to Git.** They are already listed in
> `.gitignore` to protect you from accidentally sharing secrets.

---

## You're set up

| URL | What it is |
|-----|-----------|
| [http://localhost:3000](http://localhost:3000) | Your frontend |
| [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health) | Backend health check |

Next: [02 — Save your work with Git →](02_GIT_BASICS.md)
