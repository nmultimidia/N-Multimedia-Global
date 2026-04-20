import { Router } from "express";
import { db, settingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAuth } from "../../middleware/requireAuth";

const router = Router();

const DEFAULT_SETTINGS: Record<string, string> = {
  admin_email: "gabrieltatai@nmultimidia.com",
  smtp_host: "",
  smtp_port: "587",
  smtp_user: "",
  smtp_pass: "",
  agency_name: "N Multimídia",
  agency_tagline: "We don't sell marketing. We sell leverage.",
  webhook_url: "",
  webhook_secret: "",
  api_key: "",
};

router.get("/", requireAuth, async (_req, res) => {
  const rows = await db.select().from(settingsTable);
  const map: Record<string, string> = { ...DEFAULT_SETTINGS };
  for (const row of rows) {
    map[row.key] = row.value;
  }
  res.json(map);
});

router.put("/", requireAuth, async (req, res) => {
  const updates = req.body as Record<string, string>;

  for (const [key, value] of Object.entries(updates)) {
    await db
      .insert(settingsTable)
      .values({ key, value, updatedAt: new Date() })
      .onConflictDoUpdate({ target: settingsTable.key, set: { value, updatedAt: new Date() } });
  }

  res.json({ ok: true });
});

export default router;
