# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

- **n-multimidia** (`artifacts/n-multimidia/`) — N Multimídia agency website. React + Vite, dark theme, Framer Motion animations, Portuguese/English bilingual copy by geo-IP. Preview path: `/`
- **api-server** (`artifacts/api-server/`) — Express 5 API server with CRM backend. Preview path: `/api`

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Build**: esbuild (CJS bundle)

## N Multimídia Site Sections

1. Hero — Giant "N" logo, Hormozi-style headline, animated CSS 3D orb background
2. Problem — Pain agitation section
3. Services — Social Media, Performance Marketing, Branding, Web Dev, Paid Ads, AI Solutions, Data Analysis
4. AI Section — 4-card grid (Automation, Predictive Analytics, Generative AI, BI)
5. Results — Social proof with numbers (300+ projects, 40+ countries, R$50M+ results)
6. Process — Diagnóstico, Estratégia, Execução, Resultados
7. Culture — Meritocracy, badges, remote-first culture
8. Contact — Qualification form that submits leads to the CRM (/api/diagnostic)
9. Footer

## Geo-IP Personalization

- Detects user country via ipapi.co
- Shows localized content for BR, AO, PT (Portuguese), US, GB (English)
- GeoBanner notifies user of detected market
- GeoContext fetches from DB API first, falls back to static geoContent.ts
- Content: hero tagline, sub, CTA, contact form labels, budget options, banner text

## CRM System

### Auth
- JWT-based, stored in localStorage (key: `crm_token`)
- Credentials: `gabrieltatai@nmultimidia.com` / `N@thansteel2022` (hardcoded in api-server/src/lib/auth.ts)

### Routes (frontend)
- `/crm/login` — Login page (public)
- `/crm/dashboard` — Overview: stats + recent leads
- `/crm/diagnostics` — Full list with search + status filter
- `/crm/diagnostics/:id` — Detail + status update + delete
- `/crm/geo-content` — List countries, toggle active, seed defaults
- `/crm/geo-content/:code` — Edit tabbed editor (Hero, Resultados, Formulário, Header)
- `/crm/geo-content/new` — Add new country
- `/crm/settings` — SMTP config, agency identity

### API Endpoints
- `POST /api/crm/auth/login` — JWT auth
- `GET/POST /api/crm/diagnostics` — Leads management
- `GET/PATCH/DELETE /api/crm/diagnostics/:id`
- `GET/POST /api/crm/geo-content` — DB geo content
- `GET/PUT/DELETE /api/crm/geo-content/:code`
- `GET/PUT /api/crm/settings`
- `POST /api/diagnostic` — Public: submit lead from contact form
- `GET /api/geo-content/:code` — Public: serve geo content for frontend

### DB Tables
- `diagnostics` — CRM leads from the contact form
- `geo_content` — Country-specific copy (stored as JSON)
- `settings` — Key-value store (SMTP, agency identity)

## Database Migrations

Migrations live in `lib/db/migrations/`. Drizzle-kit is configured to use this folder.

- `lib/db/migrations/0001_initial.sql` — creates all tables from scratch (initial state)
- `lib/db/migrations/meta/_journal.json` — drizzle migration journal

### Migration commands

```bash
# Apply pending migrations programmatically (any environment)
pnpm --filter @workspace/db run migrate

# Generate a new migration after schema changes (no DB required)
pnpm --filter @workspace/db run generate

# Push schema directly to DB (dev only, no migration file created)
pnpm --filter @workspace/db run push
```

### Running in a new environment

1. Copy `.env.example` to `.env` and fill in `DATABASE_URL`
2. Run `pnpm install`
3. Run `pnpm --filter @workspace/db run migrate`
4. Start the API: `PORT=8080 pnpm --filter @workspace/api-server run dev`
5. Start the frontend: `PORT=3000 BASE_PATH=/ pnpm --filter @workspace/n-multimidia run dev`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/db run migrate` — run SQL migrations (any environment)
- `pnpm --filter @workspace/db run generate` — generate new migration after schema changes
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
