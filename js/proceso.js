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
const IconArrow = ({
  open
}) => /*#__PURE__*/React.createElement("svg", {
  className: `faq-arrow${open ? ' open' : ''}`,
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
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
      color: l.href === 'proceso.html' ? 'var(--txt)' : 'var(--txt-s)',
      textDecoration: 'none',
      transition: 'color .2s'
    },
    onMouseEnter: e => e.target.style.color = 'var(--txt)',
    onMouseLeave: e => e.target.style.color = l.href === 'proceso.html' ? 'var(--txt)' : 'var(--txt-s)'
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
    href: "pt/processo.html",
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
      textDecoration: 'none'
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
      color: l.href === 'proceso.html' ? 'var(--txt)' : 'var(--txt-s)',
      textDecoration: 'none'
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
    href: "pt/processo.html",
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
const PageHero = () => /*#__PURE__*/React.createElement("section", {
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
    color: 'var(--txt-m)'
  }
}, "\u2190 Inicio"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'rgba(255,255,255,0.2)'
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  className: "ew",
  style: {
    color: 'var(--emerald-s)',
    borderColor: 'rgba(52,211,153,0.3)'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "dot"
}), "Nuestro proceso")), /*#__PURE__*/React.createElement("h1", {
  className: "h1 ha2",
  style: {
    marginTop: 20,
    maxWidth: '44rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}, "De la idea al lanzamiento, ", /*#__PURE__*/React.createElement("em", null, "sin fricci\xF3n.")), /*#__PURE__*/React.createElement("p", {
  className: "ha3",
  style: {
    marginTop: 16,
    fontSize: 'clamp(14px,1.9vw,17px)',
    lineHeight: 2,
    color: 'var(--txt-s)',
    maxWidth: '36rem',
    margin: '16px auto 0'
  }
}, "Un proceso claro con comunicaci\xF3n directa en cada fase. Sin sorpresas de precio ni de plazo.")));
const ProcessSection = () => {
  const steps = [{
    n: '01',
    color: 'linear-gradient(135deg,#059669,#0d9488)',
    icon: '💬',
    title: 'Consulta gratuita',
    desc: 'Cuéntanos tu proyecto o problema. Te escuchamos sin compromiso y te respondemos en menos de 24h con una valoración honesta de si podemos ayudarte y cómo.',
    detail: ['Sin coste ni compromiso', 'Respuesta en menos de 24h', 'Valoración técnica honesta', 'Reunión de 30 minutos por videollamada']
  }, {
    n: '02',
    color: 'linear-gradient(135deg,#7c3aed,#1a56db)',
    icon: '📋',
    title: 'Propuesta técnica',
    desc: 'En 48h recibes un documento con alcance exacto, tecnología elegida, hitos del proyecto, plazos y precio cerrado. Nada queda al aire.',
    detail: ['Alcance detallado y revisable', 'Tecnología justificada', 'Hitos y calendario visual', 'Precio cerrado sin sorpresas']
  }, {
    n: '03',
    color: 'linear-gradient(135deg,#1a56db,#0d9488)',
    icon: '⚙️',
    title: 'Desarrollo iterativo',
    desc: 'Construimos en sprints de 1-2 semanas. En cada entrega puedes ver el avance, dar feedback y ajustar sin coste. Tienes acceso directo al equipo.',
    detail: ['Sprints de 1-2 semanas', 'Acceso a entregables reales', 'Canal directo con el equipo', 'Feedback incorporado al sprint siguiente']
  }, {
    n: '04',
    color: 'linear-gradient(135deg,#d97706,#059669)',
    icon: '🚀',
    title: 'Lanzamiento y soporte',
    desc: 'Desplegamos con CI/CD automatizado, monitorización 24/7 y backups diarios. Y te entregamos documentación clara para que puedas operar tu proyecto de forma autónoma.',
    detail: ['Deploy con CI/CD automatizado', 'Monitorización y alertas 24/7', 'Documentación técnica incluida', 'Soporte post-lanzamiento acordado']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 900,
      margin: '0 auto'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: `card rev d${i % 4 + 1}`,
    style: {
      flexDirection: 'row',
      gap: 24,
      alignItems: 'flex-start',
      padding: 'clamp(20px,3vw,32px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 18,
      background: s.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24
    }
  }, s.icon), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 40,
      background: 'var(--bdr)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.2em',
      color: 'var(--txt-m)',
      marginBottom: 6
    }
  }, "Paso ", s.n), /*#__PURE__*/React.createElement("div", {
    className: "card-h",
    style: {
      marginTop: 0,
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.85,
      color: 'var(--txt-s)',
      marginBottom: 16
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, s.detail.map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--txt-m)',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--bdr)',
      borderRadius: 9999,
      padding: '4px 10px'
    }
  }, "\u2713 ", d)))))))));
};
const StatsSection = () => {
  const S = [{
    v: '+70',
    l: 'Proyectos entregados',
    d: 'Sitios, plataformas y sistemas con foco en claridad y ejecución.'
  }, {
    v: '99.9%',
    l: 'Uptime garantizado',
    d: 'Monitorización continua con alertas inmediatas ante cualquier incidencia.'
  }, {
    v: '<2s',
    l: 'Velocidad web objetivo',
    d: 'Experiencias ligeras y Core Web Vitals optimizados en cada entrega.'
  }, {
    v: '24h',
    l: 'Tiempo de respuesta',
    d: 'Acompañamiento directo y respuesta garantizada en menos de 24 horas.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.6),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew",
    style: {
      color: 'var(--violet-s)',
      borderColor: 'rgba(167,139,250,0.2)'
    }
  }, "M\xE9tricas"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Consistencia y rendimiento medible.")), /*#__PURE__*/React.createElement("div", {
    className: "g4"
  }, S.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: `card rev d${i + 1}`,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-v"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "stat-l"
  }, s.l), /*#__PURE__*/React.createElement("p", {
    className: "stat-d"
  }, s.d))))));
};
const FaqSection = () => {
  const [open, setOpen] = React.useState(null);
  const Q = [{
    q: '¿Cuánto tarda en responder alguien del equipo?',
    a: 'Siempre en menos de 24h en días laborables. Habitualmente mucho antes — nuestro tiempo medio de primera respuesta es inferior a 2 horas.'
  }, {
    q: '¿La consulta inicial tiene algún coste?',
    a: 'No. La consulta inicial de 30 minutos es completamente gratuita y sin compromiso. Puedes contarnos tu proyecto y si no podemos ayudarte, te lo decimos sin rodeos.'
  }, {
    q: '¿Qué pasa si quiero cambiar algo durante el desarrollo?',
    a: 'Los cambios de alcance dentro de los sprints se incorporan al siguiente sprint sin coste adicional si son menores. Para cambios que afecten significativamente al alcance acordado, lo presupuestamos contigo antes de ejecutar.'
  }, {
    q: '¿Cuánto tiempo tarda un proyecto típico?',
    a: 'Depende del alcance. Una web o landing page: 2-4 semanas. Una tienda online: 4-6 semanas. Un sistema a medida (ERP, CRM, SaaS): 6-16 semanas. Siempre acordamos el calendario antes de empezar.'
  }, {
    q: '¿Qué incluye el soporte post-lanzamiento?',
    a: 'Todos los proyectos incluyen un período de garantía post-lanzamiento para resolver bugs o ajustes derivados del desarrollo. El mantenimiento continuo se puede contratar por separado con diferentes niveles de cobertura.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Preguntas frecuentes sobre el proceso.")), /*#__PURE__*/React.createElement("div", {
    className: "rev"
  }, Q.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "faq-item"
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? null : i)
  }, /*#__PURE__*/React.createElement("span", null, q.q), /*#__PURE__*/React.createElement(IconArrow, {
    open: open === i
  })), open === i && /*#__PURE__*/React.createElement("p", {
    className: "faq-a"
  }, q.a)))))));
};
const CtaSection = () => /*#__PURE__*/React.createElement("section", {
  className: "sec"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    borderRadius: 24,
    border: '1px solid rgba(52,211,153,0.18)',
    background: 'linear-gradient(135deg,rgba(5,150,105,0.07),rgba(26,86,219,0.07))',
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
}, "\xBFListo para empezar?"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 'clamp(14px,1.9vw,17px)',
    lineHeight: 2,
    color: 'var(--txt-s)',
    maxWidth: '34rem',
    margin: '14px auto 0'
  }
}, "La primera conversaci\xF3n es gratuita. En 24h tienes respuesta."), /*#__PURE__*/React.createElement("div", {
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
}, "Consulta gratuita \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:contacto@nexo-digital.app",
  className: "btn btn-teal"
}, "\u2709 Escribir directamente")))));
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
  }, /*#__PURE__*/React.createElement("strong", null, "\xBFEmpezamos tu proyecto?"), " Primera consulta gratuita."), /*#__PURE__*/React.createElement("a", {
    href: "contacto.html",
    className: "btn btn-p",
    style: {
      padding: '9px 18px',
      fontSize: 13
    }
  }, "Empezar \u2192"), /*#__PURE__*/React.createElement("button", {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(PageHero, null), /*#__PURE__*/React.createElement(ProcessSection, null), /*#__PURE__*/React.createElement(StatsSection, null), /*#__PURE__*/React.createElement(FaqSection, null), /*#__PURE__*/React.createElement(CtaSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyBar, null), /*#__PURE__*/React.createElement(ChatWidget, null), /*#__PURE__*/React.createElement(ScrollFab, null), /*#__PURE__*/React.createElement(WaFab, null));
};
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
