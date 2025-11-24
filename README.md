# Portfolio & Research Site

A Next.js + TypeScript application powered by Supabase (Postgres + Auth) and Backblaze B2 for image storage.  
This project serves as a portfolio, research archive, and metrics dashboard — highlighting both **software engineering projects** and **cybersecurity internship work**.

---

## 🚀 Tech Stack

- **Frontend**: Next.js (TypeScript), React, Vercel (deployment)
- **Backend**: Supabase (Postgres, Auth, RLS policies)
- **Storage**: Backblaze B2 (images, diagrams, screenshots)
- **Markdown Rendering**: `react-markdown` + `DOMPurify` for safe HTML
- **Metrics (tbd)**: Supabase queries + charts (future extension with D3/Chart.js)

---

## 📑 Database Schema

### `projects`

| Column     | Type        | Notes                        |
| ---------- | ----------- | ---------------------------- |
| id         | uuid        | Primary key                  |
| slug       | text        | URL slug, unique             |
| title      | text        | Project title                |
| brief      | text        | Short summary                |
| content    | text        | Full Markdown body           |
| assets     | text[]      | Ordered Backblaze image URLs |
| featured   | boolean     | Highlight flag               |
| created_at | timestamptz | Default `now()`              |
| updated_at | timestamptz | Default `now()`              |

### `articles`

Similar to `projects`, with `published_at` timestamp.

### `metrics`

| Column     | Type        | Notes           |
| ---------- | ----------- | --------------- |
| id         | uuid        | Primary key     |
| name       | text        | Metric name     |
| value      | int         | Metric value    |
| created_at | timestamptz | Default `now()` |

---

## 🗓️ One‑Week Sprint Plan

**Day 1** – Setup

- Scaffold Next.js + Supabase template
- Configure environment variables
- Create routes: `/`, `/projects`, `/articles`, `/metrics`

**Day 2** – Schema Integration

- Apply SQL schema
- Seed with Markdown + Backblaze URLs
- Test Supabase queries

**Day 3** – Home Screen

- Hero banner (Software Engineer & Cybersecurity Internships)
- Featured projects + articles preview
- Metrics preview bar

**Day 4** – Projects & Articles Screens

- `/projects`: grid/list view
- `/articles`: blog‑style list
- Pagination or infinite scroll

**Day 5** – Single Views

- `/projects/[slug]`: Markdown + image gallery
- `/articles/[slug]`: Markdown + metadata

**Day 6** – Metrics Page

- Aggregate counts (projects, articles, markdown lines)
- Chart placeholders for future extension

**Day 7** – Polish & Deploy

- Responsive design (full + half screen layouts)
- Deploy to Vercel
- Verify ISR revalidation hooks

---

## 🎨 Mockups (Concepts)

### Home Screen

- **Full screen**: Hero banner, featured project/article cards, metrics bar
- **Half screen**: Stacked layout with previews below hero

### Projects Screen

- **Full screen**: Grid of project cards (image, title, brief)
- **Half screen**: Vertical list with thumbnail + text

### Articles Screen

- **Full screen**: Blog list with title, excerpt, date
- **Half screen**: Compact list with expandable entries

### Single Project

- **Full screen**: Title, Markdown body, image gallery, sidebar metadata
- **Half screen**: Title + metadata at top, body + inline images

### Single Article

- **Full screen**: Title, date, Markdown body, related sidebar
- **Half screen**: Title + date at top, body below

### Metrics Page

- **Full screen**: Dashboard grid of metric cards
- **Half screen**: Vertical stacked metrics cards

---

## 🔒 Security & Sanitization

- Supabase client uses parameterized queries (safe by default).
- Markdown sanitized on render with `DOMPurify`.
- URLs validated before insert into `assets[]`.
- Row Level Security (RLS) policies enforce read/write rules.

---

## ✅ Career Branding

- Home screen tagline: **“Seeking Software Engineering roles & Cybersecurity internships.”**
- Resume link + contact button.
- Projects/articles tagged with `software` or `cybersecurity`.

---

## 📦 Deployment

- Push commits → Vercel auto‑deploys latest branch.
- Use “Redeploy from latest commit” to avoid stale builds.
- ISR revalidation triggered via Supabase webhook on `updated_at`.

---
