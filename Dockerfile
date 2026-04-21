###############################################################################
# N Multimídia — Dockerfile para Coolify
#
# Variáveis de ambiente obrigatórias em produção:
#   DATABASE_URL   — PostgreSQL connection string
#   JWT_SECRET     — Secret para tokens JWT do CRM
#
# Variáveis opcionais:
#   PORT           — Porta do servidor (padrão: 3000)
#   SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS — Envio de e-mails
###############################################################################

# ── Base ──────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

# ── Instalação de dependências ────────────────────────────────────────────────
FROM base AS installer
WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

COPY lib/db/package.json               lib/db/
COPY lib/api-zod/package.json          lib/api-zod/
COPY lib/api-client-react/package.json lib/api-client-react/
COPY lib/api-spec/package.json         lib/api-spec/
COPY artifacts/n-multimidia/package.json  artifacts/n-multimidia/
COPY artifacts/api-server/package.json    artifacts/api-server/

RUN pnpm install --frozen-lockfile

# ── Build do frontend (Vite) ──────────────────────────────────────────────────
FROM base AS frontend-builder
WORKDIR /app

COPY --from=installer /app/node_modules                        ./node_modules
COPY --from=installer /app/artifacts/n-multimidia/node_modules ./artifacts/n-multimidia/node_modules

COPY . .

ENV PORT=3000
ENV BASE_PATH=/
ENV NODE_ENV=production

RUN pnpm --filter @workspace/n-multimidia run build

# ── Build da API (esbuild bundle) ─────────────────────────────────────────────
FROM base AS api-builder
WORKDIR /app

COPY --from=installer /app/node_modules                       ./node_modules
COPY --from=installer /app/lib/db/node_modules                ./lib/db/node_modules
COPY --from=installer /app/lib/api-zod/node_modules           ./lib/api-zod/node_modules
COPY --from=installer /app/lib/api-spec/node_modules          ./lib/api-spec/node_modules
COPY --from=installer /app/lib/api-client-react/node_modules  ./lib/api-client-react/node_modules
COPY --from=installer /app/artifacts/api-server/node_modules  ./artifacts/api-server/node_modules

COPY . .

RUN pnpm --filter @workspace/api-server run build

# FIX: pnpm v10 requer --legacy para deploy sem inject-workspace-packages
RUN pnpm --filter @workspace/api-server deploy --prod --legacy /deploy

# ── Imagem de produção ────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV STATIC_DIR=/app/public

COPY --from=api-builder /deploy/node_modules ./node_modules
COPY --from=api-builder /app/artifacts/api-server/dist ./dist
COPY --from=frontend-builder /app/artifacts/n-multimidia/dist/public ./public

EXPOSE 3000

CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
