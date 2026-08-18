const _nexoChat = async (_body) => {
  const _urls = ['/api/chat', '/chat.php'];
  for (const _u of _urls) {
    try {
      const _r = await fetch(_u, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(_body) });
      if (_r.ok) { const _d = await _r.json(); if (_d && _d.reply) return _d.reply; }
    } catch (_e) {}
  }
  return null;
};

const useReveal = () => {
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('on');
    }), {
      threshold: .1,
      rootMargin: '0px 0px -40px 0px'
    });
    document.querySelectorAll('.rev').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};
const IconCheck = () => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "22 4 12 14.01 9 11.01"
}));
const Logo = () => /*#__PURE__*/React.createElement("a", {
  href: "index.html",
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none'
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "68",
  height: "38",
  viewBox: "-5 -5 230 130",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "ndg",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "100%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#1A56DB"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#00F0FF"
}))), /*#__PURE__*/React.createElement("path", {
  d: "M0 120 V0 L60 80 V0 H90 V120 H60 L30 40 V120 Z",
  fill: "url(#ndg)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M110 0 H150 C200 0 220 30 220 60 C220 90 200 120 150 120 H110 Z M140 30 V90 H150 C180 90 190 75 190 60 C190 45 180 30 150 30 Z",
  fill: "url(#ndg)"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--disp)',
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: '.06em',
    color: 'var(--txt)'
  }
}, "Nexo Digital"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: '8.5px',
    textTransform: 'uppercase',
    letterSpacing: '.22em',
    color: 'var(--txt-m)'
  }
}, "Estudio Tech Premium")));
const Navbar = () => {
  const [sc, setSc] = React.useState(false);
  const [op, setOp] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setSc(window.scrollY > 14);
    fn();
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [{
    href: 'servicios.html',
    label: 'Servicios'
  }, {
    href: 'proceso.html',
    label: 'Proceso'
  }, {
    href: 'clientes.html',
    label: 'Clientes'
  }, {
    href: 'equipo.html',
    label: 'Equipo'
  }, {
    href: 'contacto.html',
    label: 'Contacto'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      marginTop: 14,
      borderRadius: 28,
      border: `1px solid ${sc ? 'var(--bdr)' : 'transparent'}`,
      background: sc ? 'rgba(255,255,255,0.97)' : 'transparent',
      boxShadow: sc ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
      backdropFilter: sc ? 'blur(28px)' : 'none',
      transition: 'all .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      padding: '11px 22px'
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    },
    className: "dnav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      color: l.href === 'servicios.html' ? 'var(--txt)' : 'var(--txt-s)',
      textDecoration: 'none',
      transition: 'color .2s'
    },
    onMouseEnter: e => e.target.style.color = 'var(--txt)',
    onMouseLeave: e => e.target.style.color = l.href === 'servicios.html' ? 'var(--txt)' : 'var(--txt-s)'
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "dnav",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      borderRadius: 20,
      border: '1px solid rgba(29,78,216,0.18)',
      padding: '3px 4px',
      background: 'rgba(29,78,216,0.05)',
      fontSize: 11.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3px 8px',
      borderRadius: 16,
      background: 'var(--blue)',
      color: '#fff'
    }
  }, "ES"), /*#__PURE__*/React.createElement("a", {
    href: "pt/servicos.html",
    onClick: function () {
      try {
        localStorage.setItem('nd-lang', 'pt');
      } catch (e) {}
    },
    style: {
      padding: '3px 8px',
      borderRadius: 16,
      color: 'var(--txt-s)',
      textDecoration: 'none'
    }
  }, "PT")), /*#__PURE__*/React.createElement("a", {
    href: "contacto.html",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 9999,
      background: 'var(--blue)',
      padding: '9px 20px',
      fontSize: 13.5,
      fontWeight: 600,
      color: '#fff',
      textDecoration: 'none',
      transition: 'all .2s'
    }
  }, "Empezar \u2192")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOp(!op),
    style: {
      display: 'none',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: '1px solid var(--bdr)',
      background: 'rgba(255,255,255,0.93)',
      color: 'var(--txt)',
      cursor: 'pointer',
      fontSize: 17
    },
    className: "mbtn"
  }, op ? '✕' : '☰')))), op && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 82,
      left: 0,
      right: 0,
      zIndex: 99,
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      borderRadius: 22,
      border: '1px solid var(--bdr)',
      background: 'rgba(255,255,255,0.98)',
      padding: 20,
      boxShadow: 'var(--glow-s)',
      backdropFilter: 'blur(28px)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: () => setOp(false),
    style: {
      display: 'block',
      padding: '11px 14px',
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 500,
      color: l.href === 'servicios.html' ? 'var(--txt)' : 'var(--txt-s)',
      textDecoration: 'none',
      transition: 'all .2s'
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      borderRadius: 20,
      border: '1px solid rgba(29,78,216,0.18)',
      padding: '3px 4px',
      background: 'rgba(29,78,216,0.05)',
      fontSize: 12,
      fontWeight: 600,
      margin: '8px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 14px',
      borderRadius: 16,
      background: 'var(--blue)',
      color: '#fff'
    }
  }, "ES"), /*#__PURE__*/React.createElement("a", {
    href: "pt/servicos.html",
    onClick: function () {
      try {
        localStorage.setItem('nd-lang', 'pt');
      } catch (e) {}
    },
    style: {
      padding: '4px 14px',
      borderRadius: 16,
      color: 'var(--txt-s)',
      textDecoration: 'none'
    }
  }, "PT")), /*#__PURE__*/React.createElement("a", {
    href: "contacto.html",
    onClick: () => setOp(false),
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9999,
      background: 'var(--blue)',
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 600,
      color: '#fff',
      textDecoration: 'none'
    }
  }, "Empezar \u2192"))), /*#__PURE__*/React.createElement("style", null, `.dnav{display:flex!important;align-items:center;gap:26px;} @media(max-width:1024px){.dnav{display:none!important;}.mbtn{display:inline-flex!important;}} @media(min-width:1025px){.mbtn{display:none!important;}}`));
};
const PageHero = ({
  eyebrow,
  eyebrowColor,
  title,
  desc
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    paddingTop: 'clamp(120px,14vw,160px)',
    paddingBottom: 'clamp(40px,7vw,64px)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-bg"
}), /*#__PURE__*/React.createElement("div", {
  className: "orb orb1"
}), /*#__PURE__*/React.createElement("div", {
  className: "orb orb3"
}), /*#__PURE__*/React.createElement("div", {
  className: "wrap",
  style: {
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ha1",
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "index.html",
  style: {
    fontSize: 12,
    color: 'var(--txt-m)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4
  }
}, "\u2190 Inicio"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--bdr-s)'
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  className: "ew",
  style: eyebrowColor ? {
    color: eyebrowColor,
    borderColor: `${eyebrowColor}40`
  } : {}
}, /*#__PURE__*/React.createElement("span", {
  className: "dot"
}), eyebrow)), /*#__PURE__*/React.createElement("h1", {
  className: "h1 ha2",
  style: {
    marginTop: 20,
    maxWidth: '46rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}, title), desc && /*#__PURE__*/React.createElement("p", {
  className: "ha3",
  style: {
    marginTop: 16,
    fontSize: 'clamp(14px,1.9vw,17px)',
    lineHeight: 2,
    color: 'var(--txt-s)',
    maxWidth: '36rem',
    margin: '16px auto 0'
  }
}, desc)));
const SaasSection = () => {
  const P = [{
    st: 'Disponible',
    sc: 'green',
    tag: 'SaaS',
    title: 'Nexo Invoicer',
    desc: 'Facturación moderna para operaciones más fluidas, control financiero y emisión sin fricción.',
    feats: ['Facturas y recibos digitales', 'Gestión fiscal organizada', 'Historial e informes'],
    cta: 'Solicitar demo'
  }, {
    st: 'Beta privada',
    sc: 'blue',
    tag: 'SaaS',
    title: 'SpeakEasily',
    desc: 'Plataforma orientada a comunicación y experiencia digital con foco en simplicidad y crecimiento.',
    feats: ['Flujos intuitivos', 'Experiencia mobile-first', 'Lista para SaaS beta privada'],
    cta: 'Unirme a la lista'
  }, {
    st: 'En expansión',
    sc: 'orange',
    tag: 'SaaS',
    title: 'Nexo CRM & WhatsApp',
    desc: 'Relación comercial y atención centralizadas con automatización y contexto en tiempo real.',
    feats: ['Pipeline comercial visual', 'WhatsApp integrado', 'Automatizaciones de seguimiento'],
    cta: 'Agendar reunión'
  }, {
    st: 'Disponible',
    sc: 'green',
    tag: 'SaaS',
    title: 'Nexo SEO Audit',
    desc: 'Diagnóstico técnico y estratégico para detectar bloqueos, oportunidades y prioridades SEO.',
    feats: ['Análisis técnico completo', 'Prioridades accionables', 'Hoja de ruta de mejora'],
    cta: 'Solicitar auditoría'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew",
    style: {
      color: 'var(--emerald-s)',
      borderColor: 'rgba(52,211,153,0.2)'
    }
  }, "Productos SaaS"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Plataformas propias dise\xF1adas para escalar."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Software desarrollado por Nexo Digital para acelerar operaciones, ventas y presencia online.")), /*#__PURE__*/React.createElement("div", {
    className: "g2"
  }, P.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    className: `card rev d${i % 4 + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `sb ${p.sc}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-dot"
  }), p.st), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    className: "card-h"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "card-p"
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    className: "fl"
  }, p.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "fi"
  }, /*#__PURE__*/React.createElement(IconCheck, null), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    className: "card-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "contacto.html"
  }, p.cta)))))));
};
const ServicesSection = () => {
  const S = [{
    icon: '🌐',
    title: 'Landing Page / Página Web',
    desc: 'Diseño y desarrollo web premium orientado a conversión, con SEO técnico desde el primer día.',
    feats: ['SEO técnico y posicionamiento', 'Diseño mobile-first', 'Core Web Vitals optimizados'],
    color: 'rgba(26,86,219,0.12)',
    borderColor: 'rgba(26,86,219,0.25)'
  }, {
    icon: '🛒',
    title: 'Tienda Online',
    desc: 'E-commerce completo con gestión de productos, pagos integrados y experiencia de compra optimizada.',
    feats: ['Catálogo y pasarela de pago', 'Gestión de pedidos e inventario', 'Integración con marketplaces'],
    color: 'rgba(124,58,237,0.12)',
    borderColor: 'rgba(124,58,237,0.25)'
  }, {
    icon: '🖥️',
    title: 'TPV & Kioscos Digitales',
    desc: 'Software TPV e infraestructura de kioscos para pequeños y medianos negocios. Llave en mano.',
    feats: ['Software TPV personalizado', 'Kioscos de autoservicio', 'Soporte y mantenimiento incluido'],
    color: 'rgba(13,148,136,0.12)',
    borderColor: 'rgba(13,148,136,0.25)'
  }, {
    icon: '⚙️',
    title: 'Sistemas a Medida',
    desc: 'ERP, CRM, dashboards y portales internos diseñados para la operación real del negocio.',
    feats: ['ERP y CRM personalizados', 'Integraciones vía API REST', 'Arquitectura escalable'],
    color: 'rgba(5,150,105,0.12)',
    borderColor: 'rgba(5,150,105,0.25)'
  }, {
    icon: '📣',
    title: 'Tráfico Pago / Anuncios',
    desc: 'Campañas Google Ads y Meta Ads orientadas a resultados medibles.',
    feats: ['Google Ads y Meta Ads', 'Segmentación geográfica y por público', 'Informes y optimización continua'],
    color: 'rgba(217,119,6,0.12)',
    borderColor: 'rgba(217,119,6,0.25)'
  }, {
    icon: '🔒',
    title: 'Ciberseguridad & Infraestructura',
    desc: 'Auditorías de seguridad, hardening, SSL, firewall Cloudflare y monitorización activa 24/7.',
    feats: ['Auditoría de seguridad web', 'Firewall y protección DDoS', 'Backups automáticos diarios'],
    color: 'rgba(239,68,68,0.08)',
    borderColor: 'rgba(239,68,68,0.22)'
  }, {
    icon: '📱',
    title: 'Apps Móviles (Android & iOS)',
    desc: 'Aplicaciones móviles nativas e híbridas para Android e iOS: publicamos tu app en Google Play y App Store.',
    feats: ['Android & iOS (React Native / Flutter)', 'Publicación en Google Play y App Store', 'Notificaciones push y offline'],
    color: 'rgba(3,105,161,0.12)',
    borderColor: 'rgba(3,105,161,0.25)'
  }, {
    icon: '☁️',
    title: 'Aplicaciones SaaS a medida',
    desc: 'Software como servicio por sectores: restaurantes, clínicas, academias, gimnasios y más. Multiusuario y escalable.',
    feats: ['SaaS por sector (restaurante, clínica…)', 'Suscripciones y gestión de usuarios', 'Panel de administración'],
    color: 'rgba(124,58,237,0.12)',
    borderColor: 'rgba(124,58,237,0.25)'
  }, {
    icon: '🤝',
    title: 'CRMs a medida',
    desc: 'Sistemas de relación con clientes personalizados para tu operación: ventas, delivery, tiendas y servicios.',
    feats: ['Pipeline y seguimiento comercial', 'Integración con WhatsApp', 'Reportes y automatización'],
    color: 'rgba(13,148,136,0.12)',
    borderColor: 'rgba(13,148,136,0.25)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec-lg",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.6),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "Servicios de desarrollo"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Lo que construimos para tu empresa."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Desde webs y tiendas online hasta sistemas internos, TPV y seguridad. Todo con criterio t\xE9cnico y foco en negocio.")), /*#__PURE__*/React.createElement("div", {
    className: "g3"
  }, S.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: `card rev d${i % 4 + 1}`,
    style: {
      borderColor: s.borderColor,
      background: `linear-gradient(160deg,${s.color},rgba(255,255,255,0.96))`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      marginBottom: 12
    }
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "card-h",
    style: {
      fontSize: 'clamp(15px,2vw,19px)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "card-p"
  }, s.desc), /*#__PURE__*/React.createElement("ul", {
    className: "fl"
  }, s.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "fi"
  }, /*#__PURE__*/React.createElement(IconCheck, null), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    className: "card-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "contacto.html"
  }, "Consultar \u2192")))))));
};
const AppsCatalogSection = () => {
  const groups = [{
    icon: '🛍️',
    title: 'TPVs por sector',
    count: '11',
    items: ['Cafetería', 'Hostelería', 'Fast Food', 'Panadería', 'Peluquería', 'Estética & SPA', 'Minimarket', 'Zapatería', 'Joyería', 'Papelería', 'Bares']
  }, {
    icon: '☁️',
    title: 'SaaS multinegocio',
    count: '15',
    items: ['Restaurante', 'Clínica', 'Odontología', 'Gimnasio', 'Colegio', 'Academia', 'Ferretería', 'Minimarket', 'Hospedaje', 'Taller Automotriz', 'Taller Textil', 'Tienda de Moda', 'Botica', 'Citas Médicas', 'Préstamos']
  }, {
    icon: '🏢',
    title: 'Gestión & ERPs',
    count: '10+',
    items: ['Almacenes', 'Gestor documental', 'Contabilidad', 'Consultorio médico', 'Asistencia digital', 'Encomiendas', 'Planilla', 'Servicio técnico', 'ERP educativo', 'ERP farmacia']
  }, {
    icon: '🤝',
    title: 'CRMs a medida',
    count: '8',
    items: ['Tienda online', 'Delivery', 'Odontología', 'Agencia de viajes', 'Colegio', 'Condominio', 'Ventas', 'Tienda de móviles']
  }];
  const extras = [{
    icon: '📊',
    title: 'Dashboard todo-en-uno',
    desc: 'Gastos, CRM, tareas, documentos y organización.',
    tag: 'Suite'
  }, {
    icon: '📱',
    title: 'Apps móviles validadas',
    desc: 'Android & iOS publicadas en Play y App Store.',
    tag: 'Mobile'
  }, {
    icon: '🎮',
    title: 'Juegos & Gamificación',
    desc: 'Juegos web y móviles, casuales y arcade.',
    tag: 'Web · Móvil'
  }, {
    icon: '🧠',
    title: 'IA & Agentes',
    desc: 'Chatbots IA y agentes autónomos como Luna.',
    tag: 'IA propia'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "apps",
    className: "sec",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.6),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "Aplicaciones a medida"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Software hecho por sectores, no plantillas."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Un cat\xE1logo propio con m\xE1s de 88 soluciones: TPV, SaaS, ERPs, CRMs y sistemas de gesti\xF3n adaptados al d\xEDa a d\xEDa de cada negocio.")), /*#__PURE__*/React.createElement("div", {
    className: "g4"
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    className: `card rev d${i + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26
    }
  }, g.icon), /*#__PURE__*/React.createElement("span", {
    className: "stat-v",
    style: {
      fontSize: 'clamp(1.5rem,3vw,2.1rem)'
    }
  }, g.count)), /*#__PURE__*/React.createElement("div", {
    className: "card-h",
    style: {
      fontSize: 'clamp(15px,2vw,18px)'
    }
  }, g.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, g.items.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "cpill",
    style: {
      fontSize: 11,
      padding: '5px 11px'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "card-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "contacto.html"
  }, "Quiero una app as\xED \u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "apps-strip rev"
  }, extras.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.title,
    className: "apps-strip-i"
  }, /*#__PURE__*/React.createElement("span", null, x.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", null, x.title), /*#__PURE__*/React.createElement("p", null, x.desc)), /*#__PURE__*/React.createElement("span", {
    className: "tag2"
  }, x.tag)))), /*#__PURE__*/React.createElement("div", {
    className: "rev",
    style: {
      marginTop: 24,
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--txt-s)'
    }
  }, "+88 aplicaciones en cat\xE1logo \xB7 Apps m\xF3viles validadas \xB7 Juegos y gamificaci\xF3n \xB7 Entrega digital \xB7 Multidioma (es \xB7 pt \xB7 en \xB7 ca) \xB7 Pago flexible")));
};
const CtaSection = () => /*#__PURE__*/React.createElement("section", {
  className: "sec"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    borderRadius: 24,
    border: '1px solid rgba(52,211,153,0.18)',
    background: 'linear-gradient(135deg,rgba(5,150,105,0.07),rgba(26,86,219,0.07),rgba(124,58,237,0.05))',
    padding: 'clamp(32px,5vw,52px)',
    textAlign: 'center'
  },
  className: "rev"
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: 'var(--disp)',
    fontSize: 'clamp(1.7rem,3.5vw,2.5rem)',
    fontWeight: 600,
    letterSpacing: '-.015em',
    color: 'var(--txt)'
  }
}, "\xBFQu\xE9 soluci\xF3n necesita tu negocio?"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 'clamp(14px,1.9vw,17px)',
    lineHeight: 2,
    color: 'var(--txt-s)',
    maxWidth: '36rem',
    margin: '14px auto 0'
  }
}, "Cu\xE9ntanos tu reto. En 24h te decimos qu\xE9 podemos hacer y c\xF3mo."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    display: 'flex',
    gap: 14,
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "contacto.html",
  className: "btn btn-p"
}, "Enviar consulta \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:contacto@nexo-digital.app",
  className: "btn btn-teal"
}, "\u2709 Escribir por email")))));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement("div", {
  className: "fg3"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 13.5,
    lineHeight: 1.85,
    color: 'var(--txt-s)',
    maxWidth: 250
  }
}, "Soluciones digitales con dise\xF1o premium, claridad t\xE9cnica y foco en negocio.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "P\xE1ginas"), [['servicios.html', 'Servicios'], ['proceso.html', 'Proceso'], ['clientes.html', 'Clientes'], ['equipo.html', 'Equipo']].map(([h, l]) => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: h,
  className: "flk"
}, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "Servicios"), ['Landing Page / Web', 'Tienda Online', 'TPV & Kioscos', 'Sistemas a Medida', 'Ciberseguridad'].map(l => /*#__PURE__*/React.createElement("span", {
  key: l,
  className: "flk",
  style: {
    cursor: 'default'
  }
}, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "Contacto"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:contacto@nexo-digital.app",
  className: "flk"
}, "contacto@nexo-digital.app"), /*#__PURE__*/React.createElement("a", {
  href: "contacto.html",
  className: "flk",
  style: {
    marginTop: 12
  }
}, "Hablar con nosotros \u2192"))), /*#__PURE__*/React.createElement("div", {
  className: "fbot"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Nexo Digital"), /*#__PURE__*/React.createElement("span", null, "Todos los derechos reservados"))));
const StickyBar = () => {
  const [show, setShow] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setShow(window.scrollY > 400 && !dismissed);
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, [dismissed]);
  return /*#__PURE__*/React.createElement("div", {
    className: `sticky-bar${show ? ' show' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sticky-txt"
  }, /*#__PURE__*/React.createElement("strong", null, "\xBFNecesitas un servicio a medida?"), " Cu\xE9ntanos tu proyecto."), /*#__PURE__*/React.createElement("a", {
    href: "contacto.html",
    className: "btn btn-p",
    style: {
      padding: '9px 18px',
      fontSize: 13
    }
  }, "Consulta gratuita \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "sticky-x",
    onClick: () => {
      setDismissed(true);
      setShow(false);
    }
  }, "\u2715")));
};
const ChatWidget = () => {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([]);
  const [inp, setInp] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [inited, setInited] = React.useState(false);
  const endRef = React.useRef(null);
  React.useEffect(() => {
    if (!document.getElementById('cw-anim')) {
      const s = document.createElement('style');
      s.id = 'cw-anim';
      s.textContent = '@keyframes cwDot{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-4px);opacity:1}}';
      document.head.appendChild(s);
    }
  }, []);
  React.useEffect(() => {
    if (open && !inited) {
      setInited(true);
      setMsgs([{
        r: 'b',
        t: 'Hola! Soy el asistente de Nexo Digital. Puedo ayudarte con info sobre nuestros servicios, precios o encaminarte con el equipo.\n\nEn que puedo ayudarte?'
      }]);
    }
    if (open) setTimeout(() => endRef.current && endRef.current.scrollIntoView({
      behavior: 'smooth'
    }), 60);
  }, [open]);
  React.useEffect(() => {
    endRef.current && endRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }, [msgs, busy]);
  const waLink = 'https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20vengo%20del%20chat%20de%20vuestra%20web';
  const localAnswer = txt => {
    try {
      const stops = ['para', 'como', 'que', 'los', 'las', 'una', 'unos', 'unas', 'con', 'por', 'del', 'al', 'el', 'la', 'de', 'y', 'a', 'en', 'es', 'se', 'su', 'sus', 'este', 'esta', 'estos', 'quiero', 'quieres', 'cuanto', 'cual', 'puede', 'puedes', 'hacer', 'hace', 'seria', 'estaria', 'tener', 'necesito', 'queria', 'dime', 'informacion'];
      const words = txt.toLowerCase().replace(/[^a-záéíóúüñç0-9\s]/gi, ' ').split(/\s+/).filter(w => w.length > 3 && stops.indexOf(w) === -1);
      const body = document.body && document.body.innerText ? document.body.innerText.replace(/\s+/g, ' ') : '';
      if (!words.length || !body) return null;
      const paras = body.split(/(?<=[.!?])\s+/).filter(p => p.length > 30 && p.length < 420);
      let best = null,
        bestScore = 0;
      for (const p of paras) {
        const low = p.toLowerCase();
        let score = 0;
        for (const w of words) if (low.indexOf(w) !== -1) score++;
        if (score > bestScore) {
          bestScore = score;
          best = p;
        }
      }
      if (best && bestScore >= 1) {
        const clean = best.trim().replace(/^\s*[•\-\*#]+\s*/, '');
        return 'He buscado en la web y esto es lo que he encontrado:\n\n' + clean.slice(0, 320) + '\n\n¿Te ayudo con algo más, o prefieres que te pase al equipo por WhatsApp?';
      }
      return null;
    } catch (e) {
      return null;
    }
  };
  const send = async text => {
    const txt = (text || inp).trim();
    if (!txt || busy) return;
    setInp('');
    const history = [...msgs, {
      r: 'u',
      t: txt
    }];
    setMsgs(history);
    setBusy(true);
    const fallback = localAnswer(txt) || 'Lo siento, no he podido conectar con el servicio y no tengo esa info en la página. Escríbenos por WhatsApp o a contacto@nexo-digital.app y te respondemos en 24h.';
    try {
      const data = await _nexoChat({
        messages: history.map(m => ({
          role: m.r === 'u' ? 'user' : 'assistant',
          content: m.t
        }))
      }).then(_r => _r ? { reply: _r } : {});
      setMsgs(function (h) {
        return [...h, {
          r: 'b',
          t: data.reply || fallback
        }];
      });
    } catch (e) {
      setMsgs(function (h) {
        return [...h, {
          r: 'b',
          t: fallback
        }];
      });
    }
    setBusy(false);
  };
  const chips = ['Que servicios ofreceis?', 'Cuanto cuesta una web?', 'Cuanto tarda el proyecto?', 'Quiero hablar con alguien'];
  const Bubble = function (props) {
    const m = props.m;
    const isBot = m.r === 'b';
    const hasWa = isBot && (m.t.toLowerCase().indexOf('whatsapp') !== -1 || m.t.toLowerCase().indexOf('contactar') !== -1 || m.t.toLowerCase().indexOf('escribi') !== -1);
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        marginBottom: 8
      }
    }, React.createElement('div', {
      style: {
        maxWidth: '83%',
        padding: '9px 13px',
        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
        background: isBot ? '#f0f4ff' : 'linear-gradient(135deg,#1a56db,#7c3aed)',
        border: isBot ? '1px solid rgba(29,78,216,0.12)' : 'none',
        fontSize: 13,
        lineHeight: 1.65,
        color: isBot ? '#1e293b' : '#fff',
        whiteSpace: 'pre-line'
      }
    }, m.t, hasWa && React.createElement('a', {
      href: waLink,
      target: '_blank',
      rel: 'noreferrer',
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        marginTop: 9,
        padding: '5px 10px',
        borderRadius: 8,
        textDecoration: 'none',
        background: 'rgba(37,211,102,0.15)',
        border: '1px solid rgba(37,211,102,0.3)',
        color: '#25d366',
        fontSize: 11.5,
        fontWeight: 600
      }
    }, '💬 Abrir WhatsApp')));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 90,
      left: 24,
      width: 'min(360px,calc(100vw - 48px))',
      maxHeight: 'min(500px,calc(100vh - 110px))',
      background: 'linear-gradient(160deg,rgba(255,255,255,0.98),rgba(255,255,255,0.99))',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      border: '1px solid rgba(0,0,0,0.09)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.05)',
      zIndex: 9998,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      background: 'linear-gradient(135deg,#1d4ed8,#1e3a8a)',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.15)',
      border: '1px solid rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 17,
      flexShrink: 0
    }
  }, "\uD83E\uDD16"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: '#ffffff'
    }
  }, "Nexo Digital"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: '#4ade80',
      boxShadow: '0 0 5px #4ade80'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: 'rgba(255,255,255,0.8)',
      fontWeight: 500
    }
  }, "En l\xEDnea"))), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setOpen(false);
    },
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: 'rgba(255,255,255,0.8)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '14px 12px 6px',
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(0,0,0,0.1) transparent'
    }
  }, msgs.map(function (m, i) {
    return React.createElement(Bubble, {
      key: i,
      m: m
    });
  }), busy && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: '4px 16px 16px 16px',
      background: '#f0f4ff',
      border: '1px solid rgba(29,78,216,0.12)',
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, [0, 1, 2].map(function (i) {
    return React.createElement('div', {
      key: i,
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#1d4ed8',
        opacity: 0.5,
        animation: 'cwDot 1.2s ease-in-out infinite',
        animationDelay: i * 0.18 + 's'
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    ref: endRef
  })), msgs.length <= 1 && !busy && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 12px 8px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5
    }
  }, chips.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: function () {
        send(c);
      },
      style: {
        fontSize: 11.5,
        padding: '4px 9px',
        borderRadius: 999,
        border: '1px solid rgba(29,78,216,0.18)',
        background: 'rgba(29,78,216,0.06)',
        color: '#1d4ed8',
        cursor: 'pointer'
      }
    }, c);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      display: 'flex',
      gap: 7,
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: inp,
    onChange: function (e) {
      setInp(e.target.value);
    },
    onKeyDown: function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    placeholder: "Escribe tu pregunta...",
    style: {
      flex: 1,
      background: '#f0f4ff',
      border: '1px solid rgba(29,78,216,0.15)',
      borderRadius: 10,
      padding: '8px 11px',
      color: '#0f172a',
      fontSize: 12.5,
      outline: 'none',
      fontFamily: 'inherit',
      caretColor: '#1d4ed8'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      send();
    },
    disabled: busy || !inp.trim(),
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      flexShrink: 0,
      background: busy || !inp.trim() ? '#e2e8f0' : 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
      border: 'none',
      cursor: busy || !inp.trim() ? 'default' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
      color: busy || !inp.trim() ? '#94a3b8' : '#fff'
    }
  }, "\u27A4"))), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setOpen(function (o) {
        return !o;
      });
    },
    "aria-label": "Chat Nexo Digital",
    style: {
      position: 'fixed',
      bottom: 24,
      left: 24,
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      zIndex: 9999,
      background: 'linear-gradient(135deg,#1d4ed8,#1e40af)',
      boxShadow: open ? '0 0 0 3px rgba(124,58,237,0.35),0 6px 20px rgba(124,58,237,0.45)' : '0 4px 16px rgba(26,86,219,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .25s',
      transform: open ? 'scale(0.93)' : 'scale(1)',
      flexShrink: 0
    }
  }, open ? React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 2.5,
    strokeLinecap: 'round'
  }, React.createElement('line', {
    x1: 18,
    y1: 6,
    x2: 6,
    y2: 18
  }), React.createElement('line', {
    x1: 6,
    y1: 6,
    x2: 18,
    y2: 18
  })) : React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('rect', {
    x: 3,
    y: 8,
    width: 18,
    height: 12,
    rx: 3
  }), React.createElement('path', {
    d: 'M8 8V6a4 4 0 018 0v2'
  }), React.createElement('circle', {
    cx: 9,
    cy: 14,
    r: 1.2,
    fill: '#fff',
    stroke: 'none'
  }), React.createElement('circle', {
    cx: 15,
    cy: 14,
    r: 1.2,
    fill: '#fff',
    stroke: 'none'
  }), React.createElement('path', {
    d: 'M9.5 17.5c.7.7 3.3.7 5 0'
  }), React.createElement('line', {
    x1: 12,
    y1: 3,
    x2: 12,
    y2: 8
  }))));
};
const ScrollFab = () => {
  const [vis, setVis] = React.useState(false);
  const [atBottom, setAtBottom] = React.useState(false);
  React.useEffect(() => {
    const fn = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVis(scrolled > 320);
      setAtBottom(total > 0 && scrolled / total > 0.85);
    };
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  const base = {
    position: 'fixed',
    right: 24,
    zIndex: 198,
    width: 44,
    height: 44,
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.25)',
    background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all .25s cubic-bezier(.16,1,.3,1)',
    opacity: vis ? 1 : 0,
    transform: vis ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(10px)',
    pointerEvents: vis ? 'all' : 'none',
    boxShadow: '0 4px 20px rgba(29,78,216,0.45)'
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    style: {
      ...base,
      bottom: 148
    },
    "aria-label": atBottom ? 'Volver arriba' : 'Ir abajo',
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(26,86,219,0.5)';
      e.currentTarget.style.borderColor = 'rgba(96,165,250,0.4)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'linear-gradient(135deg,#1d4ed8,#7c3aed)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transition: 'transform .25s',
      transform: atBottom ? 'rotate(180deg)' : 'rotate(0deg)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 15l-6-6-6 6"
  })));
};
const WaFab = () => /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20me%20interesa%20vuestros%20servicios",
  target: "_blank",
  rel: "noreferrer",
  className: "wa-fab",
  "aria-label": "WhatsApp"
}, /*#__PURE__*/React.createElement("svg", {
  width: "28",
  height: "28",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
})));
const App = () => {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Servicios",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Todo lo que construimos ", /*#__PURE__*/React.createElement("em", null, "para tu empresa.")),
    desc: "Productos SaaS propios y servicios de desarrollo a medida para empresas de cualquier sector y pa\xEDs."
  }), /*#__PURE__*/React.createElement(ServicesSection, null), /*#__PURE__*/React.createElement(AppsCatalogSection, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(SaasSection, null), /*#__PURE__*/React.createElement(CtaSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyBar, null), /*#__PURE__*/React.createElement(ChatWidget, null), /*#__PURE__*/React.createElement(ScrollFab, null), /*#__PURE__*/React.createElement(WaFab, null));
};
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
