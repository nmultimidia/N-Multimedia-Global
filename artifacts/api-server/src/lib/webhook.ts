import { db, settingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { logger } from "./logger";

async function getSetting(key: string): Promise<string | null> {
  const rows = await db.select().from(settingsTable).where(eq(settingsTable.key, key)).limit(1);
  return rows[0]?.value ?? null;
}

export async function fireWebhook(diagnostic: Record<string, any>) {
  const webhookUrl = await getSetting("webhook_url");
  if (!webhookUrl) return;

  const webhookSecret = await getSetting("webhook_secret");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (webhookSecret) {
    headers["X-Webhook-Secret"] = webhookSecret;
    headers["Authorization"] = `Bearer ${webhookSecret}`;
  }

  const payload = {
    event: "new_diagnostic",
    timestamp: new Date().toISOString(),
    data: diagnostic,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });
    logger.info({ status: res.status, url: webhookUrl }, "Webhook fired");
  } catch (err) {
    logger.error({ err, url: webhookUrl }, "Webhook failed");
  }
}
