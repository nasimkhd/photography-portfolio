import { Resend } from "resend";

export const runtime = "nodejs";

const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "hello@anthonysaleh.ca";
const contactFromEmail = process.env.RESEND_FROM_EMAIL?.trim();
const fallbackContactFromEmail = "Website Contact <onboarding@resend.dev>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  comments?: unknown;
};

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isProduction() {
  return (
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
  );
}

function formatResendError(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { message: "The contact form is not configured yet." },
      { status: 500 },
    );
  }

  if (!contactFromEmail && isProduction()) {
    return Response.json(
      { message: "The contact form is not configured yet." },
      { status: 500 },
    );
  }

  const fromEmail = contactFromEmail ?? fallbackContactFromEmail;

  if (isProduction() && fromEmail.includes("@resend.dev")) {
    return Response.json(
      { message: "The contact form is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { message: "Please submit the contact form again." },
      { status: 400 },
    );
  }

  const name = readText(payload.name);
  const email = readText(payload.email);
  const phone = readText(payload.phone);
  const comments = readText(payload.comments);

  if (!name || !email || !comments || !isValidEmail(email)) {
    return Response.json(
      { message: "Please provide your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const subject = `Website inquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Comments:",
    comments,
  ].join("\n");

  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Comments:</strong></p>
    <p>${escapeHtml(comments).replaceAll("\n", "<br />")}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: contactToEmail,
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend contact form error:", formatResendError(error));

    return Response.json(
      { message: "The message could not be sent. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({
    message: "Thanks, your message has been sent.",
  });
}
