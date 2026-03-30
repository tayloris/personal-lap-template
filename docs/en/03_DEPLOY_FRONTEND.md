# 03 — Deploy the frontend on Vercel

Vercel is a hosting platform built for Next.js. You connect it to GitHub, and
every time you `git push`, your site automatically updates.

> **Prerequisite:** Your code must be on GitHub.
> If it's not yet, see [02 — Git Basics](02_GIT_BASICS.md).

---

## Step 1 — Push your code to GitHub

Make sure your latest changes are on GitHub:

```bash
git add .
git commit -m "Ready to deploy"
git push
```

---

## Step 2 — Create a Vercel account

1. Go to [vercel.com](https://vercel.com).
2. Click **Sign Up** → choose **Continue with GitHub**.
3. Authorise Vercel to access your GitHub account.

---

## Step 3 — Import your project

1. On the Vercel dashboard, click **Add New → Project**.
2. Find your repository in the list and click **Import**.

---

## Step 4 — Set the root directory *(don't skip this)*

This is the step most people miss.

The project has a `frontend/` and a `backend/` folder.
Vercel needs to know it should only build the frontend.

- In the **Configure Project** screen, find **Root Directory**.
- Click **Edit** and type `frontend`.
- Click **Continue**.

Vercel will detect Next.js automatically and fill in the build settings for you.

---

## Step 5 — Add the environment variable

Your frontend needs to know where the backend API is.

In the **Environment Variables** section:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_API_URL` | *(paste your Render URL here — see [04_DEPLOY_BACKEND.md](04_DEPLOY_BACKEND.md))* |

> If you haven't deployed the backend yet, you can skip this for now and come
> back to add it later. The site will still deploy; it just won't be able to
> call the API until you fill it in.

---

## Step 6 — Deploy

Click **Deploy**.

Vercel will build the site and give you a URL like:
`https://your-repo-name.vercel.app`

**That's your live site.** Share the link.

---

## Auto-deploys on every push

From now on, every time you run `git push`, Vercel detects the change and
rebuilds your site automatically — usually in under a minute.

That's the magic: code → push → live, every time.

---

## Adding or updating an environment variable later

1. Go to your project on [vercel.com](https://vercel.com).
2. Click **Settings → Environment Variables**.
3. Add or edit the variable.
4. **Redeploy** the project (Settings → Deployments → Redeploy) for the change to take effect.

---

Next: [04 — Deploy the backend on Render →](04_DEPLOY_BACKEND.md)
