/**
 * app/api/contact/route.js
 * Endpoint POST con:
 *  - Sanitización estricta de entradas.
 *  - Rate-limit básico por IP (x-forwarded-for).
 *  - Notificación estructurada (reset es un stub listo para Resend/SMTP).
 *  - Respuesta JSON estandarizada.
 */

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000;

const ipHits = new Map();

function sanitize(value, max = 2000) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function getClientIp(request) {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, first: now };
  if (now - entry.first > RATE_WINDOW_MS) {
    ipHits.set(ip, { count: 1, first: now });
    return false;
  }
  entry.count += 1;
  ipHits.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

/** Stub de envío: sustituye por tu proveedor (Resend, SendGrid, SMTP...). */
async function notifyLead(payload) {
  // Ejemplo listo para Resend:
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: 'onboarding@resend.dev', to: payload.to, subject: payload.subject, html: payload.html });
  console.log('[API/contact] Nuevo lead de cotización:', payload.subject);
  return { ok: true };
}

export async function OPTIONS() {
  return new Response(null, { status: 204 });
}

export async function POST(request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return Response.json(
      { success: false, message: 'Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.' },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: 'JSON inválido.' }, { status: 400 });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160);
  const phone = sanitize(body.phone, 30);
  const message = sanitize(body.message, 2000);
  const type = sanitize(body.type, 30) || 'general';
  const pkg = sanitize(body.package, 60);

  const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  if (name.length < 2 || !validEmail) {
    return Response.json(
      { success: false, message: 'Completa nombre y un correo válido.' },
      { status: 422 }
    );
  }

  const to = process.env.CONTACT_EMAIL || 'hola@nexusstudio.dev';

  const payload = {
    to,
    subject: `[NEXUS WEB] Cotización ${type} · ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="background:#111827;padding:20px;text-align:center">
          <h1 style="color:#fff;font-size:18px;margin:0">NUEVA SOLICITUD · ${String(type).toUpperCase()}</h1>
        </div>
        <div style="padding:24px">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || '—'}</p>
          ${pkg ? `<p><strong>Paquete:</strong> ${pkg}</p>` : ''}
          <p><strong>Mensaje:</strong></p>
          <pre style="white-space:pre-wrap;background:#f9fafb;padding:12px;border-radius:8px">${message || '—'}</pre>
        </div>
      </div>
    `,
  };

  try {
    await notifyLead(payload);
    return Response.json({
      success: true,
      message: 'Solicitud recibida. Te contactaremos en menos de 24 horas.',
    });
  } catch (err) {
    console.error('[API/contact] Error enviando notificación:', err);
    return Response.json(
      { success: false, message: 'No pudimos procesar tu solicitud. Inténtalo por WhatsApp.' },
      { status: 500 }
    );
  }
}