# 02 — Save your work with Git

Git is a **version control system** — it tracks every change you make and lets
you go back if something breaks.

**Mental model:** Git is like a video game save system.
- Each **commit** is a save point with a description of what you did.
- **GitHub** is the cloud where your saves are stored.
- You can always roll back to any previous save.

That's all you need to know to get started.

---

## The 5 commands you'll actually use

```bash
git status           # See what changed since your last save
git add .            # Stage everything (mark it for saving)
git commit -m "..."  # Save a snapshot with a description
git push             # Upload your saves to GitHub
git pull             # Download the latest changes from GitHub
```

### Typical workflow

```bash
# 1. Check what you've changed
git status

# 2. Stage everything
git add .

# 3. Save a snapshot (write a short description of what you did)
git commit -m "Add word counter lab app"

# 4. Upload to GitHub
git push
```

> **Write commit messages in plain language.** Think: "What did I do?"
> Good: `"Fix navbar active link on mobile"`, `"Add CV placeholder"`
> Bad: `"fix"`, `"changes"`, `"asdfgh"`

---

## Trying something new? Use a branch.

A **branch** is a separate copy of your code where you can experiment without
affecting the working version.

```bash
# Create a new branch and switch to it
git checkout -b my-experiment

# ... make your changes, commit them ...

# When you're happy, switch back to main
git checkout main

# Merge your experiment into main
git merge my-experiment
```

If the experiment didn't work out, just delete the branch:

```bash
git branch -d my-experiment
```

---

## Undo a change to a file you broke

If you edited a file and want to throw away all your changes to it:

```bash
git checkout -- path/to/the/file.tsx
```

> This only works if you haven't committed the change yet.
> Once committed, use `git revert` — but that's an advanced topic.

---

## Quick reference card

| Command | What it does |
|---------|-------------|
| `git status` | Show changed files |
| `git add .` | Stage all changes |
| `git add path/to/file` | Stage one file |
| `git commit -m "..."` | Save a snapshot |
| `git push` | Upload to GitHub |
| `git pull` | Download from GitHub |
| `git log --oneline` | See recent commits |
| `git checkout -b name` | Create and switch to a branch |
| `git checkout main` | Switch back to main branch |
| `git checkout -- file` | Undo changes to a file |

---

Next: [03 — Deploy the frontend on Vercel →](03_DEPLOY_FRONTEND.md)
