import { Router } from "express";
import { db, diagnosticsTable, geoContentTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { sendDiagnosticEmail } from "../lib/email";
import { logger } from "../lib/logger";

const router = Router();

router.post("/diagnostic", async (req, res) => {
  const { name, role, email, budget, timeline, need, countryCode, segment, companySize, businessModel, digitalMaturity, mainChannel } = req.body;

  if (!name || !email) {
    res.status(400).json({ error: "Name and email are required" });
    return;
  }

  const [row] = await db
    .insert(diagnosticsTable)
    .values({ name, role, email, budget, timeline, need, countryCode: countryCode || "unknown", status: "new", segment, companySize, businessModel, digitalMaturity, mainChannel })
    .returning();

  sendDiagnosticEmail({ name, role, email, budget, timeline, need, countryCode, segment, companySize, businessModel, digitalMaturity, mainChannel }).catch((err) =>
    logger.error({ err }, "Failed to send diagnostic email")
  );

  res.json({ ok: true, id: row.id });
});

router.get("/geo-content/:code", async (req, res) => {
  const code = req.params.code.toUpperCase();
  const rows = await db
    .select()
    .from(geoContentTable)
    .where(eq(geoContentTable.countryCode, code))
    .limit(1);

  if (!rows[0]) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(rows[0].content);
});

export default router;
