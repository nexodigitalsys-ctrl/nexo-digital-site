<?php
// ══════════════════════════════════════════════════════════════
//  Nexo Digital — send.php  |  Formulario de contacto (Hostinger)
//  Envío con mail() nativo de PHP. Replica la lógica de api/send.js
// ══════════════════════════════════════════════════════════════

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
    exit;
}

function sendJson($code, $payload) {
    http_response_code($code);
    echo json_encode($payload);
    exit;
}

function clean($value) {
    return mb_substr(trim(strip_tags((string)($value ?? ''))), 0, 5000);
}

function escHtml($value) {
    return htmlspecialchars((string)($value ?? ''), ENT_QUOTES, 'UTF-8');
}

function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// ── Configuración ────────────────────────────────────────────
$TO_EMAIL   = 'contacto@nexo-digital.app';   // a quién llegan las consultas
$FROM_EMAIL = 'contacto@nexo-digital.app';   // remitente (cuenta del dominio/subdominio)
$FROM_NAME  = 'Nexo Digital';

// ── Leer cuerpo (JSON o form-urlencoded) ─────────────────────
$raw = file_get_contents('php://input');
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$input = [];
if (strpos($contentType, 'application/json') !== false) {
    $input = json_decode($raw, true) ?: [];
} else {
    $input = $_POST;
}

$nombre     = clean($input['nombre'] ?? '');
$email      = strtolower(clean($input['email'] ?? ''));
$empresa    = clean($input['empresa'] ?? '');
$telefono   = clean($input['telefono'] ?? '');
$servicio   = clean($input['servicio'] ?? '');
$presupuesto= clean($input['presupuesto'] ?? '');
$timeline   = clean($input['timeline'] ?? '');
$descripcion= clean($input['descripcion'] ?? '');
$lang       = strtolower(preg_replace('/[^a-z]/', '', $input['lang'] ?? 'es'));
$isPt       = $lang === 'pt';

// Honeypot
$website = clean($input['website'] ?? $input['url'] ?? $input['company_url'] ?? '');
if ($website !== '') {
    sendJson(200, ['success' => true, 'message' => $isPt
        ? 'Consulta recebida. Entraremos em contacto em menos de 24h.'
        : 'Consulta recibida. Te contactaremos en menos de 24h.']);
}

if ($nombre === '') {
    sendJson(422, ['success' => false, 'message' => $isPt ? 'O nome é obrigatório.' : 'El nombre es obligatorio.']);
}

if (!isValidEmail($email)) {
    sendJson(422, ['success' => false, 'message' => $isPt ? 'O email não é válido.' : 'El email no es válido.']);
}

if (mb_strlen($descripcion) > 5000) {
    sendJson(422, ['success' => false, 'message' => $isPt ? 'A mensagem é demasiado longa.' : 'El mensaje es demasiado largo.']);
}

setlocale(LC_TIME, $isPt ? 'pt_PT.UTF-8' : 'es_ES.UTF-8');
$fecha = date('d/m/Y H:i');

// ── Email al equipo ───────────────────────────────────────────
$subjectTeam = $isPt
    ? 'Nova consulta (PT): ' . $nombre . ($empresa ? ' — ' . $empresa : '')
    : 'Nueva consulta: ' . $nombre . ($empresa ? ' — ' . $empresa : '');

