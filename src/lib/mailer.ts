import nodemailer from "nodemailer";

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 587;
const SMTP_USER = "qentara.web@gmail.com";

export function getMissingMailConfig() {
  return process.env.SMTP_PASS ? null : "SMTP_PASS";
}

export function createTransporter() {
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpPass) {
    throw new Error("Missing SMTP_PASS environment variable");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: smtpPass,
    },
  });
}

export function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export const MAIL_FROM = SMTP_USER;
export const MAIL_TO = SMTP_USER;
