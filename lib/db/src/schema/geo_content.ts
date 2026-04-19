import { pgTable, serial, text, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";

export const geoContentTable = pgTable("geo_content", {
  id: serial("id").primaryKey(),
  countryCode: text("country_code").notNull().unique(),
  flag: text("flag").notNull(),
  marketLabel: text("market_label").notNull(),
  content: jsonb("content").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type GeoContentRow = typeof geoContentTable.$inferSelect;
