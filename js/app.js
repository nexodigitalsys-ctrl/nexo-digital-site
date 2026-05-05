import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* ── SCROLL REVEAL ── */
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

/* ── SVG ICONS ── */
const IconCheck = () => /*#__PURE__*/_jsxs("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/_jsx("polyline", {
    points: "22 4 12 14.01 9 11.01"
  })]
});
const IconArrow = ({
  open
}) => /*#__PURE__*/_jsx("svg", {
  className: `faq-arrow${open ? ' open' : ''}`,
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  children: /*#__PURE__*/_jsx("path", {
    d: "M6 9l6 6 6-6"
  })
});

/* ── LOGO ── */
const Logo = () => /*#__PURE__*/_jsxs("a", {
  href: "#top",
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none'
  },
  children: [/*#__PURE__*/_jsxs("svg", {
    width: "68",
    height: "38",
    viewBox: "-5 -5 230 130",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      flexShrink: 0
    },
    children: [/*#__PURE__*/_jsx("defs", {
      children: /*#__PURE__*/_jsxs("linearGradient", {
        id: "ndg",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#1A56DB"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#00F0FF"
        })]
      })
    }), /*#__PURE__*/_jsx("path", {
      d: "M0 120 V0 L60 80 V0 H90 V120 H60 L30 40 V120 Z",
      fill: "url(#ndg)"
    }), /*#__PURE__*/_jsx("path", {
      d: "M110 0 H150 C200 0 220 30 220 60 C220 90 200 120 150 120 H110 Z M140 30 V90 H150 C180 90 190 75 190 60 C190 45 180 30 150 30 Z",
      fill: "url(#ndg)"
    })]
  }), /*#__PURE__*/_jsxs("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: [/*#__PURE__*/_jsx("span", {
      style: {
        fontFamily: 'var(--disp)',
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '.06em',
        color: 'var(--txt)'
      },
      children: "Nexo Digital"
    }), /*#__PURE__*/_jsx("span", {
      style: {
        fontSize: '8.5px',
        textTransform: 'uppercase',
        letterSpacing: '.22em',
        color: 'var(--txt-m)'
      },
      children: "Estudio Tech Premium"
    })]
  })]
});

/* ── NAVBAR ── */
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
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("nav", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 20px'
      },
      children: /*#__PURE__*/_jsx("div", {
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
        },
        children: /*#__PURE__*/_jsxs("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            padding: '11px 22px'
          },
          children: [/*#__PURE__*/_jsx(Logo, {}), /*#__PURE__*/_jsx("div", {
            style: {
              display: 'none'
            },
            className: "dnav",
            children: links.map(l => /*#__PURE__*/_jsx("a", {
              href: l.href,
              style: {
                fontSize: 13.5,
                fontWeight: 500,
                color: 'var(--txt-s)',
                textDecoration: 'none',
                transition: 'color .2s'
              },
              onMouseEnter: e => e.target.style.color = 'var(--txt)',
              onMouseLeave: e => e.target.style.color = 'var(--txt-s)',
              children: l.label
            }, l.href))
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              display: 'none'
            },
            className: "dnav",
            id: "nav-right",
            children: [/*#__PURE__*/_jsxs("div", {
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
              },
              children: [/*#__PURE__*/_jsx("span", {
                style: {
                  padding: '3px 8px',
                  borderRadius: 16,
                  background: 'var(--blue)',
                  color: '#fff'
                },
                children: "ES"
              }), /*#__PURE__*/_jsx("a", {
                href: "pt/",
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
                },
                children: "PT"
              })]
            }), /*#__PURE__*/_jsx("a", {
              href: "/contacto",
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
              },
              children: "Empezar \u2192"
            })]
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => setOp(!op),
            "aria-label": "Alternar men\xFA de navegaci\xF3n",
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
            className: "mbtn",
            children: op ? '✕' : '☰'
          })]
        })
      })
    }), op && /*#__PURE__*/_jsx("div", {
      style: {
        position: 'fixed',
        top: 82,
        left: 0,
        right: 0,
        zIndex: 99,
        padding: '0 20px'
      },
      children: /*#__PURE__*/_jsxs("div", {
        style: {
          maxWidth: 1200,
          margin: '0 auto',
          borderRadius: 22,
          border: '1px solid var(--bdr)',
          background: 'rgba(255,255,255,0.98)',
          padding: 20,
          boxShadow: 'var(--glow-s)',
          backdropFilter: 'blur(28px)'
        },
        children: [links.map(l => /*#__PURE__*/_jsx("a", {
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
          },
          children: l.label
        }, l.href)), /*#__PURE__*/_jsxs("div", {
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
          },
          children: [/*#__PURE__*/_jsx("span", {
            style: {
              padding: '4px 14px',
              borderRadius: 16,
              background: 'var(--blue)',
              color: '#fff'
            },
            children: "ES"
          }), /*#__PURE__*/_jsx("a", {
            href: "pt/",
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
            },
            children: "PT"
          })]
        }), /*#__PURE__*/_jsx("a", {
          href: "/contacto",
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
          },
          children: "Empezar \u2192"
        })]
      })
    }), /*#__PURE__*/_jsx("style", {
      children: `.dnav{display:flex!important;align-items:center;gap:26px;} @media(max-width:1024px){.dnav{display:none!important;}.mbtn{display:inline-flex!important;}} @media(min-width:1025px){.mbtn{display:none!important;}}`
    })]
  });
};

/* ── HERO ── */
const Hero = () => /*#__PURE__*/_jsxs("section", {
  className: "sec-hero",
  style: {
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center'
  },
  children: [/*#__PURE__*/_jsx("div", {
    className: "hero-bg"
  }), /*#__PURE__*/_jsx("div", {
    className: "aurora-layer"
  }), /*#__PURE__*/_jsx("div", {
    className: "orb orb1",
    "aria-hidden": "true"
  }), /*#__PURE__*/_jsx("div", {
    className: "orb orb2",
    "aria-hidden": "true"
  }), /*#__PURE__*/_jsx("div", {
    className: "orb orb3",
    "aria-hidden": "true"
  }), /*#__PURE__*/_jsx("div", {
    className: "ring",
    "aria-hidden": "true",
    style: {
      width: 760,
      height: 760,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      opacity: .6
    }
  }), /*#__PURE__*/_jsx("div", {
    className: "ring",
    "aria-hidden": "true",
    style: {
      width: 520,
      height: 520,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      borderColor: 'rgba(124,58,237,0.07)',
      opacity: .8
    }
  }), /*#__PURE__*/_jsxs("div", {
    className: "wrap",
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: "ha1",
      children: /*#__PURE__*/_jsxs("span", {
        className: "ew",
        style: {
          background: 'linear-gradient(135deg,rgba(29,78,216,0.1),rgba(124,58,237,0.08))',
          borderColor: 'rgba(29,78,216,0.22)'
        },
        children: [/*#__PURE__*/_jsx("span", {
          className: "dot"
        }), "Estudio Tech Premium"]
      })
    }), /*#__PURE__*/_jsxs("h1", {
      className: "h1 ha2",
      style: {
        marginTop: 28,
        maxWidth: '54rem',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      children: ["Construimos sistemas digitales que trabajan por tu empresa, ", /*#__PURE__*/_jsx("em", {
        children: "incluso cuando no est\xE1s."
      })]
    }), /*#__PURE__*/_jsx("p", {
      className: "ha3",
      style: {
        marginTop: 20,
        fontSize: 'clamp(15px,2.1vw,18.5px)',
        lineHeight: 1.9,
        color: 'var(--txt-s)',
        maxWidth: '42rem',
        margin: '20px auto 0'
      },
      children: "Webs, apps SaaS, CRM, automatizaciones, TPV y kioscos. Infraestructura segura y disponibilidad 24/7 para empresas en cualquier lugar."
    }), /*#__PURE__*/_jsxs("div", {
      className: "ha4",
      style: {
        marginTop: 34,
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap'
      },
      children: [/*#__PURE__*/_jsx("a", {
        href: "#saas",
        className: "btn btn-p",
        style: {
          background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
          boxShadow: '0 4px 24px rgba(29,78,216,0.35)'
        },
        children: "Ver productos SaaS \u2192"
      }), /*#__PURE__*/_jsx("a", {
        href: "#contacto",
        className: "btn btn-s",
        style: {
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(12px)'
        },
        children: "Hablar con nosotros"
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "ha5",
      style: {
        marginTop: 28,
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        flexWrap: 'wrap'
      },
      children: [['💻', '100% Remoto'], ['⚡', 'Respuesta en 24h'], ['🛡️', 'Infraestructura segura']].map(([ic, l]) => /*#__PURE__*/_jsxs("span", {
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
        },
        children: [ic, " ", l]
      }, l))
    }), /*#__PURE__*/_jsx("div", {
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
      },
      children: [['40+', 'Proyectos'], ['99.9%', 'Uptime'], ['< 2s', 'Velocidad'], ['24h', 'Respuesta']].map(([v, l], i) => /*#__PURE__*/_jsxs("div", {
        style: {
          padding: '18px 12px',
          textAlign: 'center',
          borderRight: i < 3 ? '1px solid rgba(29,78,216,0.09)' : 'none'
        },
        children: [/*#__PURE__*/_jsx("div", {
          style: {
            fontFamily: 'var(--disp)',
            fontSize: 'clamp(17px,2.2vw,23px)',
            fontWeight: 700,
            background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          },
          children: v
        }), /*#__PURE__*/_jsx("div", {
          style: {
            fontSize: 10,
            color: 'var(--txt-m)',
            marginTop: 4,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            fontWeight: 600
          },
          children: l
        })]
      }, l))
    })]
  })]
});

