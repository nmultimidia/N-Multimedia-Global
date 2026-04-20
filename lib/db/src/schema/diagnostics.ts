import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const diagnosticsTable = pgTable("diagnostics", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  email: text("email").notNull(),
  budget: text("budget"),
  timeline: text("timeline"),
  need: text("need"),
  countryCode: text("country_code").default("unknown"),
  status: text("status").default("new"),
  segment: text("segment"),
  companySize: text("company_size"),
  businessModel: text("business_model"),
  digitalMaturity: text("digital_maturity"),
  mainChannel: text("main_channel"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertDiagnosticSchema = createInsertSchema(diagnosticsTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertDiagnostic = z.infer<typeof insertDiagnosticSchema>;
export type Diagnostic = typeof diagnosticsTable.$inferSelect;
