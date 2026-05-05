function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function clean(value, max = 800) {
  return String(value ?? "")
    .trim()
    .replace(/<[^>]*>/g, "")
    .slice(0, max);
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

const rateLimitStore = new Map();

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }

  return req.socket?.remoteAddress || "unknown";
}

function checkRateLimit(req) {
  const ip = getClientIp(req);
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 20;

  const current = rateLimitStore.get(ip);

  if (!current || now - current.startedAt > windowMs) {
    rateLimitStore.set(ip, {
      count: 1,
      startedAt: now,
    });

    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);

  return current.count <= maxRequests;
}

function buildSystemPrompt(isPt) {
  if (isPt) {
    return `És o assistente virtual da Nexo Digital, agência de soluções digitais com sede em Sabadell, Catalunha, Espanha, com clientes em Portugal.

SERVIÇOS:
- Landing Page / Website: design premium, SEO técnico, mobile-first, Core Web Vitals. SEO local Sabadell e Barcelona.
- Loja Online: e-commerce completo, catálogo, gateway de pagamento, integração marketplaces.
- TPV & Quiosques Digitais: software TPV personalizado, quiosques de autoatendimento, suporte incluído. Chave-na-mão.
- Sistemas à Medida: ERP, CRM, dashboards, portais internos, integrações API REST, arquitetura escalável.
- Tráfego Pago / Anúncios: Google Ads e Meta Ads locais, segmentação Sabadell e entorno, relatórios e otimização.
- Cibersegurança & Infraestrutura: auditorias, hardening, SSL, firewall Cloudflare, monitorização 24/7, backups diários.

PRODUTOS SAAS PRÓPRIOS:
- Nexo Invoicer: faturação digital, gestão fiscal, histórico e relatórios.
- Nexo CRM & WhatsApp: pipeline visual, WhatsApp integrado, automatizações de acompanhamento.
- Nexo SEO Audit: diagnóstico técnico SEO, prioridades acionáveis, roteiro de melhorias.
- SpeakEasily: plataforma de comunicação digital, mobile-first.

PROCESSO:
1) Consulta inicial gratuita com resposta em até 24h.
2) Proposta e orçamento sem compromisso.
3) Design e desenvolvimento iterativo.
4) Entrega, formação e suporte.

CONTACTO:
- Email: contacto@nexo-digital.app
- WhatsApp: +34 689 135 159
- Website: www.nexo-digital.app

INSTRUÇÕES:
- Responde em português europeu, de forma concisa, no máximo 3 ou 4 linhas.
- Usa tom amigável, próximo e profissional.
- Se perguntarem por preços, diz que dependem do projeto e que a consulta inicial é gratuita e sem compromisso.
- Quando o utilizador quiser contratar ou pedir informação concreta, sugere WhatsApp ou email.
- Não inventes preços, prazos nem dados não mencionados.
- No final de cada resposta, pergunta: "Há mais alguma coisa em que o possa ajudar?"`;
  }

  return `Eres el asistente virtual de Nexo Digital, agencia de soluciones digitales con sede en Sabadell, Cataluña, España.

SERVICIOS:
- Landing Page / Web: diseño premium, SEO técnico, mobile-first, Core Web Vitals. SEO local Sabadell y Barcelona.
- Tienda Online: e-commerce completo, catálogo, pasarela de pago, integración marketplaces.
- TPV & Kioscos Digitales: software TPV personalizado, kioscos de autoservicio, soporte incluido. Llave en mano.
- Sistemas a Medida: ERP, CRM, dashboards, portales internos, integraciones API REST, arquitectura escalable.
- Tráfico Pago / Anuncios: Google Ads y Meta Ads locales, segmentación Sabadell y entorno, informes y optimización.
- Ciberseguridad & Infraestructura: auditorías, hardening, SSL, firewall Cloudflare, monitorización 24/7, backups diarios.

PRODUCTOS SAAS PROPIOS:
- Nexo Invoicer: facturación digital, gestión fiscal, historial e informes.
- Nexo CRM & WhatsApp: pipeline visual, WhatsApp integrado, automatizaciones de seguimiento.
- Nexo SEO Audit: diagnóstico técnico SEO, prioridades accionables, hoja de ruta.
- SpeakEasily: plataforma de comunicación digital, mobile-first.

PROCESO:
1) Consulta inicial gratuita con respuesta en hasta 24h.
2) Propuesta y presupuesto sin compromiso.
3) Diseño y desarrollo iterativo.
4) Entrega, formación y soporte.

CONTACTO:
- Email: contacto@nexo-digital.app
- WhatsApp: +34 689 135 159
- Web: www.nexo-digital.app

INSTRUCCIONES:
- Responde siempre en español, de forma concisa, máximo 3 o 4 líneas.
- Usa tono amable, cercano y profesional.
- Si preguntan por precios, indica que dependen del proyecto y que la consulta inicial es gratuita y sin compromiso.
- Cuando el usuario quiera contratar o pedir información concreta, sugiere WhatsApp o email.
- No inventes precios, plazos ni datos no mencionados.
- Al final de cada respuesta, pregunta: "¿Hay algo más en lo que pueda ayudarte?"`;
}

