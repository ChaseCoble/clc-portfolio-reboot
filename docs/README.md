This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

###Architecture
    Frontend:
        NextTS, mockups attached
    API:
        article retrieval
        project retrieval
        ISR revalidation
    Backend:
        Supabase for project info and relations
        Firebase for Article markdown

    #Process
            Phase 1: Foundation Setup (≈ 0.5 – 1 day)
        [x] Initialize Next.js 16 project with TypeScript.
            Completed: 11/04/2025
            Notes:
                npm install next react react-dom typescript @types/react @types/node tailwindcss postcss autoprefixer @supabase/supabase-js next-mdx-remote remark remark-gfm rehype-slug rehype-autolink-headings swr zod date-fns eslint eslint-config-next prettier             
        [x] Configure ESLint, Prettier, Tailwind (or CSS framework).
            Completed: 11/04/2025
            Notes: 
                npm install -D eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier-plugin-tailwindcss
        [ ] Set up Vercel deployment (free tier).
            Completed: 
            Notes:
        [x] Set up Github 
            Completed: 11/04/2025 1008
            Notes: 
                clc-portfolio-reboot
                https://github.com/ChaseCoble/clc-portfolio-reboot
        Output: Barebones app running on Vercel.
            Completed: 
            Notes:
        Phase 2: Content Model & Database (≈ 1 – 1.5 days)
        [ ] Create Supabase project.
            Completed: 
            Notes:
        [ ] Define tables: projects, articles, article_project_refs.
            Completed: 
            Notes:
        [ ] Seed with sample metadata.
            Completed: 
            Notes:
        [ ] Write TypeScript types (/types/article.ts, /types/project.ts).
            Completed: 
            Notes:
        Output: Structured metadata layer with relational querying.
            Completed: 
            Notes:
        Phase 3: Markdown Integration (≈ 1 day)
        [ ] Decide storage: Firebase Storage or GitHub raw fetch.
            Completed: 
            Notes:
        [ ] Write /lib/markdown.ts parser (remark/next-mdx-remote).
            Completed: 
            Notes:
        [ ] Connect metadata row → Markdown body fetch.
            Completed: 
            Notes:
        [ ] Test rendering a single article page.
            Completed: 
            Notes:
        Output: Hybrid content pipeline working end‑to‑end.
            Completed: 
            Notes:
        Phase 4: API Layer (≈ 1 day)
        [ ] Implement /app/api/articles/[slug]/route.ts.
            Completed: 
            Notes:
        [ ] Implement /app/api/projects/[id]/route.ts.
            Completed: 
            Notes:
        [ ] Implement /app/api/homepage/route.ts (aggregates featured project + recent articles).
            Completed: 
            Notes:
        Output: Unified API that frontend can consume as if it’s a backend.
            Completed: 
            Notes:
        Phase 5: Frontend Pages & Components (≈ 2 – 3 days)
        [ ] Build homepage (/app/page.tsx) → Featured Project + Recent Articles.
            Completed: 
            Notes:
        [ ] Build /articles/[slug]/page.tsx → full article with Markdown rendering.
            Completed: 
            Notes:
        [ ] Build /projects/[id]/page.tsx → project details + linked articles.
            Completed: 
            Notes:
        [ ] Create reusable components: ArticleCard, ProjectCard, Layout.
            Completed: 
            Notes:
        Output: Fully navigable site with clean UI.
            Completed: 
            Notes:
        Phase 6: ISR & Revalidation (≈ 1 day)
        [ ] Add export const revalidate = 60 to pages.
            Completed: 
            Notes:
        [ ] Configure Supabase/Firebase webhooks → call revalidate endpoint.
            Completed:
            Notes:
        Output: Pages regenerate automatically on content changes.
            Completed:
            Notes:
        Phase 7: Polish & Extras (≈ 1 – 2 days)
        [ ] Add SWR/React Query for client‑side caching.
            Completed:
            Notes:
        [ ] Add SEO metadata (generateMetadata).
            Completed:
            Notes:
        [ ] Style refinements (dark theme, responsive).
            Completed:
            Notes:
        [ ] Optional: GitHub Action to sync READMEs into Supabase.
            Completed:
            Notes:
        Output: Production‑ready, polished portfolio.
