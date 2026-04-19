import { Router } from "express";
import { db, diagnosticsTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import { requireAuth } from "../../middleware/requireAuth";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const rows = await db.select().from(diagnosticsTable).orderBy(desc(diagnosticsTable.createdAt));
  res.json(rows);
});

router.get("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const rows = await db.select().from(diagnosticsTable).where(eq(diagnosticsTable.id, id)).limit(1);
  if (!rows[0]) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(rows[0]);
});

router.patch("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body as { status?: string };

  const allowed = ["new", "contacted", "qualified", "closed"];
  if (status && !allowed.includes(status)) {
    res.status(400).json({ error: "Invalid status" });
    return;
  }

  const [updated] = await db
    .update(diagnosticsTable)
    .set({ status, updatedAt: new Date() })
    .where(eq(diagnosticsTable.id, id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(updated);
});

router.delete("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  await db.delete(diagnosticsTable).where(eq(diagnosticsTable.id, id));
  res.json({ ok: true });
});

export default router;