function shouldNotifyDiscord(text) {
  const value = String(text || "").toLowerCase();

  return [
    "presupuesto",
    "precio",
    "contratar",
    "contacto",
    "llamar",
    "whatsapp",
    "quiero una web",
    "quiero un proyecto",
    "necesito una web",
    "necesito presupuesto",
    "orçamento",
    "contactar",
    "telefone",
  ].some((keyword) => value.includes(keyword));
}

async function notifyDiscord({ text, lang, referer }) {
  const webhookUrl = process.env.DISCORD_CHAT_WEBHOOK_URL;

  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Nexo Digital · Chat IA",
      embeds: [
        {
          title: "💬 Posible lead desde el chat del sitio web",
          color: 1920728,
          fields: [
            {
              name: "Mensaje",
              value: String(text || "").slice(0, 900) || "Sin contenido",
            },
            {
              name: "Idioma",
              value: lang || "es",
              inline: true,
            },
            {
              name: "Origen",
              value: referer || "No disponible",
              inline: false,
            },
          ],
          footer: {
            text: "Nexo Digital · www.nexo-digital.app",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });
}

function normalizeMessages(body) {
  if (Array.isArray(body.messages)) {
    return body.messages;
  }

  if (typeof body.message === "string") {
    return [
      {
        role: "user",
        content: body.message,
      },
    ];
  }

  if (typeof body.text === "string") {
    return [
      {
        role: "user",
        content: body.text,
      },
    ];
  }

  return [];
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
      error: "Method not allowed",
    });
  }

  try {
    if (!checkRateLimit(req)) {
      return sendJson(res, 429, {
        error: "Demasiadas solicitudes. Espera un momento.",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY");
    }

    const body = await readBody(req);
    const messages = normalizeMessages(body);

    if (!messages.length) {
      return sendJson(res, 400, {
        error: "Invalid input",
      });
    }

    const lang = clean(body.lang || "es", 8).toLowerCase().replace(/[^a-z]/g, "");
    const isPt = lang === "pt";

    const contents = messages
      .slice(-16)
      .map((message) => {
        const role = message?.role === "user" ? "user" : "model";
        const text = clean(message?.content, 800);

        if (!text) return null;

        return {
          role,
          parts: [{ text }],
        };
      })
      .filter(Boolean);

    while (contents.length > 0 && contents[0].role === "model") {
      contents.shift();
    }

    if (contents.length === 0) {
      return sendJson(res, 400, {
        error: isPt ? "Nenhuma mensagem do utilizador." : "No hay mensajes del usuario.",
      });
    }

    const lastUserMessage = [...contents].reverse().find((message) => message.role === "user");
    const lastUserText = lastUserMessage?.parts?.[0]?.text || "";

    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    const payload = {
      system_instruction: {
        parts: [
          {
            text: buildSystemPrompt(isPt),
          },
        ],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 280,
        topP: 0.9,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    };

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await geminiResponse.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!geminiResponse.ok || !reply) {
      const message = data?.error?.message || `Gemini HTTP ${geminiResponse.status}`;
      throw new Error(message);
    }

    if (shouldNotifyDiscord(lastUserText)) {
      try {
        await notifyDiscord({
          text: lastUserText,
          lang: isPt ? "pt" : "es",
          referer: req.headers.referer || "",
        });
      } catch (discordError) {
        console.error("[discord chat notify]", safeError(discordError));
      }
    }

    return sendJson(res, 200, {
      reply,
    });
  } catch (error) {
    console.error("[api/chat]", safeError(error));

    return sendJson(res, 500, {
      error: "No se pudo procesar el chat. Por favor escríbenos por WhatsApp o a contacto@nexo-digital.app.",
    });
  }
};