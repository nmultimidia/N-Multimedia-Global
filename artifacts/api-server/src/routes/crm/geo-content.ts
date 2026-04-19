import { Router } from "express";
import { db, geoContentTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAuth } from "../../middleware/requireAuth";

const router = Router();

router.get("/", requireAuth, async (_req, res) => {
  const rows = await db.select().from(geoContentTable).orderBy(geoContentTable.countryCode);
  res.json(rows);
});

router.get("/:code", requireAuth, async (req, res) => {
  const code = req.params.code.toUpperCase();
  const rows = await db.select().from(geoContentTable).where(eq(geoContentTable.countryCode, code)).limit(1);
  if (!rows[0]) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(rows[0]);
});

router.post("/", requireAuth, async (req, res) => {
  const { countryCode, flag, marketLabel, content, isActive } = req.body;

  if (!countryCode || !flag || !marketLabel || !content) {
    res.status(400).json({ error: "countryCode, flag, marketLabel and content are required" });
    return;
  }

  const [row] = await db
    .insert(geoContentTable)
    .values({ countryCode: countryCode.toUpperCase(), flag, marketLabel, content, isActive: isActive ?? true })
    .onConflictDoUpdate({ target: geoContentTable.countryCode, set: { flag, marketLabel, content, isActive, updatedAt: new Date() } })
    .returning();

  res.json(row);
});

router.put("/:code", requireAuth, async (req, res) => {
  const code = req.params.code.toUpperCase();
  const { flag, marketLabel, content, isActive } = req.body;

  const [updated] = await db
    .update(geoContentTable)
    .set({ flag, marketLabel, content, isActive, updatedAt: new Date() })
    .where(eq(geoContentTable.countryCode, code))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(updated);
});

router.delete("/:code", requireAuth, async (req, res) => {
  const code = req.params.code.toUpperCase();
  await db.delete(geoContentTable).where(eq(geoContentTable.countryCode, code));
  res.json({ ok: true });
});

export default router;
