const nodemailer = require("nodemailer");

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function clean(value) {
  return String(value ?? "")
    .trim()
    .replace(/<[^>]*>/g, "")
    .slice(0, 5000);
}

function safeError(error) {
  if (error && typeof error === "object") {
    return {
      name: error.name || "Error",
      message: String(error.message || error).slice(0, 300),
    };
  }

  return {
    name: "Error",
    message: String(error),
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  const contentType = req.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(raw));
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function notifyDiscord({ nombre, email, empresa, telefono, servicio, presupuesto, timeline, descripcion, fecha, referer }) {
  const webhookUrl = process.env.DISCORD_LEADS_WEBHOOK_URL;

  if (!webhookUrl) return;

  const lines = [];

  lines.push(`👤 **${nombre}**${empresa ? ` — ${empresa}` : ""}`);
  lines.push(`📧 ${email}${telefono ? `  ·  📞 ${telefono}` : ""}`);

  if (servicio) lines.push(`🛠️ **Servicio:** ${servicio}`);
  if (presupuesto) lines.push(`💶 **Presupuesto:** ${presupuesto}`);
  if (timeline) lines.push(`⏱️ **Plazo:** ${timeline}`);

  if (descripcion) {
    const shortDescription = descripcion.length > 220
      ? `${descripcion.slice(0, 220)}…`
      : descripcion;

    lines.push(`💬 ${shortDescription}`);
  }

  lines.push(`🕐 ${fecha}`);

  if (referer) {
    lines.push(`🔗 ${referer}`);
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Nexo Digital · Leads",
      embeds: [
        {
          title: "📂 Información detallada recibida",
          description: lines.join("\n"),
          color: 1920728,
          author: {
            name: "Leads — Nexo Digital (Contacto)",
          },
          footer: {
            text: "Nexo Digital · contacto@nexo-digital.app · Sabadell, Barcelona",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });
}

function buildTeamEmail({ nombre, email, empresa, telefono, servicio, presupuesto, timeline, descripcion, fecha }) {
  const safeNombre = escapeHtml(nombre);
  const safeEmail = escapeHtml(email);
  const safeEmpresa = escapeHtml(empresa);
  const safeTelefono = escapeHtml(telefono);
  const safeServicio = escapeHtml(servicio);
  const safePresupuesto = escapeHtml(presupuesto);
  const safeTimeline = escapeHtml(timeline);
  const safeDescripcion = escapeHtml(descripcion).replace(/\n/g, "<br>");

  return `
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8,#7c3aed);padding:28px 32px;color:#ffffff;">
              <div style="font-size:18px;font-weight:700;">Nexo Digital</div>
              <div style="font-size:24px;font-weight:800;margin-top:16px;">📥 Nueva consulta de proyecto</div>
              <div style="font-size:13px;margin-top:6px;opacity:.85;">Recibida el ${escapeHtml(fecha)}</div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px;">
              <h2 style="margin:0 0 16px;font-size:16px;color:#7c3aed;">Contacto</h2>
              <p><strong>Nombre:</strong> ${safeNombre}</p>
              <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
              ${safeEmpresa ? `<p><strong>Empresa:</strong> ${safeEmpresa}</p>` : ""}
              ${safeTelefono ? `<p><strong>Teléfono:</strong> <a href="tel:${safeTelefono}">${safeTelefono}</a></p>` : ""}

              <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0;">

              <h2 style="margin:0 0 16px;font-size:16px;color:#7c3aed;">Proyecto</h2>
              ${safeServicio ? `<p><strong>Servicio:</strong> ${safeServicio}</p>` : ""}
              ${safePresupuesto ? `<p><strong>Presupuesto:</strong> ${safePresupuesto}</p>` : ""}
              ${safeTimeline ? `<p><strong>Plazo:</strong> ${safeTimeline}</p>` : ""}
              ${safeDescripcion ? `<p><strong>Descripción:</strong><br>${safeDescripcion}</p>` : ""}

              <div style="margin-top:28px;">
                <a href="mailto:${safeEmail}" style="display:inline-block;background:#1d4ed8;color:#ffffff;text-decoration:none;border-radius:999px;padding:12px 22px;font-weight:700;">
                  Responder al cliente
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td style="background:#f8fafc;padding:20px 32px;font-size:12px;color:#64748b;">
              Nexo Digital · contacto@nexo-digital.app · Sabadell, Barcelona
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildClientEmail({ nombre, servicio, presupuesto, timeline, fecha, isPt }) {
  const safeNombre = escapeHtml(nombre);
  const safeServicio = escapeHtml(servicio);
  const safePresupuesto = escapeHtml(presupuesto);
  const safeTimeline = escapeHtml(timeline);

  const title = isPt ? "Consulta recebida!" : "¡Consulta recibida!";
  const subtitle = isPt ? "Responderemos em menos de 24 horas" : "Te responderemos en menos de 24 horas";
  const greeting = isPt ? "Olá" : "Hola";
  const intro = isPt
    ? "Obrigado por contactar a Nexo Digital. Recebemos a sua consulta corretamente e entraremos em contacto consigo o mais brevemente possível."
    : "Gracias por contactar con Nexo Digital. Hemos recibido correctamente tu consulta y nos pondremos en contacto contigo a la mayor brevedad posible.";
  const summary = isPt ? "Resumo da sua consulta" : "Resumen de tu consulta";
  const serviceLabel = isPt ? "Serviço" : "Servicio";
  const budgetLabel = isPt ? "Orçamento" : "Presupuesto";
  const timelineLabel = isPt ? "Prazo" : "Plazo";
  const next = isPt ? "O que acontece agora?" : "¿Qué ocurre ahora?";
  const step1 = isPt
    ? "Analisamos os detalhes do seu projeto e preparamos uma resposta personalizada."
    : "Revisamos los detalles de tu proyecto y preparamos una respuesta personalizada.";
  const step2 = isPt
    ? "Entramos em contacto em menos de 24 horas em dias úteis."
    : "Te contactamos en menos de 24 horas en días laborables.";
  const urgent = isPt
    ? "Se precisar de resposta urgente, escreva-nos diretamente:"
    : "Si necesitas respuesta urgente, escríbenos directamente:";

  return `
<!doctype html>
<html lang="${isPt ? "pt" : "es"}">
<head>
  <meta charset="utf-8">
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8,#7c3aed);padding:28px 32px;color:#ffffff;text-align:center;">
              <div style="font-size:18px;font-weight:700;">Nexo Digital</div>
              <div style="font-size:26px;font-weight:800;margin-top:16px;">${title}</div>
              <div style="font-size:14px;margin-top:6px;opacity:.85;">${subtitle}</div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px;font-size:15px;line-height:1.7;">
              <p>${greeting} ${safeNombre},</p>
              <p>${intro}</p>

              <h2 style="font-size:16px;color:#7c3aed;margin-top:28px;">${summary}</h2>
              ${safeServicio ? `<p><strong>${serviceLabel}:</strong> ${safeServicio}</p>` : ""}
              ${safePresupuesto ? `<p><strong>${budgetLabel}:</strong> ${safePresupuesto}</p>` : ""}
              ${safeTimeline ? `<p><strong>${timelineLabel}:</strong> ${safeTimeline}</p>` : ""}
              <p style="font-size:13px;color:#64748b;">${escapeHtml(fecha)}</p>

              <h2 style="font-size:16px;color:#7c3aed;margin-top:28px;">${next}</h2>
              <p>1. ${step1}</p>
              <p>2. ${step2}</p>

              <p style="margin-top:28px;color:#64748b;">${urgent}</p>
              <p>
                <a href="mailto:contacto@nexo-digital.app" style="color:#1d4ed8;">contacto@nexo-digital.app</a>
                ·
                <a href="https://wa.me/34689135159" style="color:#16a34a;">WhatsApp</a>
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#0f172a;padding:22px 32px;text-align:center;color:#94a3b8;font-size:12px;">
              Nexo Digital · www.nexo-digital.app
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "https://www.nexo-digital.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, {
      success: false,
      message: "Método no permitido.",
    });
  }

  try {
    const body = await readBody(req);

    const nombre = clean(body.nombre);
    const email = clean(body.email).toLowerCase();
    const empresa = clean(body.empresa);
    const telefono = clean(body.telefono);
    const servicio = clean(body.servicio);
    const presupuesto = clean(body.presupuesto);
    const timeline = clean(body.timeline);
    const descripcion = clean(body.descripcion);
    const lang = clean(body.lang || "es").toLowerCase();
    const isPt = lang === "pt";

    // Honeypot opcional: si existe este campo oculto y viene relleno, parece bot.
    const website = clean(body.website || body.url || body.company_url);
    if (website) {
      return sendJson(res, 200, {
        success: true,
        message: isPt
          ? "Consulta recebida. Entraremos em contacto em menos de 24h."
          : "Consulta recibida. Te contactaremos en menos de 24h.",
      });
    }

    if (!nombre) {
      return sendJson(res, 422, {
        success: false,
        message: isPt ? "O nome é obrigatório." : "El nombre es obligatorio.",
      });
    }

    if (!isValidEmail(email)) {
      return sendJson(res, 422, {
        success: false,
        message: isPt ? "O email não é válido." : "El email no es válido.",
      });
    }

    if (descripcion.length > 5000) {
      return sendJson(res, 422, {
        success: false,
        message: isPt ? "A mensagem é demasiado longa." : "El mensaje es demasiado largo.",
      });
    }

    const fecha = new Intl.DateTimeFormat(isPt ? "pt-PT" : "es-ES", {
      timeZone: "Europe/Madrid",
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date());

    const subjectTeam = isPt
      ? `Nova consulta (PT): ${nombre}${empresa ? ` — ${empresa}` : ""}`
      : `Nueva consulta: ${nombre}${empresa ? ` — ${empresa}` : ""}`;

    const subjectClient = isPt
      ? "Recebemos a sua consulta — Nexo Digital"
      : "Hemos recibido tu consulta — Nexo Digital";

    const smtpPort = Number(process.env.SMTP_PORT || 465);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ionos.es",
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromEmail = process.env.CONTACT_FROM || process.env.SMTP_USER;
    const toEmail = process.env.CONTACT_TO || "contacto@nexo-digital.app";

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !fromEmail) {
      throw new Error("SMTP configuration missing");
    }

    const teamHtml = buildTeamEmail({
      nombre,
      email,
      empresa,
      telefono,
      servicio,
      presupuesto,
      timeline,
      descripcion,
      fecha,
    });

    const clientHtml = buildClientEmail({
      nombre,
      servicio,
      presupuesto,
      timeline,
      fecha,
      isPt,
    });

    const txtTeam = [
      `Nueva consulta Nexo Digital`,
      `Fecha: ${fecha}`,
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      empresa ? `Empresa: ${empresa}` : "",
      telefono ? `Teléfono: ${telefono}` : "",
      servicio ? `Servicio: ${servicio}` : "",
      presupuesto ? `Presupuesto: ${presupuesto}` : "",
      timeline ? `Plazo: ${timeline}` : "",
      descripcion ? `Descripción: ${descripcion}` : "",
    ].filter(Boolean).join("\n");

    const txtClient = isPt
      ? `Olá ${nombre},\n\nRecebemos a sua consulta corretamente. Entraremos em contacto em menos de 24 horas.\n\nNexo Digital`
      : `Hola ${nombre},\n\nHemos recibido correctamente tu consulta. Te contactaremos en menos de 24 horas.\n\nNexo Digital`;

    await transporter.sendMail({
      from: `Nexo Digital <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: subjectTeam,
      html: teamHtml,
      text: txtTeam,
    });

    await transporter.sendMail({
      from: `Nexo Digital <${fromEmail}>`,
      to: email,
      subject: subjectClient,
      html: clientHtml,
      text: txtClient,
    });

    try {
      await notifyDiscord({
        nombre,
        email,
        empresa,
        telefono,
        servicio,
        presupuesto,
        timeline,
        descripcion,
        fecha,
        referer: req.headers.referer || "",
      });
    } catch (discordError) {
      console.error("[discord notify]", safeError(discordError));
    }

    return sendJson(res, 200, {
      success: true,
      message: isPt
        ? "Consulta recebida. Entraremos em contacto em menos de 24h."
        : "Consulta recibida. Te contactaremos en menos de 24h.",
    });
  } catch (error) {
    console.error("[api/send]", safeError(error));

    return sendJson(res, 500, {
      success: false,
      message: "No se pudo enviar el email. Por favor escríbenos directamente a contacto@nexo-digital.app o por WhatsApp.",
    });
  }
};