import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import nodemailer from "nodemailer";

type LandingLead = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  whatsapp?: string;
  interests?: string[];
  message?: string;
};

const destinationEmail = process.env.EMAIL_TO || "ecocredito.2025@gmail.com";

export async function POST(request: Request) {
  const lead = (await request.json()) as LandingLead;

  if (!lead.name || !lead.company || !lead.email || !lead.whatsapp) {
    return NextResponse.json({ ok: false, message: "Dados obrigatórios ausentes." }, { status: 400 });
  }

  if (!lead.interests?.length) {
    return NextResponse.json({ ok: false, message: "Selecione pelo menos um interesse." }, { status: 400 });
  }

  const createdAt = new Date().toISOString();
  const leadWithDate = { ...lead, createdAt };
  const subject = "Novo interesse institucional — Landing EcoCrédito";

  try {
    await sendLeadEmails({
      lead,
      subject,
      html: buildLeadEmail(lead, createdAt),
      autoReplyHtml: buildAutoReply(lead)
    });
  } catch (error) {
    console.error("EcoCrédito lead email failed", error);
    await persistLead({ ...leadWithDate, emailSent: false });
    return NextResponse.json(
      {
        ok: false,
        message:
          "Não foi possível enviar o e-mail real. Verifique as credenciais de e-mail no ambiente antes da publicação."
      },
      { status: 502 }
    );
  }

  await persistLead({ ...leadWithDate, emailSent: true });
  return NextResponse.json({ ok: true });
}

async function persistLead(lead: LandingLead & { createdAt: string; emailSent: boolean }) {
  const dataDir = process.env.VERCEL ? join(tmpdir(), "ecocredito") : join(process.cwd(), "data");
  const filePath = join(dataDir, "landing-leads.json");
  await mkdir(dataDir, { recursive: true });

  let leads: Array<LandingLead & { createdAt: string; emailSent: boolean }> = [];
  try {
    leads = JSON.parse(await readFile(filePath, "utf8")) as Array<LandingLead & { createdAt: string; emailSent: boolean }>;
  } catch {
    leads = [];
  }

  leads.push(lead);
  await writeFile(filePath, JSON.stringify(leads, null, 2), "utf8");
}

async function sendLeadEmails({
  lead,
  subject,
  html,
  autoReplyHtml
}: {
  lead: LandingLead;
  subject: string;
  html: string;
  autoReplyHtml: string;
}) {
  const leadEmail = String(lead.email);

  if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const port = Number(process.env.EMAIL_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port,
      secure: process.env.EMAIL_SECURE === "true" || port === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;

    await transporter.sendMail({
      from,
      to: destinationEmail,
      replyTo: leadEmail,
      subject,
      html
    });

    await transporter.sendMail({
      from,
      to: leadEmail,
      subject: "Recebemos seu interesse na EcoCrédito",
      html: autoReplyHtml
    });

    return;
  }

  if (process.env.RESEND_API_KEY) {
    const responses = await Promise.all([
      sendWithResend({
        to: destinationEmail,
        subject,
        html,
        replyTo: leadEmail
      }),
      sendWithResend({
        to: leadEmail,
        subject: "Recebemos seu interesse na EcoCrédito",
        html: autoReplyHtml
      })
    ]);

    const failed = responses.find((response) => !response.ok);
    if (failed) {
      throw new Error(`Resend failed with status ${failed.status}`);
    }

    return;
  }

  throw new Error("Missing EMAIL_HOST/EMAIL_USER/EMAIL_PASS or RESEND_API_KEY");
}

async function sendWithResend({
  to,
  subject,
  html,
  replyTo
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || process.env.LEADS_FROM_EMAIL || "EcoCrédito <onboarding@resend.dev>",
      to,
      subject,
      html,
      reply_to: replyTo
    })
  });
}

function buildLeadEmail(lead: LandingLead, createdAt: string) {
  return `
    <div style="font-family: Segoe UI, Arial, sans-serif; color: #111714;">
      <h1 style="color:#003F24;">Novo interesse institucional — Landing EcoCrédito</h1>
      <p><strong>Nome:</strong> ${escapeHtml(lead.name)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(lead.company)}</p>
      <p><strong>Cargo:</strong> ${escapeHtml(lead.role || "Não informado")}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(lead.email)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(lead.whatsapp)}</p>
      <p><strong>Interesse selecionado:</strong> ${escapeHtml((lead.interests || []).join(", "))}</p>
      <p><strong>Mensagem opcional:</strong> ${escapeHtml(lead.message || "Não informada")}</p>
      <p><strong>Data/hora:</strong> ${escapeHtml(new Date(createdAt).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }))}</p>
      <p style="margin-top:24px;color:#005832;">Origem: landing page /conheca</p>
    </div>
  `;
}

function buildAutoReply(lead: LandingLead) {
  return `
    <div style="font-family: Segoe UI, Arial, sans-serif; color: #111714;">
      <h1 style="color:#003F24;">Recebemos seu interesse na EcoCrédito</h1>
      <p>Olá ${escapeHtml(lead.name)},</p>
      <p>Recebemos seu interesse na EcoCrédito. Em breve entraremos em contato para aprofundarmos essa conversa.</p>
      <p style="margin-top:24px;color:#005832;"><strong>EcoCrédito — Transformando resíduos em oportunidades.</strong></p>
    </div>
  `;
}

function escapeHtml(value?: string) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
