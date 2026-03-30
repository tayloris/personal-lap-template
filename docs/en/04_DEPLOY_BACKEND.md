# 04 — Deploy the backend on Render

Render is a cloud platform where you can run your Python API for free.
Like Vercel, it connects to GitHub and redeploys when you push.

> **The chicken-and-egg situation:** the frontend needs the backend URL, and
> the backend needs the frontend URL. Deploy both first with placeholder values,
> then update each with the real URL of the other. It's a one-time setup.

---

## Step 1 — Create a Render account

1. Go to [render.com](https://render.com).
2. Click **Get Started** → choose **GitHub**.
3. Authorise Render to access your GitHub account.

---

## Step 2 — Create a new Web Service

1. On the Render dashboard, click **New → Web Service**.
2. Connect your GitHub repository.
3. Click **Connect**.

---

## Step 3 — Configure the service

Fill in these fields:

| Setting | Value |
|---------|-------|
| **Name** | anything you like, e.g. `my-lab-backend` |
| **Root Directory** | `backend` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `uvicorn app.main:app --host 0.0.0.0 --port 8000` |

> The **Root Directory** field is easy to miss. Make sure it is set to
> `backend` — otherwise Render will look for a Python app in the wrong place.

---

## Step 4 — Add the environment variable

Your backend needs to know which frontend origin to allow (CORS).

In the **Environment Variables** section, add:

| Key | Value |
|-----|-------|
| `CORS_ORIGINS` | *(paste your Vercel URL here — from [03_DEPLOY_FRONTEND.md](03_DEPLOY_FRONTEND.md))* |

> If you haven't deployed the frontend yet, put a placeholder like
> `https://placeholder.vercel.app` for now. You'll update it in Step 6.

---

## Step 5 — Deploy

Click **Create Web Service**.

Render will install your dependencies and start the API.
When it finishes, you'll see a URL at the top of the page like:
`https://my-lab-backend.onrender.com`

Verify it works by visiting:
`https://my-lab-backend.onrender.com/api/v1/health`

You should see: `{"status":"ok"}`

---

## Step 6 — Wire up the two services

Now that both are deployed, update each with the real URL of the other:

**Update Vercel (frontend):**
1. Go to your project on [vercel.com](https://vercel.com).
2. Settings → Environment Variables → set `NEXT_PUBLIC_API_URL` to your Render URL.
3. Redeploy.

**Update Render (backend):**
1. Go to your service on [render.com](https://render.com).
2. Environment → update `CORS_ORIGINS` to your Vercel URL.
3. Render will redeploy automatically.

---

## Free tier note

Render's free tier **spins down** services that haven't received a request in
15 minutes. The first request after a spin-down takes ~30 seconds to respond.
This is normal on the free plan — it won't happen on a paid plan.

---

## You're live

| What | Where |
|------|-------|
| Frontend | `https://your-app.vercel.app` |
| Backend health | `https://your-backend.onrender.com/api/v1/health` |

Next: [★ Challenge — things to build →](CHALLENGE.md)