$teamHtml = '
<!doctype html>
<html lang="' . ($isPt ? 'pt' : 'es') . '">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8,#7c3aed);padding:28px 32px;color:#ffffff;">
          <div style="font-size:18px;font-weight:700;">Nexo Digital</div>
          <div style="font-size:24px;font-weight:800;margin-top:16px;">📥 Nueva consulta de proyecto</div>
          <div style="font-size:13px;margin-top:6px;opacity:.85;">Recibida el ' . escHtml($fecha) . '</div>
        </td></tr>
        <tr><td style="padding:28px 32px;">
          <h2 style="margin:0 0 16px;font-size:16px;color:#7c3aed;">Contacto</h2>
          <p><strong>Nombre:</strong> ' . escHtml($nombre) . '</p>
          <p><strong>Email:</strong> <a href="mailto:' . escHtml($email) . '">' . escHtml($email) . '</a></p>
          ' . ($empresa ? '<p><strong>Empresa:</strong> ' . escHtml($empresa) . '</p>' : '') . '
          ' . ($telefono ? '<p><strong>Teléfono:</strong> <a href="tel:' . escHtml($telefono) . '">' . escHtml($telefono) . '</a></p>' : '') . '
          <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0;">
          <h2 style="margin:0 0 16px;font-size:16px;color:#7c3aed;">Proyecto</h2>
          ' . ($servicio ? '<p><strong>Servicio:</strong> ' . escHtml($servicio) . '</p>' : '') . '
          ' . ($presupuesto ? '<p><strong>Presupuesto:</strong> ' . escHtml($presupuesto) . '</p>' : '') . '
          ' . ($timeline ? '<p><strong>Plazo:</strong> ' . escHtml($timeline) . '</p>' : '') . '
          ' . ($descripcion ? '<p><strong>Descripción:</strong><br>' . nl2br(escHtml($descripcion)) . '</p>' : '') . '
        </td></tr>
        <tr><td style="background:#f8fafc;padding:20px 32px;font-size:12px;color:#64748b;">
          Nexo Digital · contacto@nexo-digital.app · Sabadell, Barcelona
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>';

$teamText = "Nueva consulta Nexo Digital\n"
  . "Fecha: $fecha\n"
  . "Nombre: $nombre\n"
  . "Email: $email\n"
  . ($empresa ? "Empresa: $empresa\n" : '')
  . ($telefono ? "Teléfono: $telefono\n" : '')
  . ($servicio ? "Servicio: $servicio\n" : '')
  . ($presupuesto ? "Presupuesto: $presupuesto\n" : '')
  . ($timeline ? "Plazo: $timeline\n" : '')
  . ($descripcion ? "Descripción: $descripcion\n" : '');

// ── Email de confirmación al cliente ─────────────────────────
$subjectClient = $isPt
    ? 'Recebemos a sua consulta — Nexo Digital'
    : 'Hemos recibido tu consulta — Nexo Digital';

$title = $isPt ? 'Consulta recebida!' : '¡Consulta recibida!';
$subtitle = $isPt ? 'Responderemos em menos de 24 horas' : 'Te responderemos en menos de 24 horas';
$greeting = $isPt ? 'Olá' : 'Hola';
$intro = $isPt
    ? 'Obrigado por contactar a Nexo Digital. Recebemos a sua consulta corretamente e entraremos em contacto consigo o mais brevemente possível.'
    : 'Gracias por contactar con Nexo Digital. Hemos recibido correctamente tu consulta y nos pondremos en contacto contigo a la mayor brevedad posible.';
$summary = $isPt ? 'Resumo da sua consulta' : 'Resumen de tu consulta';
$serviceLabel = $isPt ? 'Serviço' : 'Servicio';
$budgetLabel = $isPt ? 'Orçamento' : 'Presupuesto';
$timelineLabel = $isPt ? 'Prazo' : 'Plazo';
$next = $isPt ? 'O que acontece agora?' : '¿Qué ocurre ahora?';
$step1 = $isPt
    ? 'Analisamos os detalhes do seu projeto e preparamos uma resposta personalizada.'
    : 'Revisamos los detalles de tu proyecto y preparamos una respuesta personalizada.';
$step2 = $isPt
    ? 'Entramos em contacto em menos de 24 horas em dias úteis.'
    : 'Te contactamos en menos de 24 horas en días laborables.';
$urgent = $isPt
    ? 'Se precisar de resposta urgente, escreva-nos diretamente:'
    : 'Si necesitas respuesta urgente, escríbenos directamente:';

