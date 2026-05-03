<?php
// session_start must be before any output
session_start();

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit(json_encode(['error'=>'Method not allowed'])); }

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || !isset($input['messages']) || !is_array($input['messages'])) {
    http_response_code(400); exit(json_encode(['error'=>'Invalid input']));
}

// Build contents — Gemini requires first message to be 'user'
$contents = [];
foreach (array_slice($input['messages'], -16) as $msg) {
    if (!isset($msg['role'], $msg['content'])) continue;
    $role = $msg['role'] === 'user' ? 'user' : 'model';
    $text = mb_substr(strip_tags((string)$msg['content']), 0, 800);
    if ($text === '') continue;
    $contents[] = ['role' => $role, 'parts' => [['text' => $text]]];
}

// Drop leading model messages (greeting) — API requires first role = user
while (!empty($contents) && $contents[0]['role'] === 'model') {
    array_shift($contents);
}

if (empty($contents)) { http_response_code(400); exit(json_encode(['error'=>'No user messages'])); }

$lang   = preg_replace('/[^a-z]/', '', strtolower($input['lang'] ?? 'es'));
$isPt   = ($lang === 'pt');

// ── Rate limit ────────────────────────────────────────────────
$now = time();
if (!isset($_SESSION['chat_count'])) { $_SESSION['chat_count'] = 0; $_SESSION['chat_window'] = $now; }
if ($now - $_SESSION['chat_window'] > 60) { $_SESSION['chat_count'] = 0; $_SESSION['chat_window'] = $now; }
if ($_SESSION['chat_count'] >= 20) {
    http_response_code(429);
    exit(json_encode(['error' => $isPt
        ? 'Demasiados pedidos. Aguarde um momento.'
        : 'Demasiadas solicitudes. Espera un momento.'
    ]));
}
$_SESSION['chat_count']++;

$system = $isPt
? "És o assistente virtual da Nexo Digital, agência de soluções digitais com sede em Sabadell, Catalunha, Espanha, com clientes em Portugal.

SERVIÇOS:
- Landing Page / Website: design premium, SEO técnico, mobile-first, Core Web Vitals. SEO local Sabadell e Barcelona.
- Loja Online: e-commerce completo, catálogo, gateway de pagamento, integração marketplaces.
- TPV & Quiosques Digitais: software TPV personalizado, quiosques de autoatendimento, suporte incluído. Chave-na-mão.
- Sistemas à Medida: ERP, CRM, dashboards, portais internos, integrações API REST, arquitetura escalável.
- Tráfego Pago / Anúncios: Google Ads e Meta Ads locais, segmentação Sabadell e entorno, relatórios e otimização.
- Cibersegurança & Infraestrutura: auditorias, hardening, SSL, firewall Cloudflare, monitorização 24/7, backups diários.

PRODUTOS SAAS PRÓPRIOS:
- Nexo Invoicer (disponível): faturação digital, gestão fiscal, histórico e relatórios.
- Nexo CRM & WhatsApp (em expansão): pipeline visual, WhatsApp integrado, automatizações de acompanhamento.
- Nexo SEO Audit (disponível): diagnóstico técnico SEO, prioridades acionáveis, roteiro de melhorias.
- SpeakEasily (beta privada): plataforma de comunicação digital, mobile-first.

PROCESSO: 1) Consulta inicial gratuita (resposta em 24h) → 2) Proposta e orçamento sem compromisso → 3) Design e desenvolvimento iterativo → 4) Entrega, formação e suporte.

CONTACTO:
- Email: contacto@nexo-digital.app
- WhatsApp: +34 689 135 159
- Website: www.nexo-digital.app

INSTRUÇÕES:
- Responde sempre em português europeu (pt-PT), de forma concisa (máximo 3-4 linhas).
- Tom amigável, próximo e profissional. Usa 'o seu', 'a sua', 'connosco'.
- Se perguntarem por preços, indica que dependem do projeto e que a consulta inicial é gratuita e sem compromisso.
- Quando o utilizador quiser contratar ou precisar de informação concreta, sugere contactar por WhatsApp (+34 689 135 159) ou email (contacto@nexo-digital.app).
- Não inventes preços, prazos nem dados que não tenham sido mencionados.
- Se não souberes algo específico da Nexo Digital, indica que o melhor é consultar diretamente a equipa.
- No final de CADA resposta, adiciona uma linha em branco e pergunta: 'Há mais alguma coisa em que o possa ajudar?'
- Se o utilizador disser que não precisa de mais ajuda, se despede ou agradece: responde agradecendo o interesse, despede-te cordialmente e indica que pode escrever para contacto@nexo-digital.app ou por WhatsApp (+34 689 135 159) para qualquer consulta futura."

