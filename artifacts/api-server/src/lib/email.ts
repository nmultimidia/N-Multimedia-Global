import nodemailer from "nodemailer";
import { db, settingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { logger } from "./logger";

async function getSetting(key: string): Promise<string | null> {
  const rows = await db.select().from(settingsTable).where(eq(settingsTable.key, key)).limit(1);
  return rows[0]?.value ?? null;
}

export async function sendDiagnosticEmail(diagnostic: {
  name: string;
  role?: string | null;
  email: string;
  phone?: string | null;
  budget?: string | null;
  timeline?: string | null;
  need?: string | null;
  countryCode?: string | null;
  segment?: string | null;
  companySize?: string | null;
  businessModel?: string | null;
  digitalMaturity?: string | null;
  mainChannel?: string | null;
  website?: string | null;
}) {
  const adminEmail = await getSetting("admin_email") || "gabrieltatai@nmultimidia.com";
  const smtpHost = await getSetting("smtp_host");
  const smtpPort = await getSetting("smtp_port");
  const smtpUser = await getSetting("smtp_user");
  const smtpPass = await getSetting("smtp_pass");

  if (!smtpHost || !smtpUser || !smtpPass) {
    logger.info({ diagnostic }, "SMTP not configured — diagnostic email logged");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort) || 587,
    secure: Number(smtpPort) === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.sendMail({
    from: `"N Multimídia CRM" <${smtpUser}>`,
    to: adminEmail,
    subject: `🔔 Novo Diagnóstico — ${diagnostic.name} (${diagnostic.countryCode?.toUpperCase()})`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#09090b;color:#fff;padding:32px;border-radius:8px">
        <h2 style="color:#7c3aed;margin:0 0 24px">Novo Diagnóstico Recebido</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">NOME</td><td style="padding:8px 0">${diagnostic.name}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">CARGO</td><td style="padding:8px 0">${diagnostic.role || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">E-MAIL</td><td style="padding:8px 0">${diagnostic.email}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">WHATSAPP / TELEFONE</td><td style="padding:8px 0">${diagnostic.phone || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">PAÍS</td><td style="padding:8px 0">${diagnostic.countryCode?.toUpperCase() || '—'}</td></tr>
          <tr><td colspan="2" style="padding:16px 0 4px;color:#7c3aed;font-size:11px;font-weight:bold;letter-spacing:2px">INFORMAÇÕES</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">BUDGET</td><td style="padding:8px 0">${diagnostic.budget || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">TIMELINE</td><td style="padding:8px 0">${diagnostic.timeline || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">NECESSIDADE</td><td style="padding:8px 0">${diagnostic.need || '—'}</td></tr>
          <tr><td colspan="2" style="padding:16px 0 4px;color:#7c3aed;font-size:11px;font-weight:bold;letter-spacing:2px">PERFIL DA EMPRESA</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">SEGMENTO</td><td style="padding:8px 0">${diagnostic.segment || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">TAMANHO DA EMPRESA</td><td style="padding:8px 0">${diagnostic.companySize || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">MODELO DE NEGÓCIO</td><td style="padding:8px 0">${diagnostic.businessModel || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">MATURIDADE DIGITAL</td><td style="padding:8px 0">${diagnostic.digitalMaturity || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">CANAL PRINCIPAL</td><td style="padding:8px 0">${diagnostic.mainChannel || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#a1a1aa;font-size:12px">WEBSITE</td><td style="padding:8px 0">${diagnostic.website ? `<a href="${diagnostic.website}" style="color:#7c3aed">${diagnostic.website}</a>` : '—'}</td></tr>
        </table>
        <p style="margin:24px 0 0;color:#52525b;font-size:12px">N Multimídia CRM — ${new Date().toLocaleString('pt-BR')}</p>
      </div>
    `,
  });

  logger.info({ to: adminEmail, name: diagnostic.name }, "Diagnostic email sent");
}
