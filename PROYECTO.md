# Nexo Digital — Documento de Proyecto
> Última actualización: 2026-04-30

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Frontend | HTML5 + React 18 UMD + Babel Standalone (JSX en browser, sin build step) |
| Estilos | CSS Variables custom, sin Tailwind, sin frameworks externos |
| Fuentes | Google Fonts — Manrope + Sora (páginas principales), Inter + Poppins (legales) |
| Backend | PHP 8.x — PHPMailer SMTP via Ionos |
| IA Chat | Gemini 2.5 Flash via API REST (`chat.php`) |
| Notificaciones | Discord Webhook (leads en tiempo real) |
| Email | SMTP Ionos · `contacto@nexo-digital.app` |
| Hosting | Compartido (compatible con `send.php`, `chat.php`) |
| Dominio | `https://www.nexo-digital.app` |
| Repositorio | Git · rama `main` · usuario `Guimelclemente` |

---

## Estructura de archivos

```
nexo-digital/
│
├── index.html              ← Home ES
├── servicios.html          ← Servicios ES
├── proceso.html            ← Proceso ES
├── clientes.html           ← Clientes ES
├── equipo.html             ← Equipo ES
├── contacto.html           ← Contacto + formulario ES
├── aviso-legal.html        ← Legal ES (noindex)
├── privacidad.html         ← Privacidad ES (noindex)
├── cookies.html            ← Cookies ES (noindex)
│
├── pt/
│   ├── index.html          ← Home PT
│   ├── servicos.html       ← Serviços PT
│   ├── processo.html       ← Processo PT
│   ├── clientes.html       ← Clientes PT
│   ├── equipa.html         ← Equipa PT
│   ├── contacto.html       ← Contacto + formulario PT
│   ├── aviso-legal.html    ← Legal PT (noindex)
│   ├── privacidade.html    ← Privacidade PT (noindex)
│   └── cookies.html        ← Cookies PT (noindex)
│
├── send.php                ← Formulario de contacto bilingüe (ES + PT)
├── chat.php                ← Chat IA bilingüe — Gemini 2.5 Flash (ES + PT)
├── phpmailer/              ← Librería SMTP (compartida)
│   └── src/
│       ├── PHPMailer.php
│       ├── SMTP.php
│       └── Exception.php
│
├── sitemap.xml             ← 12 URLs indexables con hreflang ✅
├── robots.txt              ← Bloqueo de directorios internos + referencia sitemap ✅
├── PROYECTO.md             ← Este documento
├── .htaccess               ← Configuración servidor Apache
├── demo-billing.html       ← Preview de Nexo Billing (dark theme, no enlazada en nav)
└── uploads/                ← Archivos internos
```

---

## Páginas completadas

### Español (ES)
| Página | Contenido | SEO | hreflang | Schema |
|---|---|---|---|---|
| `index.html` | ✅ | ✅ completo | ✅ | ✅ Organization + WebSite + WebPage |
| `servicios.html` | ✅ | ✅ completo | ✅ | ✅ WebPage + BreadcrumbList |
| `proceso.html` | ✅ | ✅ completo | ✅ | ✅ WebPage + BreadcrumbList |
| `clientes.html` | ✅ | ✅ completo | ✅ | ✅ WebPage + BreadcrumbList |
| `equipo.html` | ✅ | ✅ completo | ✅ | ✅ AboutPage + BreadcrumbList |
| `contacto.html` | ✅ | ✅ completo | ✅ | ✅ ContactPage + BreadcrumbList |
| `aviso-legal.html` | ✅ | noindex ✅ | — | — |
| `privacidad.html` | ✅ | noindex ✅ | — | — |
| `cookies.html` | ✅ | noindex ✅ | — | — |