: "Eres el asistente virtual de Nexo Digital, agencia de soluciones digitales con sede en Sabadell, Cataluña, España.

SERVICIOS:
- Landing Page / Web: diseño premium, SEO técnico, mobile-first, Core Web Vitals. SEO local Sabadell y Barcelona.
- Tienda Online: e-commerce completo, catálogo, pasarela de pago, integración marketplaces.
- TPV & Kioscos Digitales: software TPV personalizado, kioscos de autoservicio, soporte incluido. Llave en mano.
- Sistemas a Medida: ERP, CRM, dashboards, portales internos, integraciones API REST, arquitectura escalable.
- Tráfico Pago / Anuncios: Google Ads y Meta Ads locales, segmentación Sabadell y entorno, informes y optimización.
- Ciberseguridad & Infraestructura: auditorías, hardening, SSL, firewall Cloudflare, monitorización 24/7, backups diarios.

PRODUCTOS SAAS PROPIOS:
- Nexo Invoicer (disponible): facturación digital, gestión fiscal, historial e informes.
- Nexo CRM & WhatsApp (en expansión): pipeline visual, WhatsApp integrado, automatizaciones de seguimiento.
- Nexo SEO Audit (disponible): diagnóstico técnico SEO, prioridades accionables, hoja de ruta.
- SpeakEasily (beta privada): plataforma de comunicación digital, mobile-first.

PROCESO: 1) Consulta inicial gratuita (respuesta en 24h) → 2) Propuesta y presupuesto sin compromiso → 3) Diseño y desarrollo iterativo → 4) Entrega, formación y soporte.

CONTACTO:
- Email: contacto@nexo-digital.app
- WhatsApp: +34 689 135 159
- Web: www.nexo-digital.app

INSTRUCCIONES:
- Responde siempre en español, de forma concisa (máximo 3-4 líneas).
- Tono amable, cercano y profesional.
- Si preguntan por precios, indica que dependen del proyecto y que la consulta inicial es gratuita y sin compromiso.
- Cuando el usuario quiera contratar o necesite info concreta, sugiere contactar por WhatsApp (+34 689 135 159) o email (contacto@nexo-digital.app).
- No inventes precios, plazos ni datos que no se hayan mencionado.
- Si no sabes algo específico de Nexo Digital, indica que lo mejor es consultarlo directamente con el equipo.
- Al final de CADA respuesta, añade una línea en blanco y pregunta: '¿Hay algo más en lo que pueda ayudarte?'
- Si el usuario dice que no necesita más ayuda, se despide o agradece: responde agradeciendo su interés, despídete cordialmente e indícale que puede escribir a contacto@nexo-digital.app o por WhatsApp (+34 689 135 159) para cualquier consulta futura.";

$payload = [
    'system_instruction' => ['parts' => [['text' => $system]]],
    'contents' => $contents,
    'generationConfig' => ['temperature' => 0.7, 'maxOutputTokens' => 280, 'topP' => 0.9],
    'safetySettings' => [
        ['category' => 'HARM_CATEGORY_HARASSMENT',        'threshold' => 'BLOCK_MEDIUM_AND_ABOVE'],
        ['category' => 'HARM_CATEGORY_HATE_SPEECH',       'threshold' => 'BLOCK_MEDIUM_AND_ABOVE'],
        ['category' => 'HARM_CATEGORY_DANGEROUS_CONTENT', 'threshold' => 'BLOCK_MEDIUM_AND_ABOVE']
    ]
];

$api_key = 'AIzaSyCXt5Xi04J0kWW0RyyJdowfQRV0eE8XcwU';
$url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={$api_key}";

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_SSL_VERIFYPEER => true
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($curlErr) { http_response_code(500); exit(json_encode(['error' => ($isPt ? 'Erro de ligação: ' : 'Error de conexión: ') . $curlErr])); }

$data = json_decode($response, true);
$reply = $data['candidates'][0]['content']['parts'][0]['text'] ?? null;

if ($httpCode !== 200 || !$reply) {
    http_response_code(500);
    exit(json_encode(['error' => $data['error']['message'] ?? ('HTTP ' . $httpCode)]));
}

echo json_encode(['reply' => $reply]);
