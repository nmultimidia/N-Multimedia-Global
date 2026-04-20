-- ============================================================
-- N Multimídia CRM — Initial Schema
-- Migration: 0001_initial
-- ============================================================

CREATE TABLE IF NOT EXISTS "diagnostics" (
  "id"               SERIAL PRIMARY KEY,
  "name"             TEXT NOT NULL,
  "role"             TEXT,
  "email"            TEXT NOT NULL,
  "budget"           TEXT,
  "timeline"         TEXT,
  "need"             TEXT,
  "country_code"     TEXT DEFAULT 'unknown',
  "status"           TEXT DEFAULT 'new',
  "segment"          TEXT,
  "company_size"     TEXT,
  "business_model"   TEXT,
  "digital_maturity" TEXT,
  "main_channel"     TEXT,
  "created_at"       TIMESTAMP DEFAULT NOW(),
  "updated_at"       TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "geo_content" (
  "id"           SERIAL PRIMARY KEY,
  "country_code" TEXT NOT NULL UNIQUE,
  "flag"         TEXT NOT NULL,
  "market_label" TEXT NOT NULL,
  "content"      JSONB NOT NULL,
  "is_active"    BOOLEAN DEFAULT TRUE,
  "created_at"   TIMESTAMP DEFAULT NOW(),
  "updated_at"   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "crm_settings" (
  "id"         SERIAL PRIMARY KEY,
  "key"        TEXT NOT NULL UNIQUE,
  "value"      TEXT NOT NULL,
  "updated_at" TIMESTAMP DEFAULT NOW()
);
