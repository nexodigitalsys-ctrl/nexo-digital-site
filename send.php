<?php
error_reporting(0);
ini_set('display_errors', '0');
ini_set('log_errors', '1');
ob_start();

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

function respond(bool $ok, string $msg, int $code = 200): void {
    ob_end_clean();
    http_response_code($code);
    echo json_encode(['success' => $ok, 'message' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    ob_end_clean(); http_response_code(200); exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Método no permitido.', 405);
}

date_default_timezone_set('Europe/Madrid');

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST ?: [];
}

function cl($v): string {
    return htmlspecialchars(strip_tags(trim((string)($v ?? ''))), ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

$nombre      = cl($data['nombre']      ?? '');
$email       = filter_var(trim((string)($data['email'] ?? '')), FILTER_SANITIZE_EMAIL);
$empresa     = cl($data['empresa']     ?? '');
$telefono    = cl($data['telefono']    ?? '');
$servicio    = cl($data['servicio']    ?? '');
$presupuesto = cl($data['presupuesto'] ?? '');
$timeline    = cl($data['timeline']    ?? '');
$descripcion = cl($data['descripcion'] ?? '');
$fecha       = date('d/m/Y \a \l\a\s H:i');
$lang        = cl($data['lang']        ?? 'es'); // 'pt' when coming from /pt/contacto.html

if ($nombre === '') respond(false, $lang === 'pt' ? 'O nome é obrigatório.' : 'El nombre es obligatorio.', 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respond(false, $lang === 'pt' ? 'O email não é válido.' : 'El email no es válido.', 422);

$subj_team   = $lang === 'pt'
    ? "Nova consulta (PT): {$nombre}" . ($empresa ? " — {$empresa}" : '')
    : "Nueva consulta: {$nombre}"     . ($empresa ? " — {$empresa}" : '');
$subj_client = $lang === 'pt'
    ? 'Recebemos a sua consulta — Nexo Digital'
    : 'Hemos recibido tu consulta — Nexo Digital';

// ── HTML: email para el equipo ────────────────────────────────
function row(string $label, string $value): string {
    if ($value === '') return '';
    return "
    <tr>
      <td style=\"padding:10px 16px;font-size:13px;font-weight:600;color:#64748b;white-space:nowrap;width:130px;border-bottom:1px solid #f1f5f9\">{$label}</td>
      <td style=\"padding:10px 16px;font-size:13.5px;color:#0f172a;border-bottom:1px solid #f1f5f9\">{$value}</td>
    </tr>";
}

function badge(string $text, string $bg, string $color): string {
    if ($text === '') return '';
    return "<span style=\"display:inline-block;padding:3px 12px;border-radius:9999px;background:{$bg};color:{$color};font-size:12px;font-weight:700\">{$text}</span>";
}

$html_team = '<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:\'Segoe UI\',system-ui,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8 55%,#7c3aed);border-radius:16px 16px 0 0;padding:32px 36px 28px">
    <table width="100%"><tr>
      <td>
        <div style="display:inline-block;background:rgba(255,255,255,0.18);border-radius:10px;padding:8px 14px">
          <span style="font-size:20px;font-weight:800;color:#fff;letter-spacing:-.5px">N</span>
        </div>
        <span style="font-size:16px;font-weight:700;color:#fff;vertical-align:middle;margin-left:10px">Nexo Digital</span>
      </td>
      <td align="right">
        <span style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);border-radius:9999px;padding:4px 14px;font-size:11px;font-weight:700;color:#fff;letter-spacing:.1em;text-transform:uppercase">Nueva consulta</span>
      </td>
    </tr></table>
    <div style="margin-top:20px">
      <div style="font-size:22px;font-weight:700;color:#fff;margin-bottom:6px">📥 Nueva consulta de proyecto</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.75)">Recibida el ' . $fecha . '</div>
    </div>
  </td></tr>

  <!-- Contacto -->
  <tr><td style="background:#fff;padding:0 0 0 0">
    <div style="padding:24px 36px 4px">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.2em;color:#7c3aed;margin-bottom:2px">Contacto</div>
    </div>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #f1f5f9">
      ' . row('Nombre', $nombre) . '
      ' . row('Email', '<a href="mailto:' . $email . '" style="color:#1d4ed8;text-decoration:none">' . $email . '</a>') . '
      ' . ($empresa ? row('Empresa', $empresa) : '') . '
      ' . ($telefono ? row('Teléfono', '<a href="tel:' . $telefono . '" style="color:#1d4ed8;text-decoration:none">' . $telefono . '</a>') : '') . '
    </table>
  </td></tr>

  <!-- Proyecto -->
  <tr><td style="background:#fff;padding:0">
    <div style="padding:20px 36px 4px;border-top:1px solid #e2e8f0">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.2em;color:#7c3aed;margin-bottom:2px">Proyecto</div>
    </div>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #f1f5f9">
      ' . ($servicio    ? row('Servicio',    badge($servicio, '#eff6ff', '#1d4ed8')) : '') . '
      ' . ($presupuesto ? row('Presupuesto', badge($presupuesto, '#f0fdf4', '#15803d')) : '') . '
      ' . ($timeline    ? row('Plazo',       badge($timeline, '#faf5ff', '#7c3aed')) : '') . '
    </table>
  </td></tr>

  <!-- Descripción -->
  ' . ($descripcion ? '
  <tr><td style="background:#fff;padding:0">
    <div style="padding:20px 36px 4px;border-top:1px solid #e2e8f0">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.2em;color:#7c3aed;margin-bottom:2px">Descripción</div>
    </div>
    <div style="padding:12px 36px 28px;font-size:14px;line-height:1.8;color:#374151;border-top:1px solid #f1f5f9">' . nl2br($descripcion) . '</div>
  </td></tr>' : '') . '

  <!-- Acciones -->
  <tr><td style="background:#f8fafc;border-top:2px solid #e2e8f0;padding:24px 36px;border-radius:0 0 16px 16px">
    <div style="font-size:12px;color:#64748b;margin-bottom:14px">Responde directamente a este email para contactar con <strong>' . $nombre . '</strong></div>
    <a href="mailto:' . $email . '?subject=Re: ' . rawurlencode($subj_team) . '" style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#7c3aed);color:#fff;text-decoration:none;border-radius:9999px;padding:10px 22px;font-size:13px;font-weight:700;margin-right:8px">✉ Responder al cliente</a>
    ' . ($telefono ? '<a href="https://wa.me/' . preg_replace('/[^0-9]/', '', $telefono) . '?text=' . rawurlencode('Hola ' . $nombre . ', soy del equipo de Nexo Digital. Hemos recibido tu consulta y queremos ayudarte.') . '" style="display:inline-block;background:#25d366;color:#fff;text-decoration:none;border-radius:9999px;padding:10px 22px;font-size:13px;font-weight:700">💬 WhatsApp</a>' : '') . '
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8">Nexo Digital · contacto@nexo-digital.app · Sabadell, Barcelona</div>
  </td></tr>

</table>
</td></tr>
</table>
</body></html>';

// ── HTML: confirmación al cliente (ES / PT) ───────────────────
$isPt = ($lang === 'pt');

$lbl_header_title   = $isPt ? 'Consulta recebida!'                    : '¡Consulta recibida!';
$lbl_header_sub     = $isPt ? 'Responderemos em menos de 24 horas'    : 'Te responderemos en menos de 24 horas';
$lbl_greeting       = $isPt ? 'Olá'                                   : 'Hola';
$lbl_intro          = $isPt
    ? 'Obrigado por contactar a <strong>Nexo Digital</strong>. Recebemos a sua consulta corretamente e entraremos em contacto consigo o mais brevemente possível.'
    : 'Gracias por contactar con <strong>Nexo Digital</strong>. Hemos recibido correctamente tu consulta y nos pondremos en contacto contigo a la mayor brevedad posible.';
$lbl_summary        = $isPt ? 'Resumo da sua consulta'                : 'Resumen de tu consulta';
$lbl_servicio       = $isPt ? 'Serviço'                               : 'Servicio';
$lbl_presupuesto    = $isPt ? 'Orçamento'                             : 'Presupuesto';
$lbl_timeline       = $isPt ? 'Prazo'                                 : 'Plazo';
$lbl_fecha          = $isPt ? '📅 Consulta registada em '             : '📅 Consulta registrada el ';
$lbl_next           = $isPt ? 'O que acontece agora?'                 : '¿Qué ocurre ahora?';
$lbl_step1          = $isPt ? 'Analisamos os detalhes do seu projeto e preparamos uma resposta personalizada.' : 'Revisamos los detalles de tu proyecto y preparamos una respuesta personalizada.';
$lbl_step2          = $isPt ? 'Entramos em contacto em <strong>menos de 24 horas</strong> em dias úteis (Seg–Sex).' : 'Te contactamos en <strong>menos de 24 horas</strong> en días laborables (Lun–Vie).';
$lbl_step3          = $isPt ? 'Primeira reunião gratuita para perceber o seu projeto em profundidade.' : 'Primera reunión gratuita para entender tu proyecto en profundidad.';
$lbl_urgent         = $isPt ? 'Se precisar de resposta urgente, escreva-nos diretamente:' : 'Si necesitas respuesta urgente, escríbenos directamente:';
$lbl_wa_text        = $isPt ? 'Olá Nexo Digital, acabei de enviar uma consulta e preciso de informação urgente.' : 'Hola Nexo Digital, acabo de enviar una consulta y necesito información urgente.';
$lbl_footer_sub     = $isPt ? 'Agência Tech Premium · Sabadell, Barcelona' : 'Estudio Tech Premium · Sabadell, Barcelona';
$lbl_privacy        = $isPt ? 'Privacidade'                           : 'Privacidad';
$lbl_legal          = $isPt ? 'Aviso Legal'                           : 'Aviso Legal';
$url_privacy        = $isPt ? 'https://www.nexo-digital.app/pt/privacidade.html' : 'https://www.nexo-digital.app/privacidad.html';
$url_legal          = $isPt ? 'https://www.nexo-digital.app/pt/aviso-legal.html' : 'https://www.nexo-digital.app/aviso-legal.html';
$html_lang          = $isPt ? 'pt' : 'es';

$html_client = '<!DOCTYPE html>
<html lang="' . $html_lang . '">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:\'Segoe UI\',system-ui,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8 55%,#7c3aed);border-radius:16px 16px 0 0;padding:40px 36px 36px;text-align:center">
    <div style="background:rgba(255,255,255,0.18);border-radius:50%;width:64px;height:64px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px">✅</div>
    <div style="font-size:24px;font-weight:800;color:#fff;margin-bottom:8px">' . $lbl_header_title . '</div>
    <div style="font-size:14px;color:rgba(255,255,255,0.8)">' . $lbl_header_sub . '</div>
  </td></tr>

  <!-- Saludo -->
  <tr><td style="background:#fff;padding:32px 36px 0">
    <div style="font-size:16px;color:#0f172a;margin-bottom:8px">' . $lbl_greeting . ' <strong>' . $nombre . '</strong>,</div>
    <div style="font-size:14.5px;line-height:1.8;color:#374151">' . $lbl_intro . '</div>
  </td></tr>

  <!-- Resumen -->
  <tr><td style="background:#fff;padding:24px 36px 0">
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px 24px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#7c3aed;margin-bottom:14px">' . $lbl_summary . '</div>
      ' . ($servicio    ? '<div style="margin-bottom:10px"><span style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:2px">' . $lbl_servicio . '</span><span style="font-size:14px;color:#0f172a;font-weight:600">' . $servicio . '</span></div>' : '') . '
      ' . ($presupuesto ? '<div style="margin-bottom:10px"><span style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:2px">' . $lbl_presupuesto . '</span><span style="font-size:14px;color:#0f172a;font-weight:600">' . $presupuesto . '</span></div>' : '') . '
      ' . ($timeline    ? '<div style="margin-bottom:10px"><span style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:2px">' . $lbl_timeline . '</span><span style="font-size:14px;color:#0f172a;font-weight:600">' . $timeline . '</span></div>' : '') . '
      <div style="margin-top:4px;padding-top:12px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b">' . $lbl_fecha . $fecha . '</div>
    </div>
  </td></tr>

  <!-- Qué esperar -->
  <tr><td style="background:#fff;padding:24px 36px 0">
    <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:12px">' . $lbl_next . '</div>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="vertical-align:top;padding:8px 0;width:32px"><span style="display:inline-block;width:24px;height:24px;background:linear-gradient(135deg,#1d4ed8,#7c3aed);border-radius:50%;font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:24px">1</span></td>
        <td style="vertical-align:top;padding:8px 0 8px 8px;font-size:13.5px;color:#374151">' . $lbl_step1 . '</td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:8px 0;width:32px"><span style="display:inline-block;width:24px;height:24px;background:linear-gradient(135deg,#1d4ed8,#7c3aed);border-radius:50%;font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:24px">2</span></td>
        <td style="vertical-align:top;padding:8px 0 8px 8px;font-size:13.5px;color:#374151">' . $lbl_step2 . '</td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:8px 0;width:32px"><span style="display:inline-block;width:24px;height:24px;background:linear-gradient(135deg,#1d4ed8,#7c3aed);border-radius:50%;font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:24px">3</span></td>
        <td style="vertical-align:top;padding:8px 0 8px 8px;font-size:13.5px;color:#374151">' . $lbl_step3 . '</td>
      </tr>
    </table>
  </td></tr>

  <!-- CTA urgente -->
  <tr><td style="background:#fff;padding:24px 36px 32px">
    <div style="font-size:13px;color:#64748b;margin-bottom:14px">' . $lbl_urgent . '</div>
    <a href="mailto:contacto@nexo-digital.app" style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#7c3aed);color:#fff;text-decoration:none;border-radius:9999px;padding:11px 24px;font-size:13px;font-weight:700;margin-right:8px">✉ contacto@nexo-digital.app</a>
    <a href="https://wa.me/34689135159?text=' . rawurlencode($lbl_wa_text) . '" style="display:inline-block;background:#25d366;color:#fff;text-decoration:none;border-radius:9999px;padding:11px 24px;font-size:13px;font-weight:700">💬 WhatsApp</a>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:linear-gradient(135deg,#0f172a,#1e1b4b);border-radius:0 0 16px 16px;padding:24px 36px;text-align:center">
    <div style="font-size:14px;font-weight:700;color:#e2e8f0;margin-bottom:4px">Nexo Digital</div>
    <div style="font-size:12px;color:#64748b;margin-bottom:12px">' . $lbl_footer_sub . '</div>
    <div style="font-size:11px;color:#475569">
      <a href="https://www.nexo-digital.app" style="color:#60a5fa;text-decoration:none">www.nexo-digital.app</a>
      &nbsp;·&nbsp;
      <a href="' . $url_privacy . '" style="color:#475569;text-decoration:none">' . $lbl_privacy . '</a>
      &nbsp;·&nbsp;
      <a href="' . $url_legal . '" style="color:#475569;text-decoration:none">' . $lbl_legal . '</a>
    </div>
  </td></tr>

</table>
</td></tr>
</table>
</body></html>';

// ── Plain text fallbacks ──────────────────────────────────────
$txt_team = implode("\n", [
    "══ NUEVA CONSULTA — Nexo Digital ══",
    "Recibida el {$fecha}",
    "",
    "CONTACTO",
    "Nombre:      {$nombre}",
    "Email:       {$email}",
    "Empresa:     {$empresa}",
    "Teléfono:    {$telefono}",
    "",
    "PROYECTO",
    "Servicio:    {$servicio}",
    "Presupuesto: {$presupuesto}",
    "Plazo:       {$timeline}",
    "",
    "DESCRIPCIÓN",
    $descripcion,
    "",
    "── Nexo Digital · contacto@nexo-digital.app ──",
]);

$txt_client = $isPt
    ? implode("\n", [
        "Olá {$nombre},",
        "",
        "Obrigado por nos contactar. Recebemos a sua consulta corretamente.",
        "",
        "RESUMO",
        "Serviço:    {$servicio}",
        "Orçamento: {$presupuesto}",
        "Prazo:      {$timeline}",
        "Data:       {$fecha}",
        "",
        "Responderemos em menos de 24 horas.",
        "Se precisar de resposta urgente: contacto@nexo-digital.app",
        "",
        "Com os melhores cumprimentos,",
        "A equipa da Nexo Digital",
        "contacto@nexo-digital.app · Sabadell, Barcelona",
    ])
    : implode("\n", [
        "Hola {$nombre},",
        "",
        "Gracias por contactarnos. Hemos recibido tu consulta correctamente.",
        "",
        "RESUMEN",
        "Servicio:    {$servicio}",
        "Presupuesto: {$presupuesto}",
        "Plazo:       {$timeline}",
        "Fecha:       {$fecha}",
        "",
        "Te responderemos en menos de 24 horas.",
        "Si necesitas respuesta urgente: contacto@nexo-digital.app",
        "",
        "Un saludo,",
        "El equipo de Nexo Digital",
        "contacto@nexo-digital.app · Sabadell, Barcelona",
    ]);

// ── Discord webhook notification ─────────────────────────────
function notifyDiscord(array $d, string $fecha): void {
    $webhook = 'https://discordapp.com/api/webhooks/1490751132434432010/c7-6ohVdH9mpM5qVUPn4a7sFFLbCt_UCd4n0aKaTdBoWH1raIO0bydOdLwWT7BnxH3OW';

    $nombre      = $d['nombre']      ?? '';
    $email       = $d['email']       ?? '';
    $empresa     = $d['empresa']     ?? '';
    $telefono    = $d['telefono']    ?? '';
    $servicio    = $d['servicio']    ?? '';
    $presupuesto = $d['presupuesto'] ?? '';
    $timeline    = $d['timeline']    ?? '';
    $descripcion = $d['descripcion'] ?? '';

    $referer = $_SERVER['HTTP_REFERER'] ?? 'https://www.nexo-digital.app';

    $lines = [];
    $lines[] = ($empresa ? "🏢 **{$empresa}**" : "👤 **{$nombre}**");
    $lines[] = "📧 {$email}" . ($telefono ? "  ·  📞 {$telefono}" : '');
    if ($servicio)    $lines[] = "⚙️ **Servicio:** {$servicio}";
    if ($presupuesto) $lines[] = "💰 **Presupuesto:** {$presupuesto}";
    if ($timeline)    $lines[] = "⏱️ **Plazo:** {$timeline}";
    if ($descripcion) {
        $short = mb_strlen($descripcion) > 220 ? mb_substr($descripcion, 0, 220) . '…' : $descripcion;
        $lines[] = "💬 {$short}";
    }
    $lines[] = "🕐 {$fecha}";
    $lines[] = "🔗 {$referer}";

    $payload = json_encode([
        'username'   => 'Nexo Digital · Leads',
        'embeds'     => [[
            'title'       => '📂 Información detallada recibida',
            'description' => implode("\n", $lines),
            'color'       => 1920728, // #1d4ed8
            'author'      => [
                'name' => "Leads — Nexo Digital (Contacto)",
            ],
            'footer'      => ['text' => 'Nexo Digital · contacto@nexo-digital.app · Sabadell, Barcelona'],
            'timestamp'   => date('c'),
        ]],
    ], JSON_UNESCAPED_UNICODE);

    $ctx = stream_context_create([
        'http' => [
            'method'        => 'POST',
            'header'        => "Content-Type: application/json\r\nContent-Length: " . strlen($payload) . "\r\n",
            'content'       => $payload,
            'timeout'       => 5,
            'ignore_errors' => true,
        ],
    ]);

    @file_get_contents($webhook, false, $ctx);
}

// ── Try PHPMailer SMTP ────────────────────────────────────────
$sent   = false;
$method = 'none';
$smtpPath = __DIR__ . '/phpmailer/src/';

if (!$sent && file_exists($smtpPath . 'PHPMailer.php')) {
    try {
        require_once $smtpPath . 'Exception.php';
        require_once $smtpPath . 'PHPMailer.php';
        require_once $smtpPath . 'SMTP.php';

        $cfg = function() use ($smtpPath) {
            $m = new PHPMailer\PHPMailer\PHPMailer(true);
            $m->isSMTP();
            $m->Host       = 'smtp.ionos.es';
            $m->SMTPAuth   = true;
            $m->Username   = 'contacto@nexo-digital.app';
            $m->Password   = '@Mendes8372';
            $m->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
            $m->Port       = 465;
            $m->CharSet    = 'UTF-8';
            $m->isHTML(true);
            return $m;
        };

        // Email al equipo
        $m = $cfg();
        $m->setFrom('contacto@nexo-digital.app', 'Nexo Digital');
        $m->addAddress('contacto@nexo-digital.app', 'Nexo Digital');
        $m->addReplyTo($email, $nombre);
        $m->Subject = $subj_team;
        $m->Body    = $html_team;
        $m->AltBody = $txt_team;
        $m->send();

        // Confirmación al cliente
        $c = $cfg();
        $c->setFrom('contacto@nexo-digital.app', 'Nexo Digital');
        $c->addAddress($email, $nombre);
        $c->Subject = $subj_client;
        $c->Body    = $html_client;
        $c->AltBody = $txt_client;
        $c->send();

        $sent   = true;
        $method = 'smtp';
        notifyDiscord($data, $fecha);
    } catch (\Throwable $e) {
        error_log('[send.php SMTP] ' . $e->getMessage());
    }
}

// ── Fallback: native mail() con HTML ─────────────────────────
if (!$sent) {
    $hdr = implode("\r\n", [
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8",
        "From: Nexo Digital <contacto@nexo-digital.app>",
        "Reply-To: {$email}",
    ]);
    $sent = @mail('contacto@nexo-digital.app', '=?UTF-8?B?' . base64_encode($subj_team) . '?=', $html_team, $hdr);
    if ($sent) {
        $hdr2 = implode("\r\n", [
            "MIME-Version: 1.0",
            "Content-Type: text/html; charset=UTF-8",
            "From: Nexo Digital <contacto@nexo-digital.app>",
        ]);
        @mail($email, '=?UTF-8?B?' . base64_encode($subj_client) . '?=', $html_client, $hdr2);
        $method = 'mail';
        notifyDiscord($data, $fecha);
    }
}

if ($sent) {
    respond(true, $isPt
        ? 'Consulta recebida. Entraremos em contacto em menos de 24h.'
        : 'Consulta recibida. Te contactaremos en menos de 24h.'
    );
}

respond(false, $isPt
    ? 'Não foi possível enviar o email. Por favor escreva-nos diretamente para contacto@nexo-digital.app ou por WhatsApp.'
    : 'No se pudo enviar el email. Por favor escríbenos directamente a contacto@nexo-digital.app o por WhatsApp.',
    500
);
