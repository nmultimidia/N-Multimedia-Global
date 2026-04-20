CREATE TABLE "diagnostics" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"role" text,
	"email" text NOT NULL,
	"budget" text,
	"timeline" text,
	"need" text,
	"country_code" text DEFAULT 'unknown',
	"status" text DEFAULT 'new',
	"segment" text,
	"company_size" text,
	"business_model" text,
	"digital_maturity" text,
	"main_channel" text,
	"phone" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "geo_content" (
	"id" serial PRIMARY KEY NOT NULL,
	"country_code" text NOT NULL,
	"flag" text NOT NULL,
	"market_label" text NOT NULL,
	"content" jsonb NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "geo_content_country_code_unique" UNIQUE("country_code")
);
--> statement-breakpoint
CREATE TABLE "crm_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" text NOT NULL,
	"value" text NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "crm_settings_key_unique" UNIQUE("key")
);
