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
  href: "/",
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
      background: sc ? 'rgba(255,255,255,0.92)' : 'transparent',
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
      color: l.href === 'contacto.html' ? 'var(--txt)' : 'var(--txt-s)',
      textDecoration: 'none',
      transition: 'color .2s'
    },
    onMouseEnter: e => e.target.style.color = 'var(--txt)',
    onMouseLeave: e => e.target.style.color = l.href === 'contacto.html' ? 'var(--txt)' : 'var(--txt-s)'
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
    href: "/pt/contacto.html",
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
    href: "#form",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 9999,
      background: 'var(--emerald)',
      padding: '9px 20px',
      fontSize: 13.5,
      fontWeight: 600,
      color: '#fff',
      textDecoration: 'none'
    }
  }, "Consulta gratuita \u2192")), /*#__PURE__*/React.createElement("button", {
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
      color: l.href === 'contacto.html' ? 'var(--txt)' : 'var(--txt-s)',
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
    href: "/pt/contacto.html",
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
    href: "#form",
    onClick: () => setOp(false),
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9999,
      background: 'var(--emerald)',
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 600,
      color: '#fff',
      textDecoration: 'none'
    }
  }, "Consulta gratuita \u2192"))), /*#__PURE__*/React.createElement("style", null, `.dnav{display:flex!important;align-items:center;gap:26px;} @media(max-width:1024px){.dnav{display:none!important;}.mbtn{display:inline-flex!important;}} @media(min-width:1025px){.mbtn{display:none!important;}}`));
};
const ContactForm = () => {
  const [st, setSt] = React.useState('idle');
  const [msg, setMsg] = React.useState('');
  const [fdata, setFdata] = React.useState(null);
  const ref = React.useRef();
  const buildMailto = d => {
    if (!d) return 'mailto:contacto@nexo-digital.app';
    const subj = 'Nueva consulta: ' + (d.nombre || '') + (d.empresa ? ' — ' + d.empresa : '');
    const body = ['Nombre: ' + (d.nombre || ''), 'Email: ' + (d.email || ''), 'Teléfono: ' + (d.telefono || ''), 'Empresa: ' + (d.empresa || ''), 'Servicio: ' + (d.servicio || ''), 'Presupuesto: ' + (d.presupuesto || ''), 'Plazo: ' + (d.timeline || ''), '', 'Descripción:', d.descripcion || ''].join('\n');
    return 'mailto:contacto@nexo-digital.app?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
  };
  const buildWa = d => {
    if (!d) return 'https://wa.me/34689135159';
    const txt = 'Hola Nexo Digital! Me interesa ' + (d.servicio || 'vuestros servicios') + '. Soy ' + (d.nombre || 'un cliente potencial') + (d.empresa ? ' de ' + d.empresa : '') + (d.descripcion ? '. ' + d.descripcion.substring(0, 120) : '.') + ' ¿Podéis ayudarme?';
    return 'https://wa.me/34689135159?text=' + encodeURIComponent(txt);
  };
  const submit = async e => {
    e.preventDefault();
    setSt('loading');
    const data = Object.fromEntries(new FormData(ref.current).entries());
    data.tipo = 'consulta-proyecto';
    data._url = window.location.href;
    setFdata(data);
    try {
      const params = new URLSearchParams();
      Object.entries(data).forEach(([k, v]) => params.append(k, String(v)));
      let j = null;
      for (const _u of ['/api/send', '/send.php']) {
        try {
          const r = await fetch(_u, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
          });
          let _j;
          try {
            _j = await r.json();
          } catch (_) {
            _j = null;
          }
          if (_j && _j.success) {
            j = _j;
            break;
          }
          if (r.ok && _j) {
            j = _j;
            break;
          }
        } catch (_e) {}
      }
      if (j && j.success) {
        setSt('ok');
        ref.current.reset();
        setFdata(null);
      } else if (j) {
        setMsg(j.message || 'Error al enviar.');
        setSt('err');
      } else {
        setMsg('El servidor no respondió correctamente. Escríbenos a contacto@nexo-digital.app o por WhatsApp.');
        setSt('err');
      }
    } catch (err) {
      setMsg('No se pudo conectar con el servidor.');
      setSt('err');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fbox",
    id: "form"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--disp)',
      fontSize: 'clamp(17px,2vw,22px)',
      fontWeight: 600,
      color: 'var(--txt)',
      marginBottom: 6
    }
  }, "Cu\xE9ntanos tu proyecto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--txt-m)'
    }
  }, "Respuesta garantizada en menos de 24h \xB7 Sin compromiso")), /*#__PURE__*/React.createElement("div", {
    className: "fmsg ok",
    style: {
      display: st === 'ok' ? 'block' : 'none'
    }
  }, "\u2713 Consulta recibida. Te contactaremos en menos de 24 horas."), st === 'err' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderRadius: 12,
      background: 'rgba(239,68,68,0.08)',
      border: '1px solid rgba(239,68,68,0.25)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#dc2626',
      margin: '0 0 8px'
    }
  }, "\u26A0 ", msg), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--txt-m)',
      margin: '0 0 10px'
    }
  }, "Contacta con nosotros directamente:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: buildWa(fdata),
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 13px',
      borderRadius: 8,
      background: '#25d366',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "\uD83D\uDCAC WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: buildMailto(fdata),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 13px',
      borderRadius: 8,
      background: '#1d4ed8',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "\u2709 Enviar por email"))), /*#__PURE__*/React.createElement("form", {
    ref: ref,
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Nombre *"), /*#__PURE__*/React.createElement("input", {
    name: "nombre",
    type: "text",
    className: "fi2",
    required: true,
    placeholder: "Tu nombre"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Empresa"), /*#__PURE__*/React.createElement("input", {
    name: "empresa",
    type: "text",
    className: "fi2",
    placeholder: "Tu empresa"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fr2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Email *"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    className: "fi2",
    required: true,
    placeholder: "tu@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Tel\xE9fono *"), /*#__PURE__*/React.createElement("input", {
    name: "telefono",
    type: "tel",
    className: "fi2",
    required: true,
    placeholder: "N\xFAmero de tel\xE9fono"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "\xBFQu\xE9 servicio te interesa? *"), /*#__PURE__*/React.createElement("select", {
    name: "servicio",
    className: "fs2",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecciona una opci\xF3n"), /*#__PURE__*/React.createElement("optgroup", {
    label: "\u2500\u2500 Productos SaaS \u2500\u2500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Nexo Invoicer"
  }, "Nexo Invoicer (Facturaci\xF3n)"), /*#__PURE__*/React.createElement("option", {
    value: "SpeakEasily"
  }, "SpeakEasily (Comunicaci\xF3n digital)"), /*#__PURE__*/React.createElement("option", {
    value: "Nexo CRM & WhatsApp"
  }, "Nexo CRM & WhatsApp"), /*#__PURE__*/React.createElement("option", {
    value: "Nexo SEO Audit"
  }, "Nexo SEO Audit")), /*#__PURE__*/React.createElement("optgroup", {
    label: "\u2500\u2500 Servicios \u2500\u2500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Landing Page / P\xE1gina Web"
  }, "Landing Page / P\xE1gina Web"), /*#__PURE__*/React.createElement("option", {
    value: "Tienda Online"
  }, "Tienda Online"), /*#__PURE__*/React.createElement("option", {
    value: "TPV & Kioscos"
  }, "TPV & Kioscos Digitales"), /*#__PURE__*/React.createElement("option", {
    value: "Sistemas a Medida"
  }, "Sistemas a Medida (ERP/CRM)"), /*#__PURE__*/React.createElement("option", {
    value: "Tr\xE1fico pago / Anuncios"
  }, "Tr\xE1fico Pago / Anuncios"), /*#__PURE__*/React.createElement("option", {
    value: "Ciberseguridad"
  }, "Ciberseguridad & Infraestructura"), /*#__PURE__*/React.createElement("option", {
    value: "Otro"
  }, "Otro / No definido")))), /*#__PURE__*/React.createElement("div", {
    className: "fr2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Presupuesto aproximado"), /*#__PURE__*/React.createElement("select", {
    name: "presupuesto",
    className: "fs2"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecciona un rango"), /*#__PURE__*/React.createElement("option", null, "350\u20AC \u2013 800\u20AC"), /*#__PURE__*/React.createElement("option", null, "800\u20AC \u2013 1.500\u20AC"), /*#__PURE__*/React.createElement("option", null, "1.500\u20AC \u2013 3.000\u20AC"), /*#__PURE__*/React.createElement("option", null, "3.000\u20AC \u2013 5.000\u20AC"), /*#__PURE__*/React.createElement("option", null, "M\xE1s de 5.000\u20AC"), /*#__PURE__*/React.createElement("option", null, "Pago mensual"))), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "\xBFCu\xE1ndo lo necesitas?"), /*#__PURE__*/React.createElement("select", {
    name: "timeline",
    className: "fs2"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecciona"), /*#__PURE__*/React.createElement("option", null, "Lo antes posible"), /*#__PURE__*/React.createElement("option", null, "En 1 mes"), /*#__PURE__*/React.createElement("option", null, "En 2\u20133 meses"), /*#__PURE__*/React.createElement("option", null, "Sin prisa")))), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Describe tu proyecto *"), /*#__PURE__*/React.createElement("textarea", {
    name: "descripcion",
    className: "ft2",
    required: true,
    placeholder: "\xBFQu\xE9 necesitas? \xBFQu\xE9 objetivos tienes?"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-p",
    style: {
      width: '100%',
      fontSize: 15,
      padding: '13px 24px',
      background: 'var(--emerald)'
    },
    disabled: st === 'loading'
  }, st === 'loading' ? 'Enviando…' : 'Enviar consulta →'), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 11,
      fontSize: 11.5,
      color: 'var(--txt-m)',
      textAlign: 'center'
    }
  }, "Respuesta en <24h \xB7 contacto@nexo-digital.app")));
};
const FaqSection = () => {
  const [open, setOpen] = React.useState(null);
  const Q = [{
    q: '¿La consulta inicial tiene algún coste?',
    a: 'No. La consulta de 30 minutos es completamente gratuita y sin compromiso. Puedes contarnos tu proyecto y si no podemos ayudarte, te lo decimos directamente.'
  }, {
    q: '¿En cuánto tiempo respondéis?',
    a: 'Siempre en menos de 24h en días laborables. Nuestro tiempo medio de respuesta es inferior a 2 horas. Si es urgente, también puedes escribirnos por WhatsApp.'
  }, {
    q: '¿Trabajáis solo en una ciudad o también en otros países?',
    a: 'Trabajamos 100% en remoto con empresas de cualquier ciudad o país. Toda la comunicación y seguimiento es por videollamada y canales digitales. Sin límite geográfico.'
  }, {
    q: '¿Puedo contratar solo una parte del servicio?',
    a: 'Sí. Puedes empezar con una auditoría, un chatbot, una landing page o una consulta puntual. No es obligatorio contratar un proyecto completo para trabajar con nosotros.'
  }, {
    q: '¿Cómo se cobra el proyecto?',
    a: 'Normalmente dividimos el pago en hitos: un porcentaje al inicio, otro a mitad del desarrollo y el resto en la entrega. Los detalles se acuerdan en la propuesta técnica.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew",
    style: {
      color: 'var(--blue-s)',
      borderColor: 'rgba(96,165,250,0.2)'
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Preguntas frecuentes.")), /*#__PURE__*/React.createElement("div", {
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
}, "Contacto directo"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:contacto@nexo-digital.app",
  className: "flk"
}, "contacto@nexo-digital.app"), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/34689135159",
  target: "_blank",
  rel: "noreferrer",
  className: "flk"
}, "WhatsApp directo"), /*#__PURE__*/React.createElement("span", {
  className: "flk",
  style: {
    cursor: 'default'
  }
}, "Lun\u2013Vie 9:00\u201319:00"))), /*#__PURE__*/React.createElement("div", {
  className: "fbot"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Nexo Digital"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 14,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/aviso-legal.html",
  className: "flk",
  style: {
    fontSize: 12,
    margin: 0
  }
}, "Aviso Legal"), /*#__PURE__*/React.createElement("a", {
  href: "/privacidad.html",
  className: "flk",
  style: {
    fontSize: 12,
    margin: 0
  }
}, "Privacidad"), /*#__PURE__*/React.createElement("a", {
  href: "/cookies.html",
  className: "flk",
  style: {
    fontSize: 12,
    margin: 0
  }
}, "Cookies")))));
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
  const info = [{
    icon: '✉️',
    label: 'Email',
    value: 'contacto@nexo-digital.app',
    href: 'mailto:contacto@nexo-digital.app'
  }, {
    icon: '💬',
    label: 'WhatsApp',
    value: '+34 689 135 159',
    href: 'https://wa.me/34689135159'
  }, {
    icon: '⚡',
    label: 'Respuesta media',
    value: 'Menos de 2 horas',
    href: null
  }, {
    icon: '🌍',
    label: 'Cobertura',
    value: 'Global · 100% Remoto',
    href: null
  }, {
    icon: '🕐',
    label: 'Horario',
    value: 'Lun–Vie 9:00–19:00',
    href: null
  }, {
    icon: '🎁',
    label: 'Primera consulta',
    value: 'Gratuita y sin compromiso',
    href: null
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("section", {
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
    className: "orb orb2"
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
    href: "/",
    style: {
      fontSize: 12,
      color: 'var(--txt-m)'
    }
  }, "\u2190 Inicio"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.2)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Consulta gratuita")), /*#__PURE__*/React.createElement("h1", {
    className: "h1 ha2",
    style: {
      marginTop: 20,
      maxWidth: '44rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Hablemos de ", /*#__PURE__*/React.createElement("em", null, "tu proyecto.")), /*#__PURE__*/React.createElement("p", {
    className: "ha3",
    style: {
      marginTop: 16,
      fontSize: 'clamp(14px,1.9vw,17px)',
      lineHeight: 2,
      color: 'var(--txt-s)',
      maxWidth: '34rem',
      margin: '16px auto 0'
    }
  }, "Cu\xE9ntanos qu\xE9 necesitas. Respuesta garantizada en menos de 24h. Sin compromiso."), /*#__PURE__*/React.createElement("div", {
    className: "ha4",
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#form",
    className: "btn btn-p",
    style: {
      background: 'var(--emerald)'
    }
  }, "Enviar consulta \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20quiero%20hablar%20sobre%20mi%20proyecto",
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-teal"
  }, "\uD83D\uDCAC WhatsApp directo")))), /*#__PURE__*/React.createElement("section", {
    className: "sec-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 12,
      marginBottom: 40
    },
    className: "rev"
  }, info.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    className: "card",
    style: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'flex-start',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      flexShrink: 0
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10,
      color: 'var(--txt-m)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.15em',
      marginBottom: 3
    }
  }, c.label), c.href ? /*#__PURE__*/React.createElement("a", {
    href: c.href,
    target: c.href.startsWith('http') ? '_blank' : undefined,
    rel: "noreferrer",
    style: {
      fontSize: 13,
      color: 'var(--emerald-s)',
      fontWeight: 600
    }
  }, c.value) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--txt)',
      fontWeight: 500
    }
  }, c.value))))), /*#__PURE__*/React.createElement(FaqSection, null)), /*#__PURE__*/React.createElement("div", {
    className: "rev",
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(ContactForm, null))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ChatWidget, null), /*#__PURE__*/React.createElement(ScrollFab, null), /*#__PURE__*/React.createElement(WaFab, null));
};
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
