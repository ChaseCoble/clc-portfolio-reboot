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
                Version conflicts in esling-config-next
                Ensure versioning is as follows in the package.json
        [x] Set up Vercel deployment (free tier).
            Completed: 11/04/2025 1025 
            Notes: Failed because folder structure has already been built, which means it is technically in error.
                Logged in with Github
        [x] Set up Github 
            Completed: 11/04/2025 1008
            Notes: 
                clc-portfolio-reboot
                https://github.com/ChaseCoble/clc-portfolio-reboot
        Output: Barebones app running on Vercel.
            Completed: 
            Notes: 
                Latest commit: fab0f40a527d0799ff9a511295af15566fc85d53 
            package.json:
                "name": "cc-portfolio-next",
                "version": "0.1.0",
                "private": true,
                "scripts": {
                  "dev": "next dev",
                  "build": "next build",
                  "start": "next start",
                  "lint": "eslint"
                },
                "dependencies": {
                  "@supabase/supabase-js": "^2.78.0",
                  "date-fns": "^4.1.0",
                  "next": "^16.0.0",
                  "next-mdx-remote": "^5.0.0",
                  "prettier": "^3.6.2",
                  "react": "^19.2.0",
                  "react-dom": "^19.2.0",
                  "rehype-autolink-headings": "^7.1.0",
                  "rehype-slug": "^6.0.0",
                  "remark": "^15.0.1",
                  "remark-gfm": "^4.0.1",
                  "swr": "^2.3.6",
                  "zod": "^4.1.12"
                },
                "devDependencies": {
                  "@tailwindcss/postcss": "^4",
                  "@types/node": "^20.19.24",
                  "@types/react": "^19.2.2",
                  "@types/react-dom": "^19.2.2",
                  "@typescript-eslint/eslint-plugin": "^8.46.2",
                  "@typescript-eslint/parser": "^8.46.2",
                  "autoprefixer": "^10.4.21",
                  "eslint": "^9.39.1",
                  "eslint-config-next": "^16.0.0",
                  "postcss": "^8.5.6",
                  "tailwindcss": "^4.1.16",
                  "typescript": "^5.9.3"
                }

        Phase 2: Content Model & Database (≈ 1 – 1.5 days)
        [x] Create Supabase project.
            Completed: 11/04/2025 1037 
            Notes: Signed in with Github
        [x] Define tables: projects, articles, article_project_refs.
            Completed: 11/04/2025 1059
            Notes: Set policies to select only, update triggers set, webhooks set
        [x] Seed with sample metadata.
            Completed: 11/04/2025 1111
            Notes: Utilized copilot for data generation
        [x] Write TypeScript types (/types/article.ts, /types/project.ts).
            Completed: 11/04/2025 1239
            Notes:
        Output: Structured metadata layer with relational querying.
            Completed: 11/04/2025 1242
            Notes:
                Final Commit: c952ef9bfb809033b38968f1b55d43e64b629ee6
        Phase 3: Markdown Integration (≈ 1 day)
        [x] Decide storage: Firebase Storage or GitHub raw fetch.
            Completed: 11072025 1004 
            Notes: chasecobledevelopment gmail
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