$clientHtml = '
<!doctype html>
<html lang="' . ($isPt ? 'pt' : 'es') . '">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8,#7c3aed);padding:28px 32px;color:#ffffff;text-align:center;">
          <div style="font-size:18px;font-weight:700;">Nexo Digital</div>
          <div style="font-size:26px;font-weight:800;margin-top:16px;">' . escHtml($title) . '</div>
          <div style="font-size:14px;margin-top:6px;opacity:.85;">' . escHtml($subtitle) . '</div>
        </td></tr>
        <tr><td style="padding:28px 32px;font-size:15px;line-height:1.7;">
          <p>' . escHtml($greeting) . ' ' . escHtml($nombre) . ',</p>
          <p>' . escHtml($intro) . '</p>
          <h2 style="font-size:16px;color:#7c3aed;margin-top:28px;">' . escHtml($summary) . '</h2>
          ' . ($servicio ? '<p><strong>' . escHtml($serviceLabel) . ':</strong> ' . escHtml($servicio) . '</p>' : '') . '
          ' . ($presupuesto ? '<p><strong>' . escHtml($budgetLabel) . ':</strong> ' . escHtml($presupuesto) . '</p>' : '') . '
          ' . ($timeline ? '<p><strong>' . escHtml($timelineLabel) . ':</strong> ' . escHtml($timeline) . '</p>' : '') . '
          <p style="font-size:13px;color:#64748b;">' . escHtml($fecha) . '</p>
          <h2 style="font-size:16px;color:#7c3aed;margin-top:28px;">' . escHtml($next) . '</h2>
          <p>1. ' . escHtml($step1) . '</p>
          <p>2. ' . escHtml($step2) . '</p>
          <p style="margin-top:28px;color:#64748b;">' . escHtml($urgent) . '</p>
          <p>
            <a href="mailto:contacto@nexo-digital.app" style="color:#1d4ed8;">contacto@nexo-digital.app</a>
            ·
            <a href="https://wa.me/34689135159" style="color:#16a34a;">WhatsApp</a>
          </p>
        </td></tr>
        <tr><td style="background:#0f172a;padding:22px 32px;text-align:center;color:#94a3b8;font-size:12px;">
          Nexo Digital · www.nexo-digital.app
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>';

$clientText = ($isPt
    ? "Olá $nombre,\n\nRecebemos a sua consulta corretamente. Entraremos em contacto em menos de 24 horas.\n\nNexo Digital"
    : "Hola $nombre,\n\nHemos recibido correctamente tu consulta. Te contactaremos en menos de 24 horas.\n\nNexo Digital");

function sendMailNexo($to, $subject, $html, $text, $fromEmail, $fromName, $replyTo) {
    $from = '=?UTF-8?B?' . base64_encode($fromName) . '?= <' . $fromEmail . '>';
    $headers = "MIME-Version: 1.0\r\n"
             . "Content-Type: text/html; charset=UTF-8\r\n"
             . "From: $from\r\n"
             . "Reply-To: $replyTo\r\n"
             . "X-Mailer: PHP/" . phpversion();
    $body = $html;
    return @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . $fromEmail);
}

$okTeam = sendMailNexo($TO_EMAIL, $subjectTeam, $teamHtml, $teamText, $FROM_EMAIL, $FROM_NAME, $email);
$okClient = sendMailNexo($email, $subjectClient, $clientHtml, $clientText, $FROM_EMAIL, $FROM_NAME, $email);

if (!$okTeam && !$okClient) {
    sendJson(500, ['success' => false, 'message' => $isPt
        ? 'Não foi possível enviar o email. Escreva-nos para contacto@nexo-digital.app ou pelo WhatsApp.'
        : 'No se pudo enviar el email. Por favor escríbenos directamente a contacto@nexo-digital.app o por WhatsApp.']);
}

sendJson(200, ['success' => true, 'message' => $isPt
    ? 'Consulta recebida. Entraremos em contacto em menos de 24h.'
    : 'Consulta recibida. Te contactaremos en menos de 24h.']);