### Portugués (PT) — `/pt/`
| Página | Contenido | SEO | hreflang | Schema |
|---|---|---|---|---|
| `pt/index.html` | ✅ | ✅ completo | ✅ | ✅ Organization + WebSite + WebPage |
| `pt/servicos.html` | ✅ | ✅ completo | ✅ | ✅ WebPage + BreadcrumbList |
| `pt/processo.html` | ✅ | ✅ completo | ✅ | ✅ WebPage + BreadcrumbList |
| `pt/clientes.html` | ✅ | ✅ completo | ✅ | ✅ WebPage + BreadcrumbList |
| `pt/equipa.html` | ✅ | ✅ completo | ✅ | ✅ AboutPage + BreadcrumbList |
| `pt/contacto.html` | ✅ | ✅ completo | ✅ | ✅ ContactPage + BreadcrumbList |
| `pt/aviso-legal.html` | ✅ | noindex ✅ | ✅ | — |
| `pt/privacidade.html` | ✅ | noindex ✅ | ✅ | — |
| `pt/cookies.html` | ✅ | noindex ✅ | ✅ | — |

---

## SEO — Estado detallado (páginas indexables)

Cada página indexable tiene:
- `<title>` único y descriptivo ✅
- `<meta name="description">` ✅
- `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">` ✅
- `<meta name="googlebot">` ✅
- `<link rel="canonical">` apuntando a `nexo-digital.app` ✅
- `hreflang` con 3 valores: `es`, `pt-PT`, `x-default` ✅
- Open Graph: `og:type`, `og:url`, `og:title`, `og:description`, `og:locale`, `og:site_name` ✅
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description` ✅
- Schema.org JSON-LD: `WebPage` / `AboutPage` / `ContactPage` + `BreadcrumbList` ✅
- Páginas ES: `og:locale = es_ES`, `inLanguage: "es-ES"` ✅
- Páginas PT: `og:locale = pt_PT`, `inLanguage: "pt-PT"` ✅
- `sitemap.xml` con las 12 URLs + `xhtml:link` alternates ✅
- `robots.txt` con bloqueo de internos + referencia al sitemap ✅

### ⚠️ Pendiente en todas las páginas indexables
- `og:image` / `twitter:image` — necesita imagen real en el servidor (1200×630 px)

---

## Backend — send.php ✅

Gestiona el formulario de `contacto.html` (ES) y `pt/contacto.html` (PT).

**Flujo:**
1. Recibe POST con los campos + campo `lang` (`'es'` o `'pt'`)
2. Valida nombre y email — mensajes de error en el idioma correcto
3. Envía email al equipo vía SMTP Ionos (`contacto@nexo-digital.app`)
4. Envía confirmación al cliente **en su idioma** (ES o PT)
5. Notifica en Discord con etiqueta `(PT)` cuando aplica
6. Fallback a `mail()` si SMTP falla

**Bilingüe:**
- ES → asunto "Nueva consulta", cuerpo en español, links a `privacidad.html` / `aviso-legal.html`
- PT → asunto "Nova consulta (PT)", cuerpo en portugués europeo, links a `pt/privacidade.html` / `pt/aviso-legal.html`

---

## Backend — chat.php ✅

Chat widget con IA (Gemini 2.5 Flash) presente en todas las páginas.

**Flujo:**
1. Recibe JSON con `{lang, messages}` — todas las páginas PT envían `lang:'pt'`
2. Selecciona el system prompt según idioma
3. Llama a Gemini y devuelve la respuesta

**Bilingüe:**
- ES → system prompt en español, responde en español, URL `www.nexo-digital.app`
- PT → system prompt en portugués europeo (`o seu`, `connosco`, `chave-na-mão`, `quiosques`), cierre "Há mais alguma coisa em que o possa ajudar?"

---

## Identidad visual

### Logo
- **Estado actual:** Solo texto — `<span>N</span>` + "Nexo Digital" en navbar
- **⚠️ PENDIENTE:** Archivo SVG o PNG real (mínimo 400×120 px). Necesario para navbar (18 páginas), plantillas de email, `og:image` y favicon

### Paleta de colores (CSS Variables)
```css
--blue:    #1d4ed8   /* Azul principal */
--blue-h:  #1e40af   /* Hover */
--blue-s:  #2563eb   /* Secundario */
--blue-d:  #1e3a8a   /* Dark */
--violet:  #7c3aed   /* Acento violeta */
--teal:    #0d9488   /* Verde agua */
--green:   #059669   /* Verde éxito */
--amber:   #d97706   /* Ámbar / warning */
--txt:     #0f172a   /* Texto principal */
--bg:      #f5f7fb   /* Fondo */
--surf:    #ffffff   /* Superficie */
```

### Gradiente de marca
```css
linear-gradient(135deg, #1d4ed8, #7c3aed)
```

### Tipografía
- Display / Títulos: **Sora** (600, 700)
- Body / UI: **Manrope** (400, 500, 600, 700)
- Páginas legales: Inter + Poppins

---

## Multilingüe — Arquitectura

| Aspecto | ES | PT |
|---|---|---|
| Directorio | `/` (raíz) | `/pt/` |
| `lang` HTML | `es` | `pt` |
| `og:locale` | `es_ES` | `pt_PT` |
| `inLanguage` Schema | `es-ES` | `pt-PT` |
| Switcher navbar | — | `🇪🇸 ES` → `../[página].html` |
| Chat widget | Español ✅ | Portugués europeo ✅ |
| WA link texto | ES estándar | `Olá%20Nexo%20Digital%2C%20venho%20do%20chat%20do%20vosso%20website` |
| Emails al cliente | Español ✅ | Portugués europeo ✅ |
| PHP compartido | `send.php`, `chat.php` en raíz — accesibles desde `pt/` vía `../` | ✅ |

---

## Pendientes — Por orden de prioridad

### 🔴 Alta prioridad

| # | Tarea | Detalle |
|---|---|---|
| 1 | **Logo** | Diseñar/subir SVG o PNG del logo real. Actualizar navbar en las 18 páginas y plantillas de email |
| 2 | **og:image / twitter:image** | Crear imagen de portada 1200×630 px. Añadir `<meta property="og:image">` en las 12 páginas indexables |
| 3 | **Favicon** | Subir `favicon.ico` y `favicon.png` al servidor. Añadir `<link rel="icon">` en las 18 páginas |

### 🟡 Media prioridad

| # | Tarea | Detalle |
|---|---|---|
| 4 | **Google Search Console** | Añadir `<meta name="google-site-verification">` en `index.html` cuando se tenga el código. Luego enviar `sitemap.xml` desde GSC |
| 5 | **Google Tag Manager** | Añadir snippet GTM (head + noscript body) en las 18 páginas cuando se tenga el GTM-ID |

### 🟢 Mejoras opcionales

| # | Tarea | Detalle |
|---|---|---|
| 6 | **React producción** | Cambiar `react.development.js` → `react.production.min.js` en todas las páginas (mejora Core Web Vitals) |
| 7 | **Integrity SRI** | Algunas páginas tienen `integrity=sha384-...` en scripts CDN y otras no — unificar |

---

## Información de acceso y contacto

| Campo | Valor |
|---|---|
| Dominio | `nexo-digital.app` |
| Email | `contacto@nexo-digital.app` |
| SMTP Host | `smtp.ionos.es` · Puerto 465 · SMTPS |
| WhatsApp | +34 689 135 159 |
| Discord Webhook | Configurado en `send.php` |
| Gemini API | Configurada en `chat.php` (modelo: gemini-2.5-flash) |
| Equipo | Enoque Mendes · Abner · Elias |
| Ubicación | Sabadell, Barcelona · España · Portugal |

---

## Historial de etapas completadas

1. ✅ Estructura base HTML + React UMD (sin build step)
2. ✅ Diseño visual completo — paleta, tipografía, componentes
3. ✅ 9 páginas ES (home, secciones, legales)
4. ✅ Chat widget con Gemini IA (`chat.php`)
5. ✅ Formulario de contacto con SMTP + Discord (`send.php`)
6. ✅ `process-form.php` eliminado — era código legado sustituido por `send.php`
7. ✅ Corrección de dominio: `nexo.chatopsmaster.com` → `nexo-digital.app` en todas las páginas
8. ✅ 9 páginas PT en `/pt/` — traducción completa a portugués europeo
9. ✅ SEO completo en las 12 páginas indexables: canonical, hreflang, robots, OG, Twitter, Schema.org + BreadcrumbList
10. ✅ Language switcher en navbar PT (`🇪🇸 ES`)
11. ✅ Emails bilingües — `send.php` envía confirmación en PT a visitantes de `/pt/`
12. ✅ Chat bilingüe — `chat.php` responde en portugués europeo a visitantes PT; URL del sistema corregida
13. ✅ `sitemap.xml` — 12 URLs indexables con `xhtml:link` hreflang para Google
14. ✅ `robots.txt` — bloqueo de directorios internos + referencia al sitemap