/* ── SOCIAL PROOF TICKER ── */
const Ticker = () => {
  const row1 = [{
    icon: '🚀',
    color: '#34d399',
    label: 'Web lanzada',
    loc: 'España',
    time: 'hace 2 días'
  }, {
    icon: '💬',
    color: '#60a5fa',
    label: 'Chatbot IA activado',
    loc: 'Portugal',
    time: 'hace 4 días'
  }, {
    icon: '🛒',
    color: '#a78bfa',
    label: 'Tienda online entregada',
    loc: 'España',
    time: 'hace 6 días'
  }, {
    icon: '⚙️',
    color: '#2dd4bf',
    label: 'CRM integrado con WhatsApp',
    loc: 'Europa',
    time: 'hace 8 días'
  }, {
    icon: '🔒',
    color: '#fb923c',
    label: 'Auditoría de seguridad',
    loc: 'España',
    time: 'hace 10 días'
  }, {
    icon: '📊',
    color: '#fbbf24',
    label: 'Dashboard analítico',
    loc: 'Portugal',
    time: 'hace 12 días'
  }];
  const row2 = [{
    icon: '✅',
    color: '#34d399',
    label: 'Nuevo cliente',
    loc: 'Portugal',
    time: 'hace 1 día'
  }, {
    icon: '📱',
    color: '#60a5fa',
    label: 'App publicada en stores',
    loc: 'España',
    time: 'hace 5 días'
  }, {
    icon: '🎯',
    color: '#a78bfa',
    label: 'Campaña Google Ads',
    loc: 'Europa',
    time: 'hace 7 días'
  }, {
    icon: '⚡',
    color: '#2dd4bf',
    label: 'Automatización B2B',
    loc: 'España',
    time: 'hace 9 días'
  }, {
    icon: '🌐',
    color: '#fb923c',
    label: 'Landing page premium',
    loc: 'Portugal',
    time: 'hace 11 días'
  }, {
    icon: '📈',
    color: '#fbbf24',
    label: 'SEO Audit · +67% visibilidad',
    loc: 'Europa',
    time: 'hace 13 días'
  }];
  const Item = ({
    icon,
    color,
    label,
    loc,
    time
  }) => /*#__PURE__*/_jsxs("div", {
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
    },
    children: [/*#__PURE__*/_jsx("div", {
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
      },
      children: icon
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        minWidth: 0
      },
      children: [/*#__PURE__*/_jsx("div", {
        style: {
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--txt)',
          whiteSpace: 'nowrap',
          lineHeight: 1.3
        },
        children: label
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          fontSize: 10,
          color: 'var(--txt-m)',
          marginTop: 1,
          whiteSpace: 'nowrap'
        },
        children: [loc, " \xB7 ", time]
      })]
    }), /*#__PURE__*/_jsx("div", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}`,
        flexShrink: 0,
        marginLeft: 2
      }
    })]
  });
  return /*#__PURE__*/_jsxs("div", {
    style: {
      padding: '18px 0 20px',
      borderTop: '1px solid var(--bdr)',
      borderBottom: '1px solid var(--bdr)',
      overflow: 'hidden',
      background: 'rgba(245,247,251,0.95)',
      maskImage: 'linear-gradient(90deg,transparent,black 6%,black 94%,transparent)'
    },
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        width: 'max-content',
        animation: 'ticker 38s linear infinite',
        marginBottom: 9
      },
      children: [...row1, ...row1].map((t, i) => /*#__PURE__*/_jsx(Item, {
        ...t
      }, i))
    }), /*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        width: 'max-content',
        animation: 'tickerR 42s linear infinite'
      },
      children: [...row2, ...row2].map((t, i) => /*#__PURE__*/_jsx(Item, {
        ...t
      }, i))
    })]
  });
};

/* ── TECH MARQUEE ── */
const Marquee = () => {
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
    t: 'Node.js',
    c: '#15803d'
  }, {
    t: 'PostgreSQL',
    c: '#1d4ed8'
  }, {
    t: 'Cloudflare',
    c: '#c2410c'
  }, {
    t: 'WordPress',
    c: '#1d4ed8'
  }, {
    t: 'PHP',
    c: '#6d28d9'
  }, {
    t: 'Flutter',
    c: '#0369a1'
  }, {
    t: 'Kotlin',
    c: '#6d28d9'
  }, {
    t: 'Swift',
    c: '#c2410c'
  }, {
    t: 'Firebase',
    c: '#b45309'
  }, {
    t: 'Docker',
    c: '#0369a1'
  }, {
    t: 'AWS',
    c: '#c2410c'
  }, {
    t: 'Supabase',
    c: '#065f46'
  }, {
    t: 'Stripe',
    c: '#6d28d9'
  }, {
    t: 'Ciberseguridad',
    c: '#b91c1c'
  }, {
    t: 'APIs REST',
    c: '#0f766e'
  }, {
    t: 'Automatización',
    c: '#065f46'
  }, {
    t: 'CI/CD',
    c: '#b45309'
  }, {
    t: 'Redis',
    c: '#b91c1c'
  }, {
    t: 'Vercel',
    c: '#1d4ed8'
  }];
  const d = [...items, ...items];
  return /*#__PURE__*/_jsx("div", {
    style: {
      padding: '28px 0',
      borderTop: '1px solid var(--bdr)',
      borderBottom: '1px solid var(--bdr)'
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)'
      },
      children: /*#__PURE__*/_jsx("div", {
        style: {
          display: 'flex',
          gap: 10,
          width: 'max-content',
          animation: 'marquee 36s linear infinite'
        },
        children: d.map((t, i) => /*#__PURE__*/_jsxs("span", {
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
            whiteSpace: 'nowrap',
            transition: 'all .2s'
          },
          children: [/*#__PURE__*/_jsx("span", {
            style: {
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: t.c,
              opacity: .8,
              flexShrink: 0
            }
          }), t.t]
        }, i))
      })
    })
  });
};

/* ── SAAS PRODUCTS ── */
const SaasSection = () => {
  const P = [{
    st: 'Disponible',
    sc: 'green',
    tag: 'SaaS',
    title: 'Nexo Invoicer',
    desc: 'Facturación moderna para empresas de construcción, ventas y pequeños negocios. Control financiero y emisión sin fricción.',
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
  }, {
    st: 'Disponible',
    sc: 'blue',
    tag: 'Software',
    title: 'TPV & Kioscos Software',
    desc: 'Software de punto de venta y kioscos digitales llave en mano para negocios físicos. Sin complicaciones técnicas.',
    feats: ['TPV táctil personalizado', 'Kioscos de autoservicio', 'Soporte y actualizaciones incluidas'],
    cta: 'Ver demo'
  }, {
    st: 'Disponible',
    sc: 'green',
    tag: 'Servicio',
    title: 'Landing Page Pro',
    desc: 'Páginas de aterrizaje de alta conversión con SEO técnico, diseño premium y optimización continua.',
    feats: ['Diseño mobile-first y rápido', 'SEO técnico desde el día 1', 'Integración analítica y CRO'],
    cta: 'Ver ejemplos'
  }];
  return /*#__PURE__*/_jsx("section", {
    id: "saas",
    className: "sec-lg",
    children: /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          children: "Productos SaaS"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          children: "Plataformas propias dise\xF1adas para escalar."
        }), /*#__PURE__*/_jsx("p", {
          className: "sh-d",
          children: "Software desarrollado por Nexo Digital para acelerar operaciones, ventas y presencia online."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "g3",
        children: P.map((p, i) => /*#__PURE__*/_jsxs("div", {
          className: `card rev d${i % 4 + 1}`,
          children: [/*#__PURE__*/_jsxs("div", {
            style: {
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 10
            },
            children: [/*#__PURE__*/_jsxs("span", {
              className: `sb ${p.sc}`,
              children: [/*#__PURE__*/_jsx("span", {
                className: "sb-dot"
              }), p.st]
            }), /*#__PURE__*/_jsx("span", {
              className: "tag",
              children: p.tag
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "card-h",
            children: p.title
          }), /*#__PURE__*/_jsx("p", {
            className: "card-p",
            children: p.desc
          }), /*#__PURE__*/_jsx("ul", {
            className: "fl",
            children: p.feats.map(f => /*#__PURE__*/_jsxs("li", {
              className: "fi",
              children: [/*#__PURE__*/_jsx(IconCheck, {}), /*#__PURE__*/_jsx("span", {
                children: f
              })]
            }, f))
          }), /*#__PURE__*/_jsx("div", {
            className: "card-cta",
            children: /*#__PURE__*/_jsx("a", {
              href: "#contacto",
              children: p.cta
            })
          })]
        }, p.title))
      })]
    })
  });
};

/* ── SERVICES ── */
const ServicesSection = () => {
  const S = [{
    icon: '🌐',
    title: 'Landing Page / Página Web',
    desc: 'Diseño y desarrollo web premium orientado a conversión, con SEO técnico desde el primer día.',
    feats: ['SEO técnico nacional e internacional', 'Diseño mobile-first', 'Core Web Vitals optimizados']
  }, {
    icon: '🛒',
    title: 'Tienda Online',
    desc: 'E-commerce completo con gestión de productos, pagos integrados y experiencia de compra optimizada.',
    feats: ['Catálogo y pasarela de pago', 'Gestión de pedidos e inventario', 'Integración con marketplaces']
  }, {
    icon: '🤖',
    title: 'Chatbot IA',
    desc: 'Asistentes virtuales con inteligencia artificial integrados en tu web o WhatsApp. Atención 24/7 sin coste de personal.',
    feats: ['IA conversacional personalizada', 'Integración web y WhatsApp', 'Redirige a ventas o soporte']
  }, {
    icon: '🧾',
    title: 'Facturación Digital',
    desc: 'Sistema de facturación para empresas de construcción, ventas y pequeños negocios. Rápido, claro y sin complicaciones.',
    feats: ['Facturas y recibos digitales', 'Gestión fiscal organizada', 'Para construcción, ventas y retail']
  }, {
    icon: '🖥️',
    title: 'TPV & Kioscos Digitales',
    desc: 'Software TPV e infraestructura de kioscos para pequeños y medianos negocios. Llave en mano.',
    feats: ['Software TPV personalizado', 'Kioscos de autoservicio', 'Soporte y mantenimiento incluido']
  }, {
    icon: '⚙️',
    title: 'Sistemas a Medida',
    desc: 'ERP, CRM, dashboards y portales internos diseñados para la operación real del negocio.',
    feats: ['ERP y CRM personalizados', 'Integraciones vía API REST', 'Arquitectura escalable']
  }, {
    icon: '📣',
    title: 'Tráfico Pago / Anuncios',
    desc: 'Campañas Google Ads y Meta Ads orientadas a resultados medibles para negocios locales y nacionales.',
    feats: ['Google Ads y Meta Ads', 'Segmentación geográfica precisa', 'Informes y optimización continua']
  }, {
    icon: '🔒',
    title: 'Ciberseguridad & Infraestructura',
    desc: 'Auditorías de seguridad, hardening, SSL, firewall Cloudflare y monitorización activa 24/7.',
    feats: ['Auditoría de seguridad web', 'Firewall y protección DDoS', 'Backups automáticos diarios']
  }];
  return /*#__PURE__*/_jsx("section", {
    id: "servicios",
    className: "sec-lg",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'
    },
    children: /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          children: "Servicios de desarrollo"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          children: "Lo que construimos para tu empresa."
        }), /*#__PURE__*/_jsx("p", {
          className: "sh-d",
          children: "Desde webs y tiendas online hasta sistemas internos, TPV y seguridad. Todo con criterio t\xE9cnico y foco en negocio."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "g3",
        children: S.map((s, i) => /*#__PURE__*/_jsxs("div", {
          className: `card rev d${i % 4 + 1}`,
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              fontSize: 30,
              marginBottom: 12
            },
            children: s.icon
          }), /*#__PURE__*/_jsx("div", {
            className: "card-h",
            style: {
              fontSize: 'clamp(15px,2vw,19px)'
            },
            children: s.title
          }), /*#__PURE__*/_jsx("p", {
            className: "card-p",
            children: s.desc
          }), /*#__PURE__*/_jsx("ul", {
            className: "fl",
            children: s.feats.map(f => /*#__PURE__*/_jsxs("li", {
              className: "fi",
              children: [/*#__PURE__*/_jsx(IconCheck, {}), /*#__PURE__*/_jsx("span", {
                children: f
              })]
            }, f))
          }), /*#__PURE__*/_jsx("div", {
            className: "card-cta",
            children: /*#__PURE__*/_jsx("a", {
              href: "#contacto",
              children: "Consultar \u2192"
            })
          })]
        }, s.title))
      })]
    })
  });
};

/* ── AGENDA CTA ── */
const AgendaSection = () => /*#__PURE__*/_jsx("section", {
  className: "sec",
  children: /*#__PURE__*/_jsx("div", {
    className: "wrap",
    children: /*#__PURE__*/_jsxs("div", {
      style: {
        borderRadius: 24,
        border: '1px solid rgba(52,211,153,0.18)',
        background: 'linear-gradient(135deg,rgba(5,150,105,0.07),rgba(26,86,219,0.07),rgba(124,58,237,0.05))',
        padding: 'clamp(32px,5vw,52px)',
        textAlign: 'center'
      },
      className: "rev",
      children: [/*#__PURE__*/_jsx("span", {
        className: "ew",
        style: {
          marginBottom: 20,
          display: 'inline-flex'
        },
        children: "\xBFHablamos?"
      }), /*#__PURE__*/_jsx("h2", {
        style: {
          fontFamily: 'var(--disp)',
          fontSize: 'clamp(1.7rem,3.5vw,2.5rem)',
          fontWeight: 600,
          letterSpacing: '-.015em',
          color: 'var(--txt)',
          marginTop: 16
        },
        children: "La primera conversaci\xF3n es gratis y sin compromiso."
      }), /*#__PURE__*/_jsx("p", {
        style: {
          marginTop: 14,
          fontSize: 'clamp(14px,1.9vw,17px)',
          lineHeight: 2,
          color: 'var(--txt-s)',
          maxWidth: '38rem',
          margin: '14px auto 0'
        },
        children: "Cu\xE9ntanos tu proyecto, tu problema o tu idea. En 24h te decimos si podemos ayudarte y c\xF3mo."
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          marginTop: 32,
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap'
        },
        children: [/*#__PURE__*/_jsx("a", {
          href: "#contacto",
          className: "btn btn-p",
          children: "Enviar consulta \u2192"
        }), /*#__PURE__*/_jsx("a", {
          href: "mailto:contacto@nexo-digital.app",
          className: "btn btn-teal",
          children: "\u2709 Escribir por email"
        }), /*#__PURE__*/_jsx("a", {
          href: "https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20me%20interesa%20vuestros%20servicios",
          target: "_blank",
          rel: "noreferrer",
          className: "btn btn-s",
          children: "\uD83D\uDCAC WhatsApp directo"
        })]
      }), /*#__PURE__*/_jsx("p", {
        style: {
          marginTop: 18,
          fontSize: 12,
          color: 'var(--txt-m)'
        },
        children: "Espa\xF1a \xB7 Portugal \xB7 Europa \u2014 Respuesta garantizada en menos de 24h"
      })]
    })
  })
});

/* ── STATS ── */
const StatsSection = () => {
  const S = [{
    v: '40+',
    l: 'Proyectos entregados',
    d: 'Sitios, plataformas y sistemas con foco en claridad y ejecución.'
  }, {
    v: '99.9%',
    l: 'Uptime garantizado',
    d: 'Monitorización continua con alertas inmediatas ante cualquier incidencia.'
  }, {
    v: '<2s',
    l: 'Velocidad web objetivo',
    d: 'Experiencias ligeras, lectura rápida y Core Web Vitals optimizados.'
  }, {
    v: '24h',
    l: 'Tiempo de respuesta',
    d: 'Acompañamiento directo y respuesta garantizada en menos de 24 horas.'
  }];
  return /*#__PURE__*/_jsx("section", {
    className: "sec",
    children: /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          children: "Confianza y m\xE9tricas"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          children: "Una forma de trabajar orientada a consistencia y rendimiento."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "g4",
        children: S.map((s, i) => /*#__PURE__*/_jsxs("div", {
          className: `card rev d${i + 1}`,
          style: {
            textAlign: 'center'
          },
          children: [/*#__PURE__*/_jsx("div", {
            className: "stat-v",
            children: s.v
          }), /*#__PURE__*/_jsx("div", {
            className: "stat-l",
            children: s.l
          }), /*#__PURE__*/_jsx("p", {
            className: "stat-d",
            children: s.d
          })]
        }, s.l))
      })]
    })
  });
};

/* ── CLIENTS ── */
const ClientsSection = () => {
  const C = ['Reformas Machado', 'Soltur Reformas', 'Santafe Reformas', 'Super Clim', 'Saviesa', 'Bresami', 'Viviane Cordeiro', 'Misme Electric', 'Ecants'];
  return /*#__PURE__*/_jsx("section", {
    id: "clientes",
    className: "sec",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.5),transparent)'
    },
    children: /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          children: "Empresas que conf\xEDan en nosotros"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          children: "Proyectos reales para negocios que apuestan por lo digital."
        }), /*#__PURE__*/_jsx("p", {
          className: "sh-d",
          children: "Hemos trabajado con empresas locales, e-commerces y negocios en expansi\xF3n en Espa\xF1a, Portugal y m\xE1s."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "client-wrap rev",
        children: C.map(c => /*#__PURE__*/_jsx("span", {
          className: "cpill",
          children: c
        }, c))
      }), /*#__PURE__*/_jsxs("div", {
        className: "cta-join rev",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              fontFamily: 'var(--disp)',
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--txt)'
            },
            children: "\xBFTu empresa podr\xEDa ser la siguiente?"
          }), /*#__PURE__*/_jsx("p", {
            style: {
              marginTop: 5,
              fontSize: 13,
              color: 'var(--txt-s)'
            },
            children: "\xDAltimos clientes registrados en los \xFAltimos 14 d\xEDas. \xDAnete a nuestra lista."
          })]
        }), /*#__PURE__*/_jsx("a", {
          href: "#contacto",
          className: "btn btn-p btn-sm",
          style: {
            flexShrink: 0
          },
          children: "Contactar ahora \u2192"
        })]
      })]
    })
  });
};

/* ── TEAM ── */
const TeamSection = () => {
  const T = [{
    i: 'E',
    g: 'linear-gradient(135deg,#1a56db,#0d9488)',
    n: 'Enoque Santos',
    r: 'System IT · Seguridad · Developer',
    b: 'Especialista en infraestructura IT, ciberseguridad y arquitectura de sistemas. Garantiza que cada proyecto se despliega sobre una base robusta, segura y escalable.',
    li: 'https://www.linkedin.com/in/enoque-santos/',
    portfolio: null
  }, {
    i: 'A',
    g: 'linear-gradient(135deg,#1e3a8a,#1a56db)',
    n: 'Abner Gabriel',
    r: 'Developer Senior · Web & Apps',
    b: 'Desarrollador senior con amplia experiencia en aplicaciones web de alto rendimiento. Transforma requisitos complejos en productos digitales claros y precisos.',
    li: 'https://www.linkedin.com/in/abner-gabriel-b830163a1',
    portfolio: 'https://meu-portifolio-silk-xi.vercel.app/'
  }, {
    i: 'L',
    g: 'linear-gradient(135deg,#0f766e,#0d9488)',
    n: 'Elias Mendes',
    r: 'Developer · Web & Apps · Empresario',
    b: 'Desarrollador de aplicaciones con visión empresarial. Combina criterio técnico y enfoque de negocio para construir productos que generan valor real y duradero.',
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
  return /*#__PURE__*/_jsx("section", {
    id: "equipo",
    className: "sec-lg",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'
    },
    children: /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          children: "Nuestro equipo"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          children: "Personas reales detr\xE1s de cada proyecto."
        }), /*#__PURE__*/_jsx("p", {
          className: "sh-d",
          children: "Equipo t\xE9cnico con experiencia en sistemas IT, seguridad, desarrollo y aplicaciones. Acompa\xF1amiento directo y soporte continuo en cada proyecto."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "g3",
        children: T.map((t, i) => /*#__PURE__*/_jsxs("div", {
          className: `card rev d${i + 1}`,
          children: [/*#__PURE__*/_jsx("div", {
            className: "t-av",
            style: {
              background: t.g
            },
            children: t.i
          }), /*#__PURE__*/_jsx("div", {
            className: "t-n",
            children: t.n
          }), /*#__PURE__*/_jsx("div", {
            className: "t-r",
            children: t.r
          }), /*#__PURE__*/_jsx("p", {
            className: "t-b",
            children: t.b
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              display: 'flex',
              gap: 8,
              marginTop: 14
            },
            children: [t.li && React.createElement('a', {
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
            }, React.createElement(IconPortfolio, null), 'Portafolio')]
          })]
        }, t.n))
      })]
    })
  });
};

/* ── FAQ ── */
const FaqSection = () => {
  const [open, setOpen] = React.useState(null);
  const Q = [{
    q: '¿Qué servicios de desarrollo web ofrecéis?',
    a: 'En Nexo Digital ofrecemos desarrollo web, tiendas online, aplicaciones SaaS, CRM con WhatsApp, chatbots IA, TPV, kioscos digitales, ciberseguridad y auditorías SEO. Trabajamos con empresas de toda España, Portugal y más allá.'
  }, {
    q: '¿Cuánto cuesta una página web?',
    a: 'El precio depende del proyecto. Una web informativa puede partir de 350€, una tienda online de 800€, y los sistemas a medida desde 1.500€. Contacta con nosotros para una propuesta personalizada sin compromiso y con respuesta en menos de 24h.'
  }, {
    q: '¿En cuánto tiempo desarrolláis una web?',
    a: 'El plazo habitual es de 2 a 6 semanas para webs estándar y de 4 a 12 semanas para sistemas más complejos. Siempre acordamos un calendario concreto antes de empezar para que tengas visibilidad completa del proceso.'
  }, {
    q: '¿Trabajáis en remoto o solo de forma presencial?',
    a: 'Trabajamos 100% en remoto con cualquier empresa, independientemente de su ubicación. Tenemos clientes en España, Portugal y Europa. Toda la comunicación y seguimiento es directo y sin intermediarios.'
  }, {
    q: '¿Qué es un sistema TPV y cómo puede ayudar a mi negocio?',
    a: 'Un TPV (Terminal Punto de Venta) es el software que gestiona las ventas, el inventario y los cobros de tu negocio. En Nexo Digital lo desarrollamos a medida o configuramos soluciones llave en mano para pequeños y medianos negocios.'
  }];
  return /*#__PURE__*/_jsx("section", {
    className: "sec",
    children: /*#__PURE__*/_jsx("div", {
      className: "wrap",
      children: /*#__PURE__*/_jsxs("div", {
        style: {
          maxWidth: 760,
          margin: '0 auto'
        },
        children: [/*#__PURE__*/_jsxs("div", {
          className: "sh c rev",
          children: [/*#__PURE__*/_jsx("span", {
            className: "ew",
            children: "Preguntas frecuentes"
          }), /*#__PURE__*/_jsx("h2", {
            className: "sh-t",
            children: "Todo lo que necesitas saber."
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "rev",
          children: Q.map((q, i) => /*#__PURE__*/_jsxs("div", {
            className: "faq-item",
            children: [/*#__PURE__*/_jsxs("button", {
              className: "faq-q",
              onClick: () => setOpen(open === i ? null : i),
              children: [/*#__PURE__*/_jsx("span", {
                children: q.q
              }), /*#__PURE__*/_jsx(IconArrow, {
                open: open === i
              })]
            }), open === i && /*#__PURE__*/_jsx("p", {
              className: "faq-a",
              children: q.a
            })]
          }, i))
        })]
      })
    })
  });
};

/* ── CONTACT FORM ── */
const ContactSection = () => {
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
          message: 'El servidor no respondió correctamente (' + r.status + ').'
        };
      }
      if (j.success) {
        setSt('ok');
        ref.current.reset();
        setFdata(null);
      } else {
        setMsg(j.message || 'Error al enviar.');
        setSt('err');
      }
    } catch (err) {
      setMsg('No se pudo conectar con el servidor.');
      setSt('err');
    }
  };
  return /*#__PURE__*/_jsxs("section", {
    id: "contacto",
    className: "sec-lg",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 40%,#0c1a3a 70%,#0f172a 100%)'
    },
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      },
      children: [/*#__PURE__*/_jsx("div", {
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
      }), /*#__PURE__*/_jsx("div", {
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
      }), /*#__PURE__*/_jsx("div", {
        style: {
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          top: '50%',
          left: '-60px',
          background: 'radial-gradient(circle,rgba(13,148,136,0.18) 0%,transparent 70%)',
          filter: 'blur(60px)'
        }
      }), /*#__PURE__*/_jsx("div", {
        style: {
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)'
        }
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      style: {
        position: 'relative'
      },
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          style: {
            background: 'rgba(255,255,255,0.08)',
            borderColor: 'rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.85)'
          },
          children: "Siguiente paso"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          style: {
            color: '#ffffff'
          },
          children: "\xBFTienes un proyecto en mente? Cu\xE9ntanoslo."
        }), /*#__PURE__*/_jsx("p", {
          className: "sh-d",
          style: {
            color: 'rgba(255,255,255,0.65)'
          },
          children: "Te respondemos en menos de 24h. Trabajamos con empresas de cualquier lugar."
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "fbox rev",
        style: {
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.1)'
        },
        children: [/*#__PURE__*/_jsxs("div", {
          className: "fmsg ok",
          style: {
            display: st === 'ok' ? 'flex' : 'none',
            alignItems: 'flex-start',
            gap: 10
          },
          children: [/*#__PURE__*/_jsx("span", {
            style: {
              fontSize: 18
            },
            children: "\u2713"
          }), /*#__PURE__*/_jsx("span", {
            children: "Consulta recibida. Te contactaremos en menos de 24 horas."
          })]
        }), st === 'err' && /*#__PURE__*/_jsxs("div", {
          style: {
            padding: '14px 16px',
            borderRadius: 12,
            background: 'rgba(239,68,68,0.12)',
            border: '1px solid rgba(239,68,68,0.3)',
            marginBottom: 16
          },
          children: [/*#__PURE__*/_jsxs("p", {
            style: {
              fontSize: 13,
              fontWeight: 600,
              color: '#fca5a5',
              margin: '0 0 10px'
            },
            children: ["\u26A0 ", msg]
          }), /*#__PURE__*/_jsx("p", {
            style: {
              fontSize: 12,
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 10px'
            },
            children: "Contacta con nosotros directamente:"
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap'
            },
            children: [/*#__PURE__*/_jsx("a", {
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
              },
              children: "\uD83D\uDCAC WhatsApp"
            }), /*#__PURE__*/_jsx("a", {
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
              },
              children: "\u2709 Enviar por email"
            })]
          })]
        }), /*#__PURE__*/_jsxs("form", {
          ref: ref,
          onSubmit: submit,
          children: [/*#__PURE__*/_jsxs("div", {
            className: "fr2",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "fg2",
              children: [/*#__PURE__*/_jsx("label", {
                className: "fl2",
                children: "Nombre *"
              }), /*#__PURE__*/_jsx("input", {
                name: "nombre",
                type: "text",
                className: "fi2",
                required: true,
                placeholder: "Tu nombre"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "fg2",
              children: [/*#__PURE__*/_jsx("label", {
                className: "fl2",
                children: "Empresa"
              }), /*#__PURE__*/_jsx("input", {
                name: "empresa",
                type: "text",
                className: "fi2",
                placeholder: "Tu empresa"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "fr2",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "fg2",
              children: [/*#__PURE__*/_jsx("label", {
                className: "fl2",
                children: "Email *"
              }), /*#__PURE__*/_jsx("input", {
                name: "email",
                type: "email",
                className: "fi2",
                required: true,
                placeholder: "tu@email.com"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "fg2",
              children: [/*#__PURE__*/_jsx("label", {
                className: "fl2",
                children: "Tel\xE9fono *"
              }), /*#__PURE__*/_jsx("input", {
                name: "telefono",
                type: "tel",
                className: "fi2",
                required: true,
                placeholder: "N\xFAmero de tel\xE9fono"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "fg2",
            children: [/*#__PURE__*/_jsx("label", {
              className: "fl2",
              children: "\xBFQu\xE9 servicio te interesa? *"
            }), /*#__PURE__*/_jsxs("select", {
              name: "servicio",
              className: "fs2",
              required: true,
              children: [/*#__PURE__*/_jsx("option", {
                value: "",
                children: "Selecciona una opci\xF3n"
              }), /*#__PURE__*/_jsxs("optgroup", {
                label: "\u2500\u2500 Productos SaaS \u2500\u2500",
                children: [/*#__PURE__*/_jsx("option", {
                  value: "Nexo Invoicer",
                  children: "Nexo Invoicer (Facturaci\xF3n)"
                }), /*#__PURE__*/_jsx("option", {
                  value: "SpeakEasily",
                  children: "SpeakEasily (Comunicaci\xF3n digital)"
                }), /*#__PURE__*/_jsx("option", {
                  value: "Nexo CRM & WhatsApp",
                  children: "Nexo CRM & WhatsApp"
                }), /*#__PURE__*/_jsx("option", {
                  value: "Nexo SEO Audit",
                  children: "Nexo SEO Audit"
                })]
              }), /*#__PURE__*/_jsxs("optgroup", {
                label: "\u2500\u2500 Servicios \u2500\u2500",
                children: [/*#__PURE__*/_jsx("option", {
                  value: "Landing Page / P\xE1gina Web",
                  children: "Landing Page / P\xE1gina Web"
                }), /*#__PURE__*/_jsx("option", {
                  value: "Tienda Online",
                  children: "Tienda Online"
                }), /*#__PURE__*/_jsx("option", {
                  value: "TPV & Kioscos",
                  children: "TPV & Kioscos Digitales"
                }), /*#__PURE__*/_jsx("option", {
                  value: "Sistemas a Medida",
                  children: "Sistemas a Medida (ERP/CRM)"
                }), /*#__PURE__*/_jsx("option", {
                  value: "Tr\xE1fico pago / Anuncios",
                  children: "Tr\xE1fico Pago / Anuncios"
                }), /*#__PURE__*/_jsx("option", {
                  value: "Ciberseguridad",
                  children: "Ciberseguridad & Infraestructura"
                }), /*#__PURE__*/_jsx("option", {
                  value: "Otro",
                  children: "Otro / No definido"
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "fr2",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "fg2",
              children: [/*#__PURE__*/_jsx("label", {
                className: "fl2",
                children: "Presupuesto aproximado"
              }), /*#__PURE__*/_jsxs("select", {
                name: "presupuesto",
                className: "fs2",
                children: [/*#__PURE__*/_jsx("option", {
                  value: "",
                  children: "Selecciona un rango"
                }), /*#__PURE__*/_jsx("option", {
                  children: "350\u20AC \u2013 800\u20AC"
                }), /*#__PURE__*/_jsx("option", {
                  children: "800\u20AC \u2013 1.500\u20AC"
                }), /*#__PURE__*/_jsx("option", {
                  children: "1.500\u20AC \u2013 3.000\u20AC"
                }), /*#__PURE__*/_jsx("option", {
                  children: "3.000\u20AC \u2013 5.000\u20AC"
                }), /*#__PURE__*/_jsx("option", {
                  children: "M\xE1s de 5.000\u20AC"
                }), /*#__PURE__*/_jsx("option", {
                  children: "Pago mensual"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "fg2",
              children: [/*#__PURE__*/_jsx("label", {
                className: "fl2",
                children: "\xBFCu\xE1ndo lo necesitas?"
              }), /*#__PURE__*/_jsxs("select", {
                name: "timeline",
                className: "fs2",
                children: [/*#__PURE__*/_jsx("option", {
                  value: "",
                  children: "Selecciona"
                }), /*#__PURE__*/_jsx("option", {
                  children: "Lo antes posible"
                }), /*#__PURE__*/_jsx("option", {
                  children: "En 1 mes"
                }), /*#__PURE__*/_jsx("option", {
                  children: "En 2\u20133 meses"
                }), /*#__PURE__*/_jsx("option", {
                  children: "Sin prisa"
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "fg2",
            children: [/*#__PURE__*/_jsx("label", {
              className: "fl2",
              children: "Describe tu proyecto *"
            }), /*#__PURE__*/_jsx("textarea", {
              name: "descripcion",
              className: "ft2",
              required: true,
              placeholder: "\xBFQu\xE9 necesitas? \xBFQu\xE9 objetivos tienes?"
            })]
          }), /*#__PURE__*/_jsx("button", {
            type: "submit",
            className: "btn btn-p",
            style: {
              width: '100%',
              fontSize: 15,
              padding: '14px 24px',
              background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
              boxShadow: '0 4px 24px rgba(37,99,235,0.5)'
            },
            disabled: st === 'loading',
            children: st === 'loading' ? 'Enviando…' : 'Enviar consulta →'
          }), /*#__PURE__*/_jsx("p", {
            style: {
              marginTop: 11,
              fontSize: 11.5,
              color: 'rgba(255,255,255,0.4)',
              textAlign: 'center'
            },
            children: "Respuesta en <24h \xB7 contacto@nexo-digital.app"
          })]
        })]
      })]
    })]
  });
};

/* ── FOOTER ── */
const Footer = () => /*#__PURE__*/_jsx("footer", {
  className: "footer",
  children: /*#__PURE__*/_jsxs("div", {
    className: "wrap",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "fg3",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx(Logo, {}), /*#__PURE__*/_jsx("p", {
          style: {
            marginTop: 16,
            fontSize: 13.5,
            lineHeight: 1.85,
            color: 'var(--txt-s)',
            maxWidth: 250
          },
          children: "Soluciones digitales con dise\xF1o premium, claridad t\xE9cnica y foco en negocio. Espa\xF1a \xB7 Portugal \xB7 Europa."
        }), /*#__PURE__*/_jsx("div", {
          style: {
            marginTop: 16,
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          },
          children: ['LinkedIn', 'Instagram', 'X'].map(s => /*#__PURE__*/_jsx("a", {
            href: "#",
            className: "badge",
            style: {
              fontSize: 10
            },
            children: s
          }, s))
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("div", {
          className: "fh",
          children: "Productos SaaS"
        }), ['Nexo Invoicer', 'SpeakEasily', 'Nexo CRM & WhatsApp', 'Nexo SEO Audit'].map(l => /*#__PURE__*/_jsx("a", {
          href: "#saas",
          className: "flk",
          children: l
        }, l))]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("div", {
          className: "fh",
          children: "Servicios"
        }), ['Landing Page / Web', 'Tienda Online', 'TPV & Kioscos', 'Sistemas a Medida', 'Ciberseguridad'].map(l => /*#__PURE__*/_jsx("a", {
          href: "#servicios",
          className: "flk",
          children: l
        }, l))]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("div", {
          className: "fh",
          children: "Contacto"
        }), /*#__PURE__*/_jsx("a", {
          href: "mailto:contacto@nexo-digital.app",
          className: "flk",
          children: "contacto@nexo-digital.app"
        }), /*#__PURE__*/_jsx("span", {
          className: "flk",
          style: {
            cursor: 'default'
          },
          children: "Espa\xF1a \xB7 Portugal \xB7 Europa"
        }), /*#__PURE__*/_jsx("a", {
          href: "#equipo",
          className: "flk",
          style: {
            marginTop: 12
          },
          children: "Nuestro equipo"
        }), /*#__PURE__*/_jsx("a", {
          href: "#clientes",
          className: "flk",
          children: "Clientes"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "fbot",
      children: [/*#__PURE__*/_jsx("span", {
        children: "\xA9 2026 Nexo Digital"
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'flex-end'
        },
        children: [/*#__PURE__*/_jsx("a", {
          href: "/aviso-legal",
          className: "flk",
          style: {
            fontSize: 12
          },
          children: "Aviso Legal"
        }), /*#__PURE__*/_jsx("a", {
          href: "/privacidad",
          className: "flk",
          style: {
            fontSize: 12
          },
          children: "Privacidad"
        }), /*#__PURE__*/_jsx("a", {
          href: "cookies.html",
          className: "flk",
          style: {
            fontSize: 12
          },
          children: "Cookies"
        })]
      })]
    })]
  })
});

/* ── STICKY BAR ── */
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
  return /*#__PURE__*/_jsx("div", {
    className: `sticky-bar${show ? ' show' : ''}`,
    style: {
      paddingBottom: 'env(safe-area-inset-bottom)'
    },
    children: /*#__PURE__*/_jsxs("div", {
      className: "sticky-inner",
      children: [/*#__PURE__*/_jsxs("p", {
        className: "sticky-txt",
        children: [/*#__PURE__*/_jsx("strong", {
          children: "\xBFBuscas soluciones digitales?"
        }), " Habla con nosotros hoy."]
      }), /*#__PURE__*/_jsx("a", {
        href: "#contacto",
        className: "btn btn-p btn-sm",
        children: "Consulta gratuita \u2192"
      }), /*#__PURE__*/_jsx("button", {
        className: "sticky-x",
        onClick: () => {
          setDismissed(true);
          setShow(false);
        },
        "aria-label": "Cerrar",
        children: "\u2715"
      })]
    })
  });
};

/* ── SCROLL FAB ── */
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
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: history.map(m => ({
            role: m.r === 'u' ? 'user' : 'assistant',
            content: m.t
          }))
        })
      });
      const data = await res.json();
      setMsgs(function (h) {
        return [...h, {
          r: 'b',
          t: data.reply || 'Lo siento, ha ocurrido un error. Puedes escribirnos directamente.'
        }];
      });
    } catch (e) {
      setMsgs(function (h) {
        return [...h, {
          r: 'b',
          t: 'Error de conexion. Escribenos por WhatsApp o email y te respondemos enseguida.'
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
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [open && /*#__PURE__*/_jsxs("div", {
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
      },
      children: [/*#__PURE__*/_jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 14px',
          background: 'linear-gradient(135deg,#1d4ed8,#1e3a8a)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          flexShrink: 0
        },
        children: [/*#__PURE__*/_jsx("div", {
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
          },
          children: "\uD83E\uDD16"
        }), /*#__PURE__*/_jsxs("div", {
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              fontWeight: 700,
              fontSize: 13,
              color: '#ffffff'
            },
            children: "Nexo Digital"
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              marginTop: 1
            },
            children: [/*#__PURE__*/_jsx("div", {
              style: {
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 5px #4ade80'
              }
            }), /*#__PURE__*/_jsx("span", {
              style: {
                fontSize: 10.5,
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 500
              },
              children: "En l\xEDnea"
            })]
          })]
        }), /*#__PURE__*/_jsx("button", {
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
          },
          children: "\u2715"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          flex: 1,
          overflowY: 'auto',
          padding: '14px 12px 6px',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0,0,0,0.1) transparent'
        },
        children: [msgs.map(function (m, i) {
          return React.createElement(Bubble, {
            key: i,
            m: m
          });
        }), busy && /*#__PURE__*/_jsx("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: 8
          },
          children: /*#__PURE__*/_jsx("div", {
            style: {
              padding: '10px 14px',
              borderRadius: '4px 16px 16px 16px',
              background: '#f0f4ff',
              border: '1px solid rgba(29,78,216,0.12)',
              display: 'flex',
              gap: 4,
              alignItems: 'center'
            },
            children: [0, 1, 2].map(function (i) {
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
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          ref: endRef
        })]
      }), msgs.length <= 1 && !busy && /*#__PURE__*/_jsx("div", {
        style: {
          padding: '4px 12px 8px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 5
        },
        children: chips.map(function (c) {
          return /*#__PURE__*/_jsx("button", {
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
            },
            children: c
          }, c);
        })
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          padding: '8px 10px',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          gap: 7,
          alignItems: 'center',
          flexShrink: 0
        },
        children: [/*#__PURE__*/_jsx("input", {
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
        }), /*#__PURE__*/_jsx("button", {
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
          },
          children: "\u27A4"
        })]
      })]
    }), /*#__PURE__*/_jsx("button", {
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
      },
      children: open ? React.createElement('svg', {
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
      }))
    })]
  });
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
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("button", {
      onClick: handleClick,
      style: {
        ...base,
        bottom: 148
      },
      "aria-label": atBottom ? 'Volver arriba' : 'Ir abajo',
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'scale(1.1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(29,78,216,0.6)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(29,78,216,0.45)';
      },
      children: /*#__PURE__*/_jsx("svg", {
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
        },
        children: /*#__PURE__*/_jsx("path", {
          d: "M18 15l-6-6-6 6"
        })
      })
    })
  });
};

/* ── WHATSAPP FAB ── */
const WaFab = () => /*#__PURE__*/_jsx("a", {
  href: "https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20me%20interesa%20vuestros%20servicios",
  target: "_blank",
  rel: "noreferrer",
  className: "wa-fab",
  "aria-label": "WhatsApp Nexo Digital",
  children: /*#__PURE__*/_jsx("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/_jsx("path", {
      d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    })
  })
});

/* ── PROCESS ── */
const ProcessSection = () => {
  const steps = [{
    n: '01',
    color: 'linear-gradient(135deg,#059669,#0d9488)',
    icon: '💬',
    title: 'Consulta gratuita',
    desc: 'Cuéntanos tu proyecto. Te escuchamos sin compromiso y en 24h te decimos exactamente qué podemos hacer y cuánto costaría.'
  }, {
    n: '02',
    color: 'linear-gradient(135deg,#7c3aed,#1a56db)',
    icon: '📋',
    title: 'Propuesta técnica',
    desc: 'Recibes un documento con alcance, tecnología, plazos y precio cerrado. Sin costes ocultos ni sorpresas al final.'
  }, {
    n: '03',
    color: 'linear-gradient(135deg,#1a56db,#0d9488)',
    icon: '⚙️',
    title: 'Desarrollo iterativo',
    desc: 'Construimos en sprints con entregas visibles. Tienes acceso a cada avance y canales directos con el equipo.'
  }, {
    n: '04',
    color: 'linear-gradient(135deg,#d97706,#059669)',
    icon: '🚀',
    title: 'Lanzamiento y soporte',
    desc: 'Desplegamos con CI/CD, monitorización 24/7 y te acompañamos con soporte post-lanzamiento incluido.'
  }];
  return /*#__PURE__*/_jsx("section", {
    id: "proceso",
    className: "sec-lg",
    children: /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          style: {
            color: 'var(--emerald-s)',
            borderColor: 'rgba(52,211,153,0.2)'
          },
          children: "Nuestro proceso"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          children: "De la idea al lanzamiento, sin fricci\xF3n."
        }), /*#__PURE__*/_jsx("p", {
          className: "sh-d",
          children: "Un proceso claro, iterativo y con comunicaci\xF3n directa en cada fase."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "g2",
        style: {
          maxWidth: 860,
          margin: '0 auto'
        },
        children: steps.map((s, i) => /*#__PURE__*/_jsxs("div", {
          className: `card rev d${i % 4 + 1}`,
          style: {
            flexDirection: 'row',
            gap: 18,
            alignItems: 'flex-start'
          },
          children: [/*#__PURE__*/_jsx("div", {
            className: "proc-icon",
            style: {
              background: s.color
            },
            children: s.icon
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsxs("div", {
              className: "proc-num",
              children: ["Paso ", s.n]
            }), /*#__PURE__*/_jsx("div", {
              className: "card-h",
              style: {
                marginTop: 0
              },
              children: s.title
            }), /*#__PURE__*/_jsx("p", {
              className: "card-p",
              style: {
                marginTop: 6
              },
              children: s.desc
            })]
          })]
        }, s.title))
      })]
    })
  });
};

/* ── TESTIMONIALS ── */
const TestimonialsSection = () => {
  const T = [{
    q: 'Pasamos de perder leads por no responder a tiempo a tener un chatbot que los atiende en segundos. En 6 semanas logramos un +38% en conversiones.',
    author: 'Carlos M.',
    role: 'Taller mecánico',
    initials: 'CM',
    color: 'linear-gradient(135deg,#059669,#0d9488)'
  }, {
    q: 'La auditoría técnica nos reveló un 67% de rebote en mobile. En 2 semanas lo bajamos al 22%. Las ventas subieron ese mismo mes.',
    author: 'Sara L.',
    role: 'E-commerce',
    initials: 'SL',
    color: 'linear-gradient(135deg,#7c3aed,#1a56db)'
  }, {
    q: 'Conectaron nuestro CRM con el sistema de facturación. 15 horas semanales de trabajo manual eliminadas. El ROI se pagó en el primer mes.',
    author: 'Javier R.',
    role: 'Consultoría B2B · Madrid',
    initials: 'JR',
    color: 'linear-gradient(135deg,#1e3a8a,#0d9488)'
  }];
  return /*#__PURE__*/_jsx("section", {
    className: "sec-lg",
    style: {
      background: 'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'
    },
    children: /*#__PURE__*/_jsxs("div", {
      className: "wrap",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "sh c rev",
        children: [/*#__PURE__*/_jsx("span", {
          className: "ew",
          style: {
            color: 'var(--amber-s)',
            borderColor: 'rgba(251,191,36,0.2)'
          },
          children: "Resultados reales"
        }), /*#__PURE__*/_jsx("h2", {
          className: "sh-t",
          children: "Lo que dicen nuestros clientes."
        }), /*#__PURE__*/_jsx("p", {
          className: "sh-d",
          children: "Empresas reales. N\xFAmeros reales. Sin testimonios de stock."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "g3",
        children: T.map((t, i) => /*#__PURE__*/_jsxs("div", {
          className: `card rev d${i + 1}`,
          style: {
            display: 'flex',
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/_jsx("div", {
            className: "test-stars",
            children: '★★★★★'.split('').map((s, j) => /*#__PURE__*/_jsx("span", {
              className: "test-star",
              children: s
            }, j))
          }), /*#__PURE__*/_jsxs("p", {
            className: "test-q",
            children: ["\u201C", t.q, "\u201D"]
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 'auto'
            },
            children: [/*#__PURE__*/_jsx("div", {
              className: "test-av",
              style: {
                background: t.color
              },
              children: t.initials
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--txt)'
                },
                children: t.author
              }), /*#__PURE__*/_jsx("div", {
                style: {
                  fontSize: 11,
                  color: 'var(--txt-m)',
                  marginTop: 2
                },
                children: t.role
              })]
            })]
          })]
        }, t.author))
      }), /*#__PURE__*/_jsx("div", {
        className: "rev",
        style: {
          marginTop: 44,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'clamp(24px,5vw,56px)'
        },
        children: [{
          v: '+50',
          l: 'Clientes activos'
        }, {
          v: '99.9%',
          l: 'Uptime garantizado'
        }, {
          v: '14d',
          l: 'Entrega media'
        }, {
          v: '4.9★',
          l: 'Valoración media'
        }].map(s => /*#__PURE__*/_jsxs("div", {
          style: {
            textAlign: 'center'
          },
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              fontFamily: 'var(--disp)',
              fontSize: 'clamp(1.4rem,3vw,2rem)',
              fontWeight: 600,
              color: 'var(--txt)'
            },
            children: s.v
          }), /*#__PURE__*/_jsx("div", {
            style: {
              fontSize: 12,
              color: 'var(--txt-m)',
              marginTop: 4,
              textTransform: 'uppercase',
              letterSpacing: '.1em'
            },
            children: s.l
          })]
        }, s.l))
      })]
    })
  });
};

/* ── COOKIE BANNER ── */
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
  return /*#__PURE__*/_jsx("div", {
    style: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10000,
      padding: '0 0 env(safe-area-inset-bottom)',
      animation: 'slideUp .4s cubic-bezier(.16,1,.3,1)'
    },
    children: /*#__PURE__*/_jsxs("div", {
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
      },
      children: [/*#__PURE__*/_jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          gap: 16,
          flexWrap: 'wrap'
        },
        children: [/*#__PURE__*/_jsxs("div", {
          style: {
            flex: 1,
            minWidth: 240
          },
          children: [/*#__PURE__*/_jsxs("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6
            },
            children: [/*#__PURE__*/_jsx("span", {
              style: {
                fontSize: 16
              },
              children: "\uD83C\uDF6A"
            }), /*#__PURE__*/_jsx("span", {
              style: {
                fontFamily: 'var(--disp)',
                fontSize: 14,
                fontWeight: 700,
                color: '#f1f5f9'
              },
              children: "Uso de cookies"
            })]
          }), /*#__PURE__*/_jsxs("p", {
            style: {
              fontSize: 12.5,
              lineHeight: 1.75,
              color: '#94a3b8',
              margin: 0
            },
            children: ["Usamos cookies necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies anal\xEDticas para mejorar la experiencia.", ' ', /*#__PURE__*/_jsx("button", {
              onClick: () => setDetail(!detail),
              style: {
                background: 'none',
                border: 'none',
                color: '#60a5fa',
                cursor: 'pointer',
                fontSize: 12.5,
                padding: 0,
                textDecoration: 'underline'
              },
              children: detail ? 'Ocultar detalles' : 'Ver detalles'
            })]
          }), detail && /*#__PURE__*/_jsxs("div", {
            style: {
              marginTop: 10,
              fontSize: 12,
              color: '#64748b',
              lineHeight: 1.7
            },
            children: [/*#__PURE__*/_jsxs("p", {
              style: {
                margin: '0 0 4px'
              },
              children: [/*#__PURE__*/_jsx("strong", {
                style: {
                  color: '#94a3b8'
                },
                children: "Necesarias:"
              }), " Sesi\xF3n, seguridad. No requieren consentimiento."]
            }), /*#__PURE__*/_jsxs("p", {
              style: {
                margin: 0
              },
              children: [/*#__PURE__*/_jsx("strong", {
                style: {
                  color: '#94a3b8'
                },
                children: "Anal\xEDticas:"
              }), " Google Analytics (an\xF3nimo), mejora de navegaci\xF3n."]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          style: {
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            flexShrink: 0,
            flexWrap: 'wrap'
          },
          children: [/*#__PURE__*/_jsx("button", {
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
            },
            children: "Solo necesarias"
          }), /*#__PURE__*/_jsx("button", {
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
            },
            children: "Aceptar todo"
          })]
        })]
      }), /*#__PURE__*/_jsxs("p", {
        style: {
          marginTop: 10,
          fontSize: 11,
          color: '#475569',
          textAlign: 'center'
        },
        children: ["Al continuar navegando, aceptas el uso de cookies necesarias. ", '·', ' ', /*#__PURE__*/_jsx("a", {
          href: "privacidad.html",
          style: {
            color: '#60a5fa',
            textDecoration: 'none'
          },
          children: "Pol\xEDtica de privacidad"
        }), ' · ', /*#__PURE__*/_jsx("a", {
          href: "cookies.html",
          style: {
            color: '#60a5fa',
            textDecoration: 'none'
          },
          children: "Pol\xEDtica de cookies"
        })]
      })]
    })
  });
};

/* ── APP ── */
const App = () => {
  useReveal();
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Navbar, {}), /*#__PURE__*/_jsx(Hero, {}), /*#__PURE__*/_jsx(Ticker, {}), /*#__PURE__*/_jsx(Marquee, {}), /*#__PURE__*/_jsx(SaasSection, {}), /*#__PURE__*/_jsx("hr", {}), /*#__PURE__*/_jsx(ServicesSection, {}), /*#__PURE__*/_jsx(AgendaSection, {}), /*#__PURE__*/_jsx(ProcessSection, {}), /*#__PURE__*/_jsx(StatsSection, {}), /*#__PURE__*/_jsx(ClientsSection, {}), /*#__PURE__*/_jsx("hr", {}), /*#__PURE__*/_jsx(TestimonialsSection, {}), /*#__PURE__*/_jsx(TeamSection, {}), /*#__PURE__*/_jsx(FaqSection, {}), /*#__PURE__*/_jsx(ContactSection, {}), /*#__PURE__*/_jsx(Footer, {}), /*#__PURE__*/_jsx(StickyBar, {}), /*#__PURE__*/_jsx(ChatWidget, {}), /*#__PURE__*/_jsx(ScrollFab, {}), /*#__PURE__*/_jsx(WaFab, {}), /*#__PURE__*/_jsx(CookieBanner, {})]
  });
};
ReactDOM.render(/*#__PURE__*/_jsx(App, {}), document.getElementById('root'));
