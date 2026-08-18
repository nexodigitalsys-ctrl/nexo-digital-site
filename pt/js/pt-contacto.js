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
  href: "/pt",
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
}, "Ag\xEAncia Tech Premium")));
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
    href: 'index.html#saas',
    label: 'Produtos'
  }, {
    href: '/pt#servicos',
    label: 'Serviços'
  }, {
    href: 'index.html#processo',
    label: 'Processo'
  }, {
    href: 'index.html#clientes',
    label: 'Clientes'
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
    style: {
      display: 'none'
    },
    className: "dnav"
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
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contacto.html",
    onClick: function () {
      try {
        localStorage.setItem('nd-lang', 'es');
      } catch (e) {}
    },
    style: {
      padding: '3px 8px',
      borderRadius: 16,
      color: 'var(--txt-s)',
      textDecoration: 'none'
    }
  }, "ES"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3px 8px',
      borderRadius: 16,
      background: 'var(--blue)',
      color: '#fff'
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
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contacto.html",
    onClick: function () {
      try {
        localStorage.setItem('nd-lang', 'es');
      } catch (e) {}
    },
    style: {
      padding: '4px 14px',
      borderRadius: 16,
      color: 'var(--txt-s)',
      textDecoration: 'none'
    }
  }, "ES"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 14px',
      borderRadius: 16,
      background: 'var(--blue)',
      color: '#fff'
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
    const subj = 'Nova consulta: ' + (d.nome || '') + (d.empresa ? ' — ' + d.empresa : '');
    const body = ['Nome: ' + (d.nome || ''), 'Email: ' + (d.email || ''), 'Telefone: ' + (d.telefone || ''), 'Empresa: ' + (d.empresa || ''), 'Serviço: ' + (d.servico || ''), 'Orçamento: ' + (d.orcamento || ''), 'Prazo: ' + (d.prazo || ''), '', 'Descrição:', d.descricao || ''].join('\n');
    return 'mailto:contacto@nexo-digital.app?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
  };
  const buildWa = d => {
    if (!d) return 'https://wa.me/34689135159';
    const txt = 'Olá Nexo Digital! Tenho interesse em ' + (d.servico || 'os vossos serviços') + '. Sou ' + (d.nome || 'um potencial cliente') + (d.empresa ? ' da ' + d.empresa : '') + (d.descricao ? '. ' + d.descricao.substring(0, 120) : '.') + ' Podem ajudar-me?';
    return 'https://wa.me/34689135159?text=' + encodeURIComponent(txt);
  };
  const submit = async e => {
    e.preventDefault();
    setSt('loading');
    const raw = Object.fromEntries(new FormData(ref.current).entries());
    const data = {
      nombre: raw.nome,
      empresa: raw.empresa,
      email: raw.email,
      telefono: raw.telefone,
      servicio: raw.servico,
      presupuesto: raw.orcamento,
      timeline: raw.prazo,
      descripcion: raw.descricao,
      tipo: 'consulta-projeto-pt',
      lang: 'pt',
      _url: window.location.href
    };
    setFdata({
      ...raw
    });
    try {
      const params = new URLSearchParams();
      Object.entries(data).forEach(([k, v]) => params.append(k, String(v || '')));
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
        setMsg(j.message || 'Erro ao enviar.');
        setSt('err');
      } else {
        setMsg('O servidor não respondeu corretamente. Escreva-nos para contacto@nexo-digital.app ou pelo WhatsApp.');
        setSt('err');
      }
    } catch (err) {
      setMsg('Não foi possível conectar ao servidor.');
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
  }, "Conte-nos o seu projeto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--txt-m)'
    }
  }, "Resposta garantida em menos de 24h \xB7 Sem compromisso")), /*#__PURE__*/React.createElement("div", {
    className: "fmsg ok",
    style: {
      display: st === 'ok' ? 'block' : 'none'
    }
  }, "\u2713 Consulta recebida. Entraremos em contacto em menos de 24 horas."), st === 'err' && /*#__PURE__*/React.createElement("div", {
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
  }, "Contacte-nos diretamente:"), /*#__PURE__*/React.createElement("div", {
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
  }, "Nome *"), /*#__PURE__*/React.createElement("input", {
    name: "nome",
    type: "text",
    className: "fi2",
    required: true,
    placeholder: "O seu nome"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Empresa"), /*#__PURE__*/React.createElement("input", {
    name: "empresa",
    type: "text",
    className: "fi2",
    placeholder: "A sua empresa"
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
    placeholder: "o.seu@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Telefone *"), /*#__PURE__*/React.createElement("input", {
    name: "telefone",
    type: "tel",
    className: "fi2",
    required: true,
    placeholder: "N\xFAmero de telefone"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Que servi\xE7o lhe interessa? *"), /*#__PURE__*/React.createElement("select", {
    name: "servico",
    className: "fs2",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione uma op\xE7\xE3o"), /*#__PURE__*/React.createElement("optgroup", {
    label: "\u2500\u2500 Produtos SaaS \u2500\u2500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Nexo Invoicer"
  }, "Nexo Invoicer (Fatura\xE7\xE3o)"), /*#__PURE__*/React.createElement("option", {
    value: "SpeakEasily"
  }, "SpeakEasily (Comunica\xE7\xE3o digital)"), /*#__PURE__*/React.createElement("option", {
    value: "Nexo CRM & WhatsApp"
  }, "Nexo CRM & WhatsApp"), /*#__PURE__*/React.createElement("option", {
    value: "Nexo SEO Audit"
  }, "Nexo SEO Audit")), /*#__PURE__*/React.createElement("optgroup", {
    label: "\u2500\u2500 Servi\xE7os \u2500\u2500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Landing Page / Website"
  }, "Landing Page / Website"), /*#__PURE__*/React.createElement("option", {
    value: "Loja Online"
  }, "Loja Online"), /*#__PURE__*/React.createElement("option", {
    value: "TPV & Quiosques"
  }, "TPV & Quiosques Digitais"), /*#__PURE__*/React.createElement("option", {
    value: "Sistemas \xE0 Medida"
  }, "Sistemas \xE0 Medida (ERP/CRM)"), /*#__PURE__*/React.createElement("option", {
    value: "Tr\xE1fego pago / An\xFAncios"
  }, "Tr\xE1fego Pago / An\xFAncios"), /*#__PURE__*/React.createElement("option", {
    value: "Ciberseguran\xE7a"
  }, "Ciberseguran\xE7a & Infraestrutura"), /*#__PURE__*/React.createElement("option", {
    value: "Outro"
  }, "Outro / N\xE3o definido")))), /*#__PURE__*/React.createElement("div", {
    className: "fr2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Or\xE7amento aproximado"), /*#__PURE__*/React.createElement("select", {
    name: "orcamento",
    className: "fs2"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione um intervalo"), /*#__PURE__*/React.createElement("option", null, "350\u20AC \u2013 800\u20AC"), /*#__PURE__*/React.createElement("option", null, "800\u20AC \u2013 1.500\u20AC"), /*#__PURE__*/React.createElement("option", null, "1.500\u20AC \u2013 3.000\u20AC"), /*#__PURE__*/React.createElement("option", null, "3.000\u20AC \u2013 5.000\u20AC"), /*#__PURE__*/React.createElement("option", null, "Mais de 5.000\u20AC"), /*#__PURE__*/React.createElement("option", null, "Pagamento mensal"))), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Quando precisa?"), /*#__PURE__*/React.createElement("select", {
    name: "prazo",
    className: "fs2"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione"), /*#__PURE__*/React.createElement("option", null, "O mais r\xE1pido poss\xEDvel"), /*#__PURE__*/React.createElement("option", null, "Em 1 m\xEAs"), /*#__PURE__*/React.createElement("option", null, "Em 2\u20133 meses"), /*#__PURE__*/React.createElement("option", null, "Sem pressa")))), /*#__PURE__*/React.createElement("div", {
    className: "fg2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fl2"
  }, "Descreva o seu projeto *"), /*#__PURE__*/React.createElement("textarea", {
    name: "descricao",
    className: "ft2",
    required: true,
    placeholder: "O que precisa? Quais s\xE3o os seus objetivos?"
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
  }, st === 'loading' ? 'A enviar…' : 'Enviar consulta →'), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 11,
      fontSize: 11.5,
      color: 'var(--txt-m)',
      textAlign: 'center'
    }
  }, "Resposta em <24h \xB7 contacto@nexo-digital.app \xB7 Portugal & Espanha")));
};
const FaqSection = () => {
  const [open, setOpen] = React.useState(null);
  const Q = [{
    q: 'A consulta inicial tem algum custo?',
    a: 'Não. A consulta é completamente gratuita e sem compromisso. Pode contar-nos o seu projeto e se não pudermos ajudar, dizemos diretamente.'
  }, {
    q: 'Em quanto tempo respondem?',
    a: 'Sempre em menos de 24h em dias úteis. O nosso tempo médio de resposta é inferior a 2 horas. Se for urgente, pode também escrever-nos por WhatsApp.'
  }, {
    q: 'Trabalham só numa cidade ou também noutros países?',
    a: 'Trabalhamos 100% à distância com empresas de qualquer cidade ou país. Toda a comunicação e acompanhamento é feito por videochamada e canais digitais. Sem limite geográfico.'
  }, {
    q: 'Posso contratar só uma parte do serviço?',
    a: 'Sim. Pode começar com uma auditoria, um chatbot, uma landing page ou uma consulta pontual. Não é obrigatório contratar um projeto completo para trabalhar connosco.'
  }, {
    q: 'Como se paga o projeto?',
    a: 'Normalmente dividimos o pagamento em marcos: uma percentagem no início, outra a meio do desenvolvimento e o restante na entrega. Os detalhes são acordados na proposta técnica.'
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
  }, "Perguntas frequentes.")), /*#__PURE__*/React.createElement("div", {
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
}, "Solu\xE7\xF5es digitais com design premium, clareza t\xE9cnica e foco no neg\xF3cio. Servimos Portugal e Espanha.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "P\xE1ginas"), [['index.html#saas', 'Produtos'], ['/pt#servicos', 'Serviços'], ['index.html#processo', 'Processo'], ['index.html#clientes', 'Clientes']].map(([h, l]) => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: h,
  className: "flk"
}, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "Servi\xE7os"), ['Landing Page / Website', 'Loja Online', 'TPV & Quiosques', 'Sistemas à Medida', 'Cibersegurança'].map(l => /*#__PURE__*/React.createElement("span", {
  key: l,
  className: "flk",
  style: {
    cursor: 'default'
  }
}, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "Contacto direto"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:contacto@nexo-digital.app",
  className: "flk"
}, "contacto@nexo-digital.app"), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/34689135159",
  target: "_blank",
  rel: "noreferrer",
  className: "flk"
}, "WhatsApp direto"), /*#__PURE__*/React.createElement("span", {
  className: "flk",
  style: {
    cursor: 'default'
  }
}, "Seg\u2013Sex 9:00\u201319:00"))), /*#__PURE__*/React.createElement("div", {
  className: "fbot"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Nexo Digital"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 14,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/pt/aviso-legal.html",
  className: "flk",
  style: {
    fontSize: 12,
    margin: 0
  }
}, "Aviso Legal"), /*#__PURE__*/React.createElement("a", {
  href: "/pt/privacidade.html",
  className: "flk",
  style: {
    fontSize: 12,
    margin: 0
  }
}, "Privacidade"), /*#__PURE__*/React.createElement("a", {
  href: "/pt/cookies.html",
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
    if (open && !inited) {
      setInited(true);
      setMsgs([{
        r: 'b',
        t: 'Olá! Sou o assistente da Nexo Digital. Posso ajudá-lo com informações sobre os nossos serviços, preços ou encaminhá-lo para a equipa.\n\nEm que posso ajudá-lo?'
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
  const waLink = 'https://wa.me/34689135159?text=Olá%20Nexo%20Digital,%20venho%20do%20chat%20do%20vosso%20site';
  const localAnswer = txt => {
    try {
      const stops = ['para', 'como', 'que', 'os', 'as', 'uma', 'uns', 'umas', 'com', 'por', 'do', 'da', 'ao', 'à', 'às', 'o', 'a', 'de', 'e', 'em', 'é', 'se', 'sua', 'seu', 'seus', 'suas', 'este', 'esta', 'estes', 'quero', 'quanto', 'qual', 'pode', 'podes', 'fazer', 'faz', 'seria', 'estar', 'ter', 'preciso', 'queria', 'diz', 'informacao', 'informação'];
      const words = txt.toLowerCase().replace(/[^a-záéíóúüñçãõâêô0-9\s]/gi, ' ').split(/\s+/).filter(w => w.length > 3 && stops.indexOf(w) === -1);
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
        return 'Pesquisei no site e isto é o que encontrei:\n\n' + clean.slice(0, 320) + '\n\nPosso ajudar em mais alguma coisa, ou prefere que o passe para a equipa por WhatsApp?';
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
    const fallback = localAnswer(txt) || 'Lamento, não consegui ligar ao serviço e não tenho essa informação na página. Escreva-nos por WhatsApp ou para contacto@nexo-digital.app e respondemos em 24h.';
    try {
      const data = await _nexoChat({
        lang: 'pt',
        messages: history.map(m => ({
          role: m.r === 'u' ? 'user' : 'assistant',
          content: m.t
        }))
      }).then(_r => _r ? { reply: _r } : {});
      setMsgs(h => [...h, {
        r: 'b',
        t: data.reply || fallback
      }]);
    } catch (e) {
      setMsgs(h => [...h, {
        r: 'b',
        t: fallback
      }]);
    }
    setBusy(false);
  };
  const chips = ['Que serviços oferecem?', 'Quanto custa um website?', 'Quanto demora o projeto?', 'Quero falar com alguém'];
  const Bubble = ({
    m
  }) => {
    const isBot = m.r === 'b';
    const hasWa = isBot && (m.t.toLowerCase().includes('whatsapp') || m.t.toLowerCase().includes('contactar') || m.t.toLowerCase().includes('escrever'));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '83%',
        padding: '9px 13px',
        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
        background: isBot ? '#f0f4ff' : 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
        border: isBot ? '1px solid rgba(29,78,216,0.12)' : 'none',
        fontSize: 13,
        lineHeight: 1.65,
        color: isBot ? '#1e293b' : '#fff',
        whiteSpace: 'pre-line'
      }
    }, m.t, hasWa && /*#__PURE__*/React.createElement("a", {
      href: waLink,
      target: "_blank",
      rel: "noreferrer",
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
    }, "\uD83D\uDCAC Abrir WhatsApp")));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 90,
      left: 24,
      width: 'min(360px,calc(100vw - 48px))',
      maxHeight: 'min(500px,calc(100vh - 110px))',
      background: 'rgba(255,255,255,0.99)',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      border: '1px solid rgba(0,0,0,0.09)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
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
      color: '#fff'
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
  }, "Online"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
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
      scrollbarWidth: 'thin'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(Bubble, {
    key: i,
    m: m
  })), busy && /*#__PURE__*/React.createElement("div", {
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
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
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
  })))), /*#__PURE__*/React.createElement("div", {
    ref: endRef
  })), msgs.length <= 1 && !busy && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 12px 8px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => send(c),
    style: {
      fontSize: 11.5,
      padding: '4px 9px',
      borderRadius: 999,
      border: '1px solid rgba(29,78,216,0.18)',
      background: 'rgba(29,78,216,0.06)',
      color: '#1d4ed8',
      cursor: 'pointer'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
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
    onChange: e => setInp(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    placeholder: "Escreva a sua pergunta...",
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
    onClick: () => send(),
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
    onClick: () => setOpen(o => !o),
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
  }, open ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "12",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8V6a4 4 0 018 0v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "14",
    r: "1.2",
    fill: "#fff",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "14",
    r: "1.2",
    fill: "#fff",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 17.5c.7.7 3.3.7 5 0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "8"
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
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (atBottom) window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });else window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    },
    style: {
      position: 'fixed',
      right: 24,
      bottom: 148,
      zIndex: 198,
      width: 46,
      height: 46,
      borderRadius: 13,
      border: '1px solid rgba(255,255,255,0.25)',
      background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all .25s',
      opacity: vis ? 1 : 0,
      transform: vis ? 'scale(1)' : 'scale(0.8)',
      pointerEvents: vis ? 'all' : 'none',
      boxShadow: '0 4px 20px rgba(29,78,216,0.45)'
    },
    "aria-label": atBottom ? 'Voltar ao topo' : 'Ir para baixo',
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = '0 6px 28px rgba(29,78,216,0.6)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(29,78,216,0.45)';
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
  href: "https://wa.me/34689135159?text=Ol\xE1%20Nexo%20Digital,%20tenho%20interesse%20nos%20vossos%20servi\xE7os",
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
    icon: '✉️',
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
    label: 'Tempo de resposta médio',
    value: 'Menos de 2 horas',
    href: null
  }, {
    icon: '💻',
    label: 'Cobertura',
    value: 'Global · 100% Remoto',
    href: null
  }, {
    icon: '💻',
    label: 'Horário',
    value: 'Seg–Sex 9:00–19:00',
    href: null
  }, {
    icon: '💻',
    label: 'Primeira consulta',
    value: 'Gratuita e sem compromisso',
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
    href: "/pt",
    style: {
      fontSize: 12,
      color: 'var(--txt-m)'
    }
  }, "\u2190 In\xEDcio"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bdr)'
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
  }, "Falemos do ", /*#__PURE__*/React.createElement("em", null, "seu projeto.")), /*#__PURE__*/React.createElement("p", {
    className: "ha3",
    style: {
      marginTop: 16,
      fontSize: 'clamp(14px,1.9vw,17px)',
      lineHeight: 2,
      color: 'var(--txt-s)',
      maxWidth: '34rem',
      margin: '16px auto 0'
    }
  }, "Conte-nos o que precisa. Resposta garantida em menos de 24h. Sem compromisso."), /*#__PURE__*/React.createElement("div", {
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
    href: "https://wa.me/34689135159?text=Ol\xE1%20Nexo%20Digital,%20quero%20falar%20sobre%20o%20meu%20projeto",
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-teal"
  }, "\uD83D\uDCAC WhatsApp direto")))), /*#__PURE__*/React.createElement("section", {
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
