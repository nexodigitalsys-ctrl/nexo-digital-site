function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  href: "#top",
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
    href: '#saas',
    label: 'Produtos'
  }, {
    href: '#servicos',
    label: 'Serviços'
  }, {
    href: '#processo',
    label: 'Processo'
  }, {
    href: '#clientes',
    label: 'Clientes'
  }, {
    href: '#equipa',
    label: 'Equipa'
  }, {
    href: '#contacto',
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
      color: 'var(--txt-s)',
      textDecoration: 'none',
      transition: 'color .2s'
    },
    onMouseEnter: e => e.target.style.color = 'var(--txt)',
    onMouseLeave: e => e.target.style.color = 'var(--txt-s)'
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    },
    className: "dnav",
    id: "nav-right"
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
    href: "../",
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
    href: "#contacto",
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
  }, "Come\xE7ar \u2192")), /*#__PURE__*/React.createElement("button", {
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
      color: 'var(--txt-s)',
      textDecoration: 'none',
      transition: 'all .2s'
    },
    onMouseEnter: e => {
      e.target.style.background = 'var(--surf2)';
      e.target.style.color = 'var(--txt)';
    },
    onMouseLeave: e => {
      e.target.style.background = '';
      e.target.style.color = 'var(--txt-s)';
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
    href: "../",
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
    href: "#contacto",
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
  }, "Come\xE7ar \u2192"))), /*#__PURE__*/React.createElement("style", null, `.dnav{display:flex!important;align-items:center;gap:26px;} @media(max-width:1024px){.dnav{display:none!important;}.mbtn{display:inline-flex!important;}} @media(min-width:1025px){.mbtn{display:none!important;}}`));
};
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "sec-hero",
  style: {
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-bg"
}), /*#__PURE__*/React.createElement("div", {
  className: "aurora-layer"
}), /*#__PURE__*/React.createElement("div", {
  className: "orb orb1"
}), /*#__PURE__*/React.createElement("div", {
  className: "orb orb2"
}), /*#__PURE__*/React.createElement("div", {
  className: "orb orb3"
}), /*#__PURE__*/React.createElement("div", {
  className: "ring",
  style: {
    width: 760,
    height: 760,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    opacity: .6
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "ring",
  style: {
    width: 520,
    height: 520,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderColor: 'rgba(124,58,237,0.07)',
    opacity: .8
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "wrap",
  style: {
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ha1"
}, /*#__PURE__*/React.createElement("span", {
  className: "ew",
  style: {
    background: 'linear-gradient(135deg,rgba(29,78,216,0.1),rgba(124,58,237,0.08))',
    borderColor: 'rgba(29,78,216,0.22)'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "dot"
}), "Ag\xEAncia Tech Premium")), /*#__PURE__*/React.createElement("h1", {
  className: "h1 ha2",
  style: {
    marginTop: 28,
    maxWidth: '54rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}, "Constru\xEDmos sistemas digitais que trabalham pela sua empresa, ", /*#__PURE__*/React.createElement("em", null, "mesmo quando n\xE3o est\xE1.")), /*#__PURE__*/React.createElement("p", {
  className: "ha3",
  style: {
    marginTop: 20,
    fontSize: 'clamp(15px,2.1vw,18.5px)',
    lineHeight: 1.9,
    color: 'var(--txt-s)',
    maxWidth: '42rem',
    margin: '20px auto 0'
  }
}, "Websites, apps SaaS, CRM, automatiza\xE7\xF5es, TPV e quiosques. Infraestrutura segura e disponibilidade 24/7 para empresas em qualquer lugar."), /*#__PURE__*/React.createElement("div", {
  className: "ha4",
  style: {
    marginTop: 34,
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#saas",
  className: "btn btn-p",
  style: {
    background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
    boxShadow: '0 4px 24px rgba(29,78,216,0.35)'
  }
}, "Ver produtos SaaS \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "#contacto",
  className: "btn btn-s",
  style: {
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(12px)'
  }
}, "Falar connosco")), /*#__PURE__*/React.createElement("div", {
  className: "ha5",
  style: {
    marginTop: 28,
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    flexWrap: 'wrap'
  }
}, [["💻", "100% Remoto"], ["⚡", "Resposta em 24h"], ["🛡️", "Infraestrutura segura"]].map(([ic, l]) => /*#__PURE__*/React.createElement("span", {
  key: l,
  style: {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--txt-s)',
    padding: '5px 13px',
    borderRadius: 9999,
    border: '1px solid var(--bdr)',
    background: 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(8px)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5
  }
}, ic, " ", l))), /*#__PURE__*/React.createElement("div", {
  className: "ha6",
  style: {
    marginTop: 52,
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    width: 'min(540px,94vw)',
    margin: '52px auto 0',
    borderRadius: 20,
    border: '1px solid rgba(29,78,216,0.12)',
    background: 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(20px)',
    overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(29,78,216,0.1)'
  }
}, [['+88', 'Apps'], ['+70', 'Clientes'], ['99.9%', 'Uptime'], ['24h', 'Resposta']].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: '18px 12px',
    textAlign: 'center',
    borderRight: i < 3 ? '1px solid rgba(29,78,216,0.09)' : 'none'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--disp)',
    fontSize: 'clamp(17px,2.2vw,23px)',
    fontWeight: 700,
    background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 10,
    color: 'var(--txt-m)',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: '.12em',
    fontWeight: 600
  }
}, l))))));
const Ticker = () => {
  const [tp, setTp] = React.useState(false);
  const row1 = [{
    icon: '🚀',
    color: '#34d399',
    label: 'Website lançado',
    loc: 'Portugal',
    time: 'há 2 dias'
  }, {
    icon: '💬',
    color: '#60a5fa',
    label: 'Chatbot IA ativado',
    loc: 'Espanha',
    time: 'há 4 dias'
  }, {
    icon: '🛒',
    color: '#a78bfa',
    label: 'Loja online entregue',
    loc: 'Portugal',
    time: 'há 6 dias'
  }, {
    icon: '💻',
    color: '#2dd4bf',
    label: 'CRM integrado com WhatsApp',
    loc: 'Europa',
    time: 'há 8 dias'
  }, {
    icon: '🔒',
    color: '#fb923c',
    label: 'Auditoria de segurança',
    loc: 'Portugal',
    time: 'há 10 dias'
  }, {
    icon: '📊',
    color: '#fbbf24',
    label: 'Dashboard analítico',
    loc: 'Espanha',
    time: 'há 12 dias'
  }, {
    icon: '🍽️',
    color: '#34d399',
    label: 'SaaS Restaurante',
    loc: 'Espanha',
    time: 'há 3 dias'
  }, {
    icon: '🦷',
    color: '#60a5fa',
    label: 'SaaS Odontologia',
    loc: 'Brasil',
    time: 'há 6 dias'
  }, {
    icon: '☕',
    color: '#a78bfa',
    label: 'TPV Cafetaria',
    loc: 'Portugal',
    time: 'há 7 dias'
  }, {
    icon: '🏋️',
    color: '#2dd4bf',
    label: 'SaaS Ginásio',
    loc: 'Espanha',
    time: 'há 9 dias'
  }, {
    icon: '🧾',
    color: '#fb923c',
    label: 'SaaS Faturação',
    loc: 'Europa',
    time: 'há 11 dias'
  }, {
    icon: '📱',
    color: '#fbbf24',
    label: 'App móvel Android & iOS',
    loc: 'Espanha',
    time: 'há 13 dias'
  }];
  const row2 = [{
    icon: '✅',
    color: '#34d399',
    label: 'Novo cliente',
    loc: 'Portugal',
    time: 'há 1 dia'
  }, {
    icon: '📱',
    color: '#60a5fa',
    label: 'App publicada',
    loc: 'Espanha',
    time: 'há 5 dias'
  }, {
    icon: '🎯',
    color: '#a78bfa',
    label: 'Campanha Google Ads',
    loc: 'Europa',
    time: 'há 7 dias'
  }, {
    icon: '⚡',
    color: '#2dd4bf',
    label: 'Automatização B2B',
    loc: 'Portugal',
    time: 'há 9 dias'
  }, {
    icon: '💻',
    color: '#fb923c',
    label: 'Landing page premium',
    loc: 'Espanha',
    time: 'há 11 dias'
  }, {
    icon: '📈',
    color: '#fbbf24',
    label: 'SEO Audit · +67% visibilidade',
    loc: 'Europa',
    time: 'há 13 dias'
  }, {
    icon: '🏪',
    color: '#34d399',
    label: 'TPV Minimercado',
    loc: 'Espanha',
    time: 'há 4 dias'
  }, {
    icon: '🎓',
    color: '#60a5fa',
    label: 'SaaS Academia',
    loc: 'Brasil',
    time: 'há 8 dias'
  }, {
    icon: '🏨',
    color: '#a78bfa',
    label: 'SaaS Hospedagem',
    loc: 'Portugal',
    time: 'há 10 dias'
  }, {
    icon: '👗',
    color: '#2dd4bf',
    label: 'SaaS Loja de Moda',
    loc: 'Espanha',
    time: 'há 12 dias'
  }, {
    icon: '🔧',
    color: '#fb923c',
    label: 'ERP Oficina Automóvel',
    loc: 'Brasil',
    time: 'há 14 dias'
  }, {
    icon: '🧠',
    color: '#fbbf24',
    label: 'Luna · Agente IA',
    loc: 'Espanha',
    time: 'há 2 dias'
  }];
  const Item = ({
    icon,
    color,
    label,
    loc,
    time
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 16px 9px 10px',
      borderRadius: 14,
      border: `1px solid ${color}28`,
      background: `linear-gradient(135deg,${color}12,rgba(255,255,255,0.85))`,
      backdropFilter: 'blur(12px)',
      flexShrink: 0,
      marginRight: 10,
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: `${color}20`,
      border: `1px solid ${color}30`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--txt)',
      whiteSpace: 'nowrap',
      lineHeight: 1.3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--txt-m)',
      marginTop: 1,
      whiteSpace: 'nowrap'
    }
  }, loc, " \xB7 ", time)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color,
      boxShadow: `0 0 8px ${color}`,
      flexShrink: 0,
      marginLeft: 2
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setTp(true),
    onMouseLeave: () => setTp(false),
    onTouchStart: () => setTp(true),
    onTouchEnd: () => setTp(false),
    style: {
      padding: '18px 0 20px',
      borderTop: '1px solid var(--bdr)',
      borderBottom: '1px solid var(--bdr)',
      overflow: 'hidden',
      background: 'rgba(245,247,251,0.95)',
      maskImage: 'linear-gradient(90deg,transparent,black 6%,black 94%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'ticker 50s linear infinite',
      animationPlayState: tp ? 'paused' : 'running',
      marginBottom: 9
    }
  }, [...row1, ...row1].map((t, i) => /*#__PURE__*/React.createElement(Item, _extends({
    key: i
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'tickerR 55s linear infinite',
      animationPlayState: tp ? 'paused' : 'running'
    }
  }, [...row2, ...row2].map((t, i) => /*#__PURE__*/React.createElement(Item, _extends({
    key: i
  }, t)))));
};
const Marquee = () => {
  const [mp, setMp] = React.useState(false);
  const items = [{
    t: 'Next.js',
    c: '#1d4ed8'
  }, {
    t: 'TypeScript',
    c: '#1d4ed8'
  }, {
    t: 'React',
    c: '#0369a1'
  }, {
    t: 'React Native',
    c: '#0369a1'
  }, {
    t: 'Flutter',
    c: '#0369a1'
  }, {
    t: 'Node.js',
    c: '#15803d'
  }, {
    t: 'Python',
    c: '#15803d'
  }, {
    t: 'PostgreSQL',
    c: '#1d4ed8'
  }, {
    t: 'MySQL',
    c: '#1d4ed8'
  }, {
    t: 'MongoDB',
    c: '#065f46'
  }, {
    t: 'Firebase',
    c: '#b45309'
  }, {
    t: 'Supabase',
    c: '#065f46'
  }, {
    t: 'Redis',
    c: '#b91c1c'
  }, {
    t: 'Docker',
    c: '#0369a1'
  }, {
    t: 'Kubernetes',
    c: '#1d4ed8'
  }, {
    t: 'AWS',
    c: '#c2410c'
  }, {
    t: 'Cloudflare',
    c: '#c2410c'
  }, {
    t: 'Vercel',
    c: '#1d4ed8'
  }, {
    t: 'Git',
    c: '#c2410c'
  }, {
    t: 'Linux',
    c: '#b45309'
  }, {
    t: 'Nginx',
    c: '#065f46'
  }, {
    t: 'WordPress',
    c: '#1d4ed8'
  }, {
    t: 'PHP',
    c: '#6d28d9'
  }, {
    t: 'Laravel',
    c: '#b91c1c'
  }, {
    t: 'Tailwind CSS',
    c: '#0369a1'
  }, {
    t: 'Kotlin',
    c: '#6d28d9'
  }, {
    t: 'Swift',
    c: '#c2410c'
  }, {
    t: 'Stripe',
    c: '#6d28d9'
  }, {
    t: 'Bizum',
    c: '#0f766e'
  }, {
    t: 'WhatsApp API',
    c: '#065f46'
  }, {
    t: 'Cibersegurança',
    c: '#b91c1c'
  }, {
    t: 'APIs REST',
    c: '#0f766e'
  }, {
    t: 'GraphQL',
    c: '#6d28d9'
  }, {
    t: 'PWA',
    c: '#0f766e'
  }, {
    t: 'Automatização',
    c: '#065f46'
  }, {
    t: 'CI/CD',
    c: '#b45309'
  }, {
    t: 'IA / Agentes',
    c: '#6d28d9'
  }];
  const d = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 0',
      borderTop: '1px solid var(--bdr)',
      borderBottom: '1px solid var(--bdr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setMp(true),
    onMouseLeave: () => setMp(false),
    onTouchStart: () => setMp(true),
    onTouchEnd: () => setMp(false),
    style: {
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      width: 'max-content',
      animation: 'marquee 50s linear infinite',
      animationPlayState: mp ? 'paused' : 'running'
    }
  }, d.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 9999,
      border: `1px solid ${t.c}20`,
      background: `${t.c}0a`,
      padding: '7px 15px',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      color: t.c,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: t.c,
      opacity: .8,
      flexShrink: 0
    }
  }), t.t)))));
};
const SaasSection = () => {
  const P = [{
    st: 'Disponível',
    sc: 'green',
    tag: 'SaaS',
    title: 'Nexo Invoicer',
    desc: 'Faturação moderna para empresas de construção, vendas e pequenos negócios. Controlo financeiro e emissão sem complicações.',
    feats: ['Faturas e recibos digitais', 'Gestão fiscal organizada', 'Histórico e relatórios'],
    cta: 'Solicitar demo'
  }, {
    st: 'Beta privada',
    sc: 'blue',
    tag: 'SaaS',
    title: 'SpeakEasily',
    desc: 'Plataforma de comunicação e experiência digital com foco em simplicidade e crescimento.',
    feats: ['Fluxos intuitivos', 'Experiência mobile-first', 'Lista para beta privada SaaS'],
    cta: 'Juntar-me à lista'
  }, {
    st: 'Em expansão',
    sc: 'orange',
    tag: 'SaaS',
    title: 'Nexo CRM & WhatsApp',
    desc: 'Relação comercial e atendimento centralizados com automatização e contexto em tempo real.',
    feats: ['Pipeline comercial visual', 'WhatsApp integrado', 'Automatizações de seguimento'],
    cta: 'Agendar reunião'
  }, {
    st: 'Disponível',
    sc: 'green',
    tag: 'SaaS',
    title: 'Nexo SEO Audit',
    desc: 'Diagnóstico técnico e estratégico para detetar bloqueios, oportunidades e prioridades SEO.',
    feats: ['Análise técnica completa', 'Prioridades acionáveis', 'Roteiro de melhoria'],
    cta: 'Solicitar auditoria'
  }, {
    st: 'Disponível',
    sc: 'blue',
    tag: 'Software',
    title: 'TPV & Quiosques Software',
    desc: 'Software de ponto de venda e quiosques digitais chave-na-mão para negócios físicos. Sem complicações técnicas.',
    feats: ['TPV tátil personalizado', 'Quiosques de autoatendimento', 'Suporte e atualizações incluídos'],
    cta: 'Ver demo'
  }, {
    st: 'Disponível',
    sc: 'green',
    tag: 'Serviço',
    title: 'Landing Page Pro',
    desc: 'Páginas de destino de alta conversão com SEO técnico, design premium e otimização contínua.',
    feats: ['Design mobile-first e rápido', 'SEO técnico desde o primeiro dia', 'Integração analítica e CRO'],
    cta: 'Ver exemplos'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "saas",
    className: "sec-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "Produtos SaaS"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Plataformas pr\xF3prias criadas para escalar."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Software desenvolvido pela Nexo Digital para acelerar opera\xE7\xF5es, vendas e presen\xE7a online.")), /*#__PURE__*/React.createElement("div", {
    className: "g3"
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
    href: "#contacto"
  }, p.cta))))), /*#__PURE__*/React.createElement("div", {
    className: "rev",
    style: {
      marginTop: 34,
      borderRadius: 22,
      border: '1px solid rgba(29,78,216,0.16)',
      background: 'linear-gradient(135deg,rgba(29,78,216,0.06),rgba(124,58,237,0.06),rgba(13,148,136,0.05))',
      padding: 'clamp(26px,4vw,40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 260,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--disp)',
      fontSize: 'clamp(17px,2.6vw,22px)',
      fontWeight: 600,
      letterSpacing: '-.015em',
      color: 'var(--txt)'
    }
  }, "Procura uma app moderna criada \xE0 medida?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 13.5,
      lineHeight: 1.8,
      color: 'var(--txt-s)',
      maxWidth: 520
    }
  }, "Aplica\xE7\xF5es SaaS, CRMs, TPVs, ERPs e apps m\xF3veis para Android e iOS. Analisamos o seu caso e propomos a melhor solu\xE7\xE3o.")), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "btn btn-p",
    style: {
      flexShrink: 0
    }
  }, "Quero uma app \xE0 medida \u2192"))));
};
const ServicesSection = () => {
  const S = [{
    icon: '💻',
    title: 'Landing Page / Website',
    desc: 'Design e desenvolvimento web premium orientado à  conversão, com SEO técnico desde o primeiro dia.',
    feats: ['SEO técnico nacional e internacional', 'Design mobile-first', 'Core Web Vitals otimizados']
  }, {
    icon: '🛒',
    title: 'Loja Online',
    desc: 'E-commerce completo com gestão de produtos, pagamentos integrados e experiência de compra otimizada.',
    feats: ['Catálogo e gateway de pagamento', 'Gestão de encomendas e inventário', 'Integração com marketplaces']
  }, {
    icon: '🤖',
    title: 'Chatbot IA',
    desc: 'Assistentes virtuais com inteligência artificial integrados no seu website ou WhatsApp. Atendimento 24/7 sem custo de pessoal.',
    feats: ['IA conversacional personalizada', 'Integração web e WhatsApp', 'Redireciona para vendas ou suporte']
  }, {
    icon: '🧾',
    title: 'Faturação Digital',
    desc: 'Sistema de faturação para empresas de construção, vendas e pequenos negócios. Rápido, claro e sem complicações.',
    feats: ['Faturas e recibos digitais', 'Gestão fiscal organizada', 'Para construção, vendas e retalho']
  }, {
    icon: '💻',
    title: 'TPV & Quiosques Digitais',
    desc: 'Software TPV e infraestrutura de quiosques para pequenas e médias empresas. Chave-na-mão.',
    feats: ['Software TPV personalizado', 'Quiosques de autoatendimento', 'Suporte e manutenção incluídos']
  }, {
    icon: '💻',
    title: 'Sistemas à Medida',
    desc: 'ERP, CRM, dashboards e portais internos criados para a operação real do negócio.',
    feats: ['ERP e CRM personalizados', 'Integrações via API REST', 'Arquitetura escalável']
  }, {
    icon: '📣',
    title: 'Tráfego Pago / Anúncios',
    desc: 'Campanhas Google Ads e Meta Ads orientadas a resultados mensuráveis para negócios locais e nacionais.',
    feats: ['Google Ads e Meta Ads', 'Segmentação geográfica precisa', 'Relatórios e otimização contínua']
  }, {
    icon: '🔒',
    title: 'Cibersegurança & Infraestrutura',
    desc: 'Auditorias de segurança, hardening, SSL, firewall Cloudflare e monitorização ativa 24/7.',
    feats: ['Auditoria de segurança web', 'Firewall e proteção DDoS', 'Backups automáticos diários']
  }, {
    icon: '📱',
    title: 'Apps Móveis (Android & iOS)',
    desc: 'Aplicações móveis nativas e híbridas para Android e iOS: publicamos a sua app na Google Play e App Store.',
    feats: ['Android & iOS (React Native / Flutter)', 'Publicação na Google Play e App Store', 'Notificações push e offline']
  }, {
    icon: '☁️',
    title: 'Aplicações SaaS à medida',
    desc: 'Software como serviço por setores: restaurantes, clínicas, academias, ginásios e mais. Multiusuário e escalável.',
    feats: ['SaaS por setor (restaurante, clínica…)', 'Subscrições e gestão de utilizadores', 'Painel de administração']
  }, {
    icon: '🤝',
    title: 'CRMs à medida',
    desc: 'Sistemas de relação com clientes personalizados para a sua operação: vendas, delivery, lojas e serviços.',
    feats: ['Pipeline e acompanhamento comercial', 'Integração com WhatsApp', 'Relatórios e automatização']
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "servicos",
    className: "sec-lg",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "Servi\xE7os de desenvolvimento"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "O que constru\xEDmos para a sua empresa."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Desde websites e lojas online at\xE9 sistemas internos, TPV e seguran\xE7a. Tudo com crit\xE9rio t\xE9cnico e foco no neg\xF3cio.")), /*#__PURE__*/React.createElement("div", {
    className: "g3"
  }, S.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: `card rev d${i % 4 + 1}`
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
    href: "#contacto"
  }, "Consultar \u2192")))))));
};
const AgendaSection = () => /*#__PURE__*/React.createElement("section", {
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
}, /*#__PURE__*/React.createElement("span", {
  className: "ew",
  style: {
    marginBottom: 20,
    display: 'inline-flex'
  }
}, "Falamos?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: 'var(--disp)',
    fontSize: 'clamp(1.7rem,3.5vw,2.5rem)',
    fontWeight: 600,
    letterSpacing: '-.015em',
    color: 'var(--txt)',
    marginTop: 16
  }
}, "A primeira conversa \xE9 gratuita e sem compromisso."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 'clamp(14px,1.9vw,17px)',
    lineHeight: 2,
    color: 'var(--txt-s)',
    maxWidth: '38rem',
    margin: '14px auto 0'
  }
}, "Conte-nos o seu projeto, o seu problema ou a sua ideia. Em 24h dizemos se podemos ajudar e como."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    display: 'flex',
    gap: 14,
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#contacto",
  className: "btn btn-p"
}, "Enviar consulta \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:contacto@nexo-digital.app",
  className: "btn btn-teal"
}, "\u2709 Escrever por email"), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/34689135159?text=Ol\xE1%20Nexo%20Digital,%20tenho%20interesse%20nos%20vossos%20servi\xE7os",
  target: "_blank",
  rel: "noreferrer",
  className: "btn btn-s"
}, "\uD83D\uDCAC WhatsApp direto")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 12,
    color: 'var(--txt-m)'
  }
}, "Europa \xB7 Portugal \xB7 Espanha \u2014 Resposta garantida em menos de 24h"))));
const StatsSection = () => {
  const S = [{
    v: '+88',
    l: 'Aplicações em catálogo',
    d: 'TPVs, SaaS, ERPs, CRMs e sistemas de gestão prontos para cada setor.'
  }, {
    v: '+70',
    l: 'Projetos entregues',
    d: 'Sites, plataformas e sistemas à medida em produção.'
  }, {
    v: '24/7',
    l: 'Monitorização e segurança',
    d: 'Vigilância inteligente com alertas automáticos e proteção proativa.'
  }, {
    v: '4',
    l: 'Idiomas suportados',
    d: 'Plataformas e loja em espanhol, português, inglês e catalão — com francês e italiano a caminho.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "Confian\xE7a e m\xE9tricas"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Uma forma de trabalhar orientada para consist\xEAncia e desempenho.")), /*#__PURE__*/React.createElement("div", {
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
const ClientsSection = () => {
  const C = ['Santa Fe Construções', 'Fornells Studio', 'Onadance', 'Reformas Machado', 'Soltur Reformas', 'Santafe Reformas', 'Super Clim', 'Saviesa', 'Bresami', 'Viviane Cordeiro', 'Misme Electric', 'Ecants'];
  return /*#__PURE__*/React.createElement("section", {
    id: "clientes",
    className: "sec",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.5),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "Empresas que confiam em n\xF3s"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Projetos reais para neg\xF3cios que apostam no digital."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Trabalh\xE1mos com empresas locais, e-commerces e neg\xF3cios em expans\xE3o em Portugal, Espanha e al\xE9m.")), /*#__PURE__*/React.createElement("div", {
    className: "client-wrap rev"
  }, C.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "cpill"
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "cta-join rev"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--disp)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--txt)'
    }
  }, "A sua empresa pode ser a pr\xF3xima?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 5,
      fontSize: 13,
      color: 'var(--txt-s)'
    }
  }, "Junte-se \xE0s empresas que j\xE1 confiam em n\xF3s e fa\xE7a crescer o seu neg\xF3cio.")), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "btn btn-p btn-sm",
    style: {
      flexShrink: 0
    }
  }, "Contactar agora \u2192"))));
};
const AppsCatalogSection = () => {
  const groups = [{
    icon: '🛍️',
    title: 'TPVs por setor',
    count: '11',
    items: ['Cafetaria', 'Restauração', 'Fast Food', 'Padaria', 'Cabeleireiro', 'Estética & SPA', 'Minimercado', 'Sapataria', 'Joiaria', 'Papelaria', 'Bares']
  }, {
    icon: '☁️',
    title: 'SaaS multinegócio',
    count: '15',
    items: ['Restaurante', 'Clínica', 'Odontologia', 'Ginásio', 'Colégio', 'Academia', 'Ferragens', 'Minimercado', 'Hospedagem', 'Oficina Automóvel', 'Oficina Têxtil', 'Loja de Moda', 'Farmácia', 'Consultas Médicas', 'Crédito']
  }, {
    icon: '🏢',
    title: 'Gestão & ERPs',
    count: '10+',
    items: ['Armazéns', 'Gestor documental', 'Contabilidade', 'Consultório médico', 'Assiduidade digital', 'Encomendas', 'Folha de pagamento', 'Serviço técnico', 'ERP educativo', 'ERP farmácia']
  }, {
    icon: '🤝',
    title: 'CRMs à medida',
    count: '8',
    items: ['Loja online', 'Delivery', 'Odontologia', 'Agência de viagens', 'Colégio', 'Condomínio', 'Vendas', 'Loja de telemóveis']
  }];
  const extras = [{
    icon: '📊',
    title: 'Dashboard tudo-em-um',
    desc: 'Despesas, CRM, tarefas, documentos e metas numa só plataforma.',
    tag: 'Tudo em 1'
  }, {
    icon: '📱',
    title: 'Apps móveis validadas',
    desc: 'Android & iOS publicadas na Google Play e App Store.',
    tag: 'Android · iOS'
  }, {
    icon: '🎮',
    title: 'Jogos & Gamificação',
    desc: 'Jogos web e móveis, casuais e arcade.',
    tag: 'Web · Móvel'
  }, {
    icon: '🧠',
    title: 'IA & Agentes',
    desc: 'Chatbots IA e agentes autónomos como Luna.',
    tag: 'IA própria'
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
  }, "Aplica\xE7\xF5es \xE0 medida"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Software feito por setores, n\xE3o modelos."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Um cat\xE1logo pr\xF3prio com mais de 88 solu\xE7\xF5es: TPV, SaaS, ERPs, CRMs e sistemas de gest\xE3o adaptados ao dia a dia de cada neg\xF3cio.")), /*#__PURE__*/React.createElement("div", {
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
    href: "#contacto"
  }, "Quero uma app assim \u2192"))))), /*#__PURE__*/React.createElement("div", {
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
  }, "+88 aplica\xE7\xF5es em cat\xE1logo \xB7 Entrega digital \xB7 Multilingue (es \xB7 pt \xB7 en \xB7 ca) \xB7 Pagamento flex\xEDvel")));
};
const EcosystemSection = () => {
  const cards = [{
    icon: '🧠',
    title: 'Luna — Agente autónomo',
    tag: 'IA própria',
    sc: 'blue',
    desc: 'Sistema de inteligência próprio que raciocina na nuvem e executa ações reais no servidor: ficheiros, shell, git e dashboards de forma autónoma.',
    feats: ['Monitorização inteligente 24/7', 'Firewall ativo e anti força bruta', 'Deteção de ataques com geolocalização de IPs', 'Acessos controlados e palavras-passe reforçadas']
  }, {
    icon: '🛒',
    title: 'Nexo Digital Store',
    tag: 'Plataforma',
    sc: 'green',
    desc: 'Plataforma completa de aplicações de negócio com +88 produtos: TPV, SaaS, websites e apps, com catálogo, ficha de produto e entrega digital.',
    feats: ['+88 produtos organizados', 'Transferência e Bizum, Stripe a caminho', 'Download com verificação de compra', 'Painel de administração centralizado', 'Espanhol · Português · Inglês · Catalão']
  }, {
    icon: '💼',
    title: 'Nexo Business Suite',
    tag: 'Suite de negócio',
    sc: 'orange',
    desc: 'Soluções prontas a usar: gestão documental por áreas (Nexus), RH, logística, contabilidade, clínicas e retalho, mais um criador de landing pages.',
    feats: ['Nexus: processos por áreas', 'RH, logística e contabilidade', 'Soluções para clínicas e retalho', 'Criador de landing pages']
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "ecossistema",
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "O ecossistema Nexo"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Tecnologia pr\xF3pria, operada por n\xF3s."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "IA aut\xF3noma, loja de software e suite de neg\xF3cio: o que usamos para construir \u2014 e operar \u2014 produtos reais todos os dias.")), /*#__PURE__*/React.createElement("div", {
    className: "g3"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: `card rev d${i % 4 + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28
    }
  }, c.icon), /*#__PURE__*/React.createElement("span", {
    className: `sb ${c.sc}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-dot"
  }), c.tag)), /*#__PURE__*/React.createElement("div", {
    className: "card-h"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "card-p"
  }, c.desc), /*#__PURE__*/React.createElement("ul", {
    className: "fl"
  }, c.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "fi"
  }, /*#__PURE__*/React.createElement(IconCheck, null), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    className: "card-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contacto"
  }, "Solicitar demo \u2192")))))));
};
const TeamSection = () => {
  const T = [{
    i: 'E',
    g: 'linear-gradient(135deg,#1a56db,#0d9488)',
    n: 'Enoque Santos',
    r: 'System IT · Segurança · Developer',
    b: 'Especialista em infraestrutura IT, cibersegurança e arquitetura de sistemas. Garante que cada projeto é implementado sobre uma base robusta, segura e escalável.',
    li: 'https://www.linkedin.com/in/enoque-santos/',
    portfolio: null
  }, {
    i: 'A',
    g: 'linear-gradient(135deg,#1e3a8a,#1a56db)',
    n: 'Abner Gabriel',
    r: 'Developer Sénior · Web & Apps',
    b: 'Desenvolvedor sénior com vasta experiência em aplicações web de alto desempenho. Transforma requisitos complexos em produtos digitais claros e precisos.',
    li: 'https://www.linkedin.com/in/abner-gabriel-b830163a1',
    portfolio: 'https://meu-portifolio-silk-xi.vercel.app/'
  }, {
    i: 'L',
    g: 'linear-gradient(135deg,#0f766e,#0d9488)',
    n: 'Elias Mendes',
    r: 'Developer · Web & Apps · Empresário',
    b: 'Desenvolvedor de aplicações com visão empresarial. Combina critério técnico e enfoque de negócio para construir produtos que geram valor real e duradouro.',
    li: 'https://www.linkedin.com/in/hiperclimservicos/',
    portfolio: null
  }];
  const IconLinkedIn = () => React.createElement('svg', {
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, React.createElement('path', {
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  }));
  const IconPortfolio = () => React.createElement('svg', {
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
  }), React.createElement('polyline', {
    points: '15 3 21 3 21 9'
  }), React.createElement('line', {
    x1: 10,
    y1: 14,
    x2: 21,
    y2: 3
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "equipa",
    className: "sec-lg",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew"
  }, "A nossa equipa"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Pessoas reais por detr\xE1s de cada projeto."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Equipa t\xE9cnica com experi\xEAncia em sistemas IT, seguran\xE7a, desenvolvimento e aplica\xE7\xF5es. Acompanhamento direto e suporte cont\xEDnuo em cada projeto.")), /*#__PURE__*/React.createElement("div", {
    className: "g3"
  }, T.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.n,
    className: `card rev d${i + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-av",
    style: {
      background: t.g
    }
  }, t.i), /*#__PURE__*/React.createElement("div", {
    className: "t-n"
  }, t.n), /*#__PURE__*/React.createElement("div", {
    className: "t-r"
  }, t.r), /*#__PURE__*/React.createElement("p", {
    className: "t-b"
  }, t.b), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, t.li && React.createElement('a', {
    href: t.li,
    target: '_blank',
    rel: 'noreferrer',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '6px 12px',
      borderRadius: 8,
      border: '1px solid rgba(29,78,216,0.18)',
      background: 'rgba(29,78,216,0.05)',
      color: '#1d4ed8',
      fontSize: 12,
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'all .2s'
    }
  }, React.createElement(IconLinkedIn, null), 'LinkedIn'), t.portfolio && React.createElement('a', {
    href: t.portfolio,
    target: '_blank',
    rel: 'noreferrer',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '6px 12px',
      borderRadius: 8,
      border: '1px solid rgba(15,118,110,0.18)',
      background: 'rgba(15,118,110,0.05)',
      color: '#0f766e',
      fontSize: 12,
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'all .2s'
    }
  }, React.createElement(IconPortfolio, null), 'Portfólio')))))));
};
const FaqSection = () => {
  const [open, setOpen] = React.useState(null);
  const Q = [{
    q: 'Que serviços de desenvolvimento web oferecem?',
    a: 'Na Nexo Digital oferecemos desenvolvimento web, lojas online, aplicações SaaS, CRM com WhatsApp, chatbots IA, TPV, quiosques digitais, cibersegurança e auditorias SEO. Trabalhamos com empresas de todo Portugal, Espanha e além.'
  }, {
    q: 'Quanto custa um website?',
    a: 'O preço depende do projeto. Um website informativo pode partir de 350€, uma loja online de 800€, e os sistemas à medida a partir de 1.500€. Contacte-nos para uma proposta personalizada sem compromisso e com resposta em menos de 24h.'
  }, {
    q: 'Em quanto tempo desenvolvem um website?',
    a: 'O prazo habitual é de 2 a 6 semanas para websites standard e de 4 a 12 semanas para sistemas mais complexos. Acordamos sempre um calendário concreto antes de começar para que tenha visibilidade completa do processo.'
  }, {
    q: 'Trabalham em regime remoto ou apenas presencial?',
    a: 'Trabalhamos 100% em regime remoto com qualquer empresa, independentemente da sua localização. Temos clientes em Portugal, Espanha e Europa. Toda a comunicação e acompanhamento é feito de forma direta e sem intermediários.'
  }, {
    q: 'O que é um sistema TPV e como pode ajudar o meu negócio?',
    a: 'Um TPV (Terminal Ponto de Venda) é o software que gere as vendas, o inventário e os pagamentos do seu negócio. Na Nexo Digital desenvolvemo-lo à medida ou configuramos soluções chave-na-mão para pequenas e médias empresas.'
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
  }, "Perguntas frequentes"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Tudo o que precisa de saber.")), /*#__PURE__*/React.createElement("div", {
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
const ContactSection = () => {
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
      _url: window.location.href
    };
    setFdata({
      ...raw
    });
    try {
      const params = new URLSearchParams();
      Object.entries(data).forEach(([k, v]) => params.append(k, String(v || '')));
      const r = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });
      let j;
      try {
        j = await r.json();
      } catch (_) {
        j = {
          success: false,
          message: 'O servidor não respondeu corretamente (' + r.status + ').'
        };
      }
      if (j.success) {
        setSt('ok');
        ref.current.reset();
        setFdata(null);
      } else {
        setMsg(j.message || 'Erro ao enviar.');
        setSt('err');
      }
    } catch (err) {
      setMsg('Não foi possível conectar ao servidor.');
      setSt('err');
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    className: "sec-lg",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 40%,#0c1a3a 70%,#0f172a 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 600,
      height: 600,
      borderRadius: '50%',
      top: '-200px',
      left: '50%',
      transform: 'translateX(-30%)',
      background: 'radial-gradient(circle,rgba(29,78,216,0.28) 0%,rgba(124,58,237,0.15) 50%,transparent 70%)',
      filter: 'blur(80px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 350,
      height: 350,
      borderRadius: '50%',
      bottom: '-100px',
      right: '-80px',
      background: 'radial-gradient(circle,rgba(124,58,237,0.22) 0%,transparent 70%)',
      filter: 'blur(60px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
      backgroundSize: '48px 48px',
      maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew",
    style: {
      background: 'rgba(255,255,255,0.08)',
      borderColor: 'rgba(255,255,255,0.2)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, "Pr\xF3ximo passo"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t",
    style: {
      color: '#ffffff'
    }
  }, "Tem um projeto em mente? Conte-nos."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d",
    style: {
      color: 'rgba(255,255,255,0.65)'
    }
  }, "Respondemos em menos de 24h. Trabalhamos com empresas de qualquer lugar.")), /*#__PURE__*/React.createElement("div", {
    className: "fbox rev",
    style: {
      background: 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fmsg ok",
    style: {
      display: st === 'ok' ? 'flex' : 'none',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Consulta recebida. Entraremos em contacto em menos de 24 horas.")), st === 'err' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderRadius: 12,
      background: 'rgba(239,68,68,0.12)',
      border: '1px solid rgba(239,68,68,0.3)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#fca5a5',
      margin: '0 0 10px'
    }
  }, "\u26A0 ", msg), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)',
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
      background: 'rgba(255,255,255,0.12)',
      color: 'rgba(255,255,255,0.85)',
      fontSize: 12,
      fontWeight: 600,
      textDecoration: 'none',
      border: '1px solid rgba(255,255,255,0.2)'
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
      padding: '14px 24px',
      background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
      boxShadow: '0 4px 24px rgba(37,99,235,0.5)'
    },
    disabled: st === 'loading'
  }, st === 'loading' ? 'A enviar…' : 'Enviar consulta →'), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 11,
      fontSize: 11.5,
      color: 'rgba(255,255,255,0.4)',
      textAlign: 'center'
    }
  }, "Resposta em <24h \xB7 contacto@nexo-digital.app")))));
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
}, "Solu\xE7\xF5es digitais com design premium, clareza t\xE9cnica e foco no neg\xF3cio. Portugal \xB7 Espanha \xB7 Europa."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }
}, ['LinkedIn', 'Instagram', 'X'].map(s => /*#__PURE__*/React.createElement("a", {
  key: s,
  href: "#",
  style: {
    fontSize: 10,
    borderRadius: 6,
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '4px 10px',
    color: '#94a3b8'
  }
}, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "Produtos SaaS"), ['Nexo Invoicer', 'SpeakEasily', 'Nexo CRM & WhatsApp', 'Nexo SEO Audit'].map(l => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: "#saas",
  className: "flk"
}, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "Servi\xE7os"), ['Landing Page / Website', 'Loja Online', 'TPV & Quiosques', 'Sistemas à Medida', 'Cibersegurança'].map(l => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: "#servicos",
  className: "flk"
}, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fh"
}, "Contacto"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:contacto@nexo-digital.app",
  className: "flk"
}, "contacto@nexo-digital.app"), /*#__PURE__*/React.createElement("span", {
  className: "flk",
  style: {
    cursor: 'default'
  }
}, "Portugal \xB7 Espanha \xB7 Europa"), /*#__PURE__*/React.createElement("a", {
  href: "#equipa",
  className: "flk",
  style: {
    marginTop: 12
  }
}, "A nossa equipa"), /*#__PURE__*/React.createElement("a", {
  href: "#clientes",
  className: "flk"
}, "Clientes"))), /*#__PURE__*/React.createElement("div", {
  className: "fbot"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Nexo Digital"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "aviso-legal.html",
  className: "flk",
  style: {
    fontSize: 12
  }
}, "Aviso Legal"), /*#__PURE__*/React.createElement("a", {
  href: "privacidade.html",
  className: "flk",
  style: {
    fontSize: 12
  }
}, "Privacidade"), /*#__PURE__*/React.createElement("a", {
  href: "cookies.html",
  className: "flk",
  style: {
    fontSize: 12
  }
}, "Cookies")))));
const ProcessSection = () => {
  const steps = [{
    n: '01',
    color: 'linear-gradient(135deg,#059669,#0d9488)',
    icon: '💬',
    title: 'Consulta gratuita',
    desc: 'Conte-nos o seu projeto. Ouvimo-lo sem compromisso e em 24h dizemos exatamente o que podemos fazer e quanto custaria.'
  }, {
    n: '02',
    color: 'linear-gradient(135deg,#7c3aed,#1a56db)',
    icon: '📋',
    title: 'Proposta técnica',
    desc: 'Recebe um documento com âmbito, tecnologia, prazos e preço fechado. Sem custos ocultos nem surpresas no final.'
  }, {
    n: '03',
    color: 'linear-gradient(135deg,#1a56db,#0d9488)',
    icon: '💻',
    title: 'Desenvolvimento iterativo',
    desc: 'Construímos em sprints com entregas visíveis. Tem acesso a cada avanço e canais diretos com a equipa.'
  }, {
    n: '04',
    color: 'linear-gradient(135deg,#d97706,#059669)',
    icon: '🚀',
    title: 'Lançamento e suporte',
    desc: 'Fazemos o deploy com CI/CD, monitorização 24/7 e acompanhamos com suporte pós-lançamento incluído.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "processo",
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
  }, "O nosso processo"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "Da ideia ao lan\xE7amento, sem fric\xE7\xE3o."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Um processo claro, iterativo e com comunica\xE7\xE3o direta em cada fase.")), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      maxWidth: 860,
      margin: '0 auto'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: `card rev d${i % 4 + 1}`,
    style: {
      flexDirection: 'row',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "proc-icon",
    style: {
      background: s.color
    }
  }, s.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "proc-num"
  }, "Passo ", s.n), /*#__PURE__*/React.createElement("div", {
    className: "card-h",
    style: {
      marginTop: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "card-p",
    style: {
      marginTop: 6
    }
  }, s.desc)))))));
};
const IconStar = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "#f59e0b",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l2.9 6.26L21.5 9.27l-4.75 4.63 1.12 6.54L12 17.42l-5.87 3.02 1.12-6.54L2.5 9.27l6.6-1.01z"
}));
const TestimonialsSection = () => {
  const T = [{
    q: 'Passámos de perder leads por não responder a tempo a ter um chatbot que os atende em segundos. Em 6 semanas conseguimos +38% em conversões.',
    author: 'Carlos M.',
    role: 'Oficina mecânica',
    initials: 'CM',
    color: 'linear-gradient(135deg,#059669,#0d9488)'
  }, {
    q: 'A auditoria técnica revelou-nos 67% de rejeição em mobile. Em 2 semanas baixámos para 22%. As vendas subiram nesse mesmo mês.',
    author: 'Mariana S.',
    role: 'E-commerce',
    initials: 'MS',
    color: 'linear-gradient(135deg,#7c3aed,#1a56db)'
  }, {
    q: 'Ligaram o nosso CRM ao sistema de faturação. 15 horas semanais de trabalho manual eliminadas. O ROI pagou-se no primeiro mês.',
    author: 'João P.',
    role: 'Consultoria B2B · Lisboa',
    initials: 'JP',
    color: 'linear-gradient(135deg,#1e3a8a,#0d9488)'
  }, {
    q: 'Montaram-nos um SaaS à medida para o nosso restaurante com gestão de mesas, pedidos e relatórios. Hoje funciona tudo sem atrito e a equipa usa diariamente.',
    author: 'Ana C.',
    role: 'Restaurante · Porto',
    initials: 'AC',
    color: 'linear-gradient(135deg,#0d9488,#7c3aed)'
  }, {
    q: 'O TPV à medida para a nossa pastelaria reduziu as filas e os erros de caixa quase a zero. O suporte responde em minutos quando precisamos.',
    author: 'Rita F.',
    role: 'Pastelaria · Braga',
    initials: 'RF',
    color: 'linear-gradient(135deg,#f59e0b,#ef4444)'
  }, {
    q: 'Ajudaram-nos a lançar a nossa loja online em 14 dias com SEO incluído. Hoje 40% das vendas chegam pelo Google.',
    author: 'Tiago M.',
    role: 'Loja online · Faro',
    initials: 'TM',
    color: 'linear-gradient(135deg,#0ea5e9,#7c3aed)'
  }, {
    q: 'O dashboard tudo-em-um centraliza despesas, tarefas e documentos da clínica. A gestão administrativa passou de horas a minutos.',
    author: 'Helena V.',
    role: 'Clínica dentária · Coimbra',
    initials: 'HV',
    color: 'linear-gradient(135deg,#059669,#2563eb)'
  }, {
    q: 'O agente autónomo responde a consultas, organiza ficheiros e vigia o site 24/7. É como ter um funcionário digital que nunca dorme.',
    author: 'Bruno S.',
    role: 'Agência de viagens · Algarve',
    initials: 'BS',
    color: 'linear-gradient(135deg,#7c3aed,#0d9488)'
  }];
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = T.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);
  const go = i => setIdx((i % n + n) % n);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec-lg",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh c rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ew",
    style: {
      color: 'var(--amber-s)',
      borderColor: 'rgba(251,191,36,0.2)'
    }
  }, "Resultados reais"), /*#__PURE__*/React.createElement("h2", {
    className: "sh-t"
  }, "O que dizem os nossos clientes."), /*#__PURE__*/React.createElement("p", {
    className: "sh-d"
  }, "Empresas reais. N\xFAmeros reais. Sem testemunhos de stock.")), /*#__PURE__*/React.createElement("div", {
    className: "rev",
    style: {
      maxWidth: 780,
      margin: '0 auto',
      position: 'relative'
    },
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onTouchStart: () => setPaused(true),
    onTouchEnd: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      transition: 'transform .55s cubic-bezier(.16,1,.3,1)',
      transform: 'translateX(-' + idx * 100 + '%)'
    }
  }, T.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.author,
    style: {
      flex: '0 0 100%',
      minWidth: '100%',
      padding: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 210
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "test-stars"
  }, Array.from({
    length: 5
  }).map((_, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "test-star"
  }, /*#__PURE__*/React.createElement(IconStar, null)))), /*#__PURE__*/React.createElement("p", {
    className: "test-q"
  }, "\u201C", t.q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "test-av",
    style: {
      background: t.color
    }
  }, t.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--txt)'
    }
  }, t.author), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--txt-m)',
      marginTop: 2
    }
  }, t.role)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go(idx - 1),
    "aria-label": "Anterior",
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid rgba(29,78,216,0.2)',
      background: '#fff',
      color: '#1d4ed8',
      cursor: 'pointer',
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .2s'
    }
  }, "\u276E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, T.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.author,
    onClick: () => go(i),
    "aria-label": 'Testemunho ' + (i + 1),
    style: {
      width: i === idx ? 22 : 8,
      height: 8,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: i === idx ? 'linear-gradient(135deg,#1d4ed8,#7c3aed)' : 'rgba(29,78,216,0.2)',
      transition: 'all .3s'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(idx + 1),
    "aria-label": "Seguinte",
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid rgba(29,78,216,0.2)',
      background: '#fff',
      color: '#1d4ed8',
      cursor: 'pointer',
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .2s'
    }
  }, "\u276F"))), /*#__PURE__*/React.createElement("div", {
    className: "rev",
    style: {
      marginTop: 44,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 'clamp(24px,5vw,56px)'
    }
  }, [{
    v: '+70',
    l: 'Clientes ativos'
  }, {
    v: '99.9%',
    l: 'Uptime garantido'
  }, {
    v: '14d',
    l: 'Entrega média'
  }, {
    v: '4.9',
    l: 'Valorização média'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      fontFamily: 'var(--disp)',
      fontSize: 'clamp(1.4rem,3vw,2rem)',
      fontWeight: 600,
      color: 'var(--txt)'
    }
  }, /*#__PURE__*/React.createElement(IconStar, null), s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--txt-m)',
      marginTop: 4,
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, s.l))))));
};
const StickyBar = () => {
  const [show, setShow] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setShow(window.scrollY > 500 && !dismissed);
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, [dismissed]);
  return /*#__PURE__*/React.createElement("div", {
    className: `sticky-bar${show ? ' show' : ''}`,
    style: {
      paddingBottom: 'env(safe-area-inset-bottom)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sticky-txt"
  }, /*#__PURE__*/React.createElement("strong", null, "Procura solu\xE7\xF5es digitais?"), " Fale connosco hoje."), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "btn btn-p btn-sm"
  }, "Consulta gratuita \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "sticky-x",
    onClick: () => {
      setDismissed(true);
      setShow(false);
    },
    "aria-label": "Fechar"
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
  const chips = ['Que serviços oferecem?', 'Quanto custa um website?', 'Quanto demora o projeto?', 'Quero falar com alguém'];
  const Bubble = function (props) {
    const m = props.m;
    const isBot = m.r === 'b';
    const hasWa = isBot && (m.t.toLowerCase().indexOf('whatsapp') !== -1 || m.t.toLowerCase().indexOf('contactar') !== -1 || m.t.toLowerCase().indexOf('escrever') !== -1);
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
        background: isBot ? '#f0f4ff' : 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
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
  }, "Online"))), /*#__PURE__*/React.createElement("button", {
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
    if (atBottom) window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });else window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  const base = {
    position: 'fixed',
    right: 24,
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
    "aria-label": atBottom ? 'Voltar ao topo' : 'Ir para baixo',
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.1) translateY(0)';
      e.currentTarget.style.boxShadow = '0 6px 28px rgba(29,78,216,0.6)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1) translateY(0)';
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
  "aria-label": "WhatsApp Nexo Digital"
}, /*#__PURE__*/React.createElement("svg", {
  width: "28",
  height: "28",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
})));
const CookieBanner = () => {
  const KEY = 'nd_cookie_consent';
  const [visible, setVisible] = React.useState(false);
  const [detail, setDetail] = React.useState(false);
  React.useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch (_) {}
  }, []);
  const accept = all => {
    try {
      localStorage.setItem(KEY, all ? 'all' : 'necessary');
    } catch (_) {}
    setVisible(false);
  };
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10000,
      padding: '0 0 env(safe-area-inset-bottom)',
      animation: 'slideUp .4s cubic-bezier(.16,1,.3,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto',
      maxWidth: 900,
      background: 'rgba(15,23,42,0.97)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px 20px 0 0',
      padding: '20px 24px',
      boxShadow: '0 -8px 40px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--disp)',
      fontSize: 14,
      fontWeight: 700,
      color: '#f1f5f9'
    }
  }, "Utiliza\xE7\xE3o de cookies")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.75,
      color: '#94a3b8',
      margin: 0
    }
  }, "Utilizamos cookies necess\xE1rias para o funcionamento do site e, com o seu consentimento, cookies anal\xEDticos para melhorar a experi\xEAncia.", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => setDetail(!detail),
    style: {
      background: 'none',
      border: 'none',
      color: '#60a5fa',
      cursor: 'pointer',
      fontSize: 12.5,
      padding: 0,
      textDecoration: 'underline'
    }
  }, detail ? 'Ocultar detalhes' : 'Ver detalhes')), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12,
      color: '#64748b',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#94a3b8'
    }
  }, "Necess\xE1rias:"), " Sess\xE3o, seguran\xE7a. N\xE3o requerem consentimento."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#94a3b8'
    }
  }, "Anal\xEDticos:"), " Google Analytics (an\xF3nimo), melhoria da navega\xE7\xE3o."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexShrink: 0,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => accept(false),
    style: {
      padding: '9px 16px',
      borderRadius: 9999,
      fontSize: 12.5,
      fontWeight: 600,
      cursor: 'pointer',
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.15)',
      color: '#94a3b8',
      transition: 'all .2s',
      whiteSpace: 'nowrap'
    }
  }, "S\xF3 necess\xE1rias"), /*#__PURE__*/React.createElement("button", {
    onClick: () => accept(true),
    style: {
      padding: '9px 18px',
      borderRadius: 9999,
      fontSize: 12.5,
      fontWeight: 600,
      cursor: 'pointer',
      background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
      border: 'none',
      color: '#fff',
      boxShadow: '0 4px 16px rgba(29,78,216,0.4)',
      transition: 'all .2s',
      whiteSpace: 'nowrap'
    }
  }, "Aceitar tudo"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 11,
      color: '#475569',
      textAlign: 'center'
    }
  }, "Ao continuar a navegar, aceita o uso de cookies necess\xE1rias. ", '·', ' ', /*#__PURE__*/React.createElement("a", {
    href: "privacidade.html",
    style: {
      color: '#60a5fa',
      textDecoration: 'none'
    }
  }, "Pol\xEDtica de privacidade"), ' · ', /*#__PURE__*/React.createElement("a", {
    href: "cookies.html",
    style: {
      color: '#60a5fa',
      textDecoration: 'none'
    }
  }, "Pol\xEDtica de cookies"))));
};
const App = () => {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(SaasSection, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ServicesSection, null), /*#__PURE__*/React.createElement(AppsCatalogSection, null), /*#__PURE__*/React.createElement(AgendaSection, null), /*#__PURE__*/React.createElement(ProcessSection, null), /*#__PURE__*/React.createElement(StatsSection, null), /*#__PURE__*/React.createElement(EcosystemSection, null), /*#__PURE__*/React.createElement(ClientsSection, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(TestimonialsSection, null), /*#__PURE__*/React.createElement(TeamSection, null), /*#__PURE__*/React.createElement(FaqSection, null), /*#__PURE__*/React.createElement(ContactSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyBar, null), /*#__PURE__*/React.createElement(ChatWidget, null), /*#__PURE__*/React.createElement(ScrollFab, null), /*#__PURE__*/React.createElement(WaFab, null), /*#__PURE__*/React.createElement(CookieBanner, null));
};
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
