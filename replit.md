# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

- **n-multimidia** (`artifacts/n-multimidia/`) — N Multimídia agency website. React + Vite, dark theme, Framer Motion animations, Portuguese/English bilingual copy, BANT contact form. Preview path: `/`
- **api-server** (`artifacts/api-server/`) — Express 5 API server. Preview path: `/api`

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## N Multimídia Site Sections

1. Hero — Giant "N" logo, Hormozi-style headline, animated CSS 3D orb background
2. Problem — Pain agitation section
3. Services — Social Media, Performance Marketing, Branding, Web Dev, Paid Ads, Strategy
4. Results — Social proof with numbers (300+ projects, 40+ countries, R$50M+ results)
5. Process — BANT methodology: Diagnóstico, Estratégia, Execução, Resultados
6. Culture — Meritocracy, badges, remote-first culture
7. Contact — BANT qualification form
8. Footer

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
