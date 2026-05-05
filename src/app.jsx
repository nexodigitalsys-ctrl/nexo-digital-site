

/* â”€â”€ SCROLL REVEAL â”€â”€ */
const useReveal = () => {
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); }),
      { threshold:.1, rootMargin:'0px 0px -40px 0px' }
    );
    document.querySelectorAll('.rev').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

/* â”€â”€ SVG ICONS â”€â”€ */
const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconArrow = ({open}) => (
  <svg className={`faq-arrow${open?' open':''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
);

/* â”€â”€ LOGO â”€â”€ */
const Logo = () => (
  <a href="#top" style={{display:'inline-flex',alignItems:'center',gap:10,textDecoration:'none'}}>
    <svg width="68" height="38" viewBox="-5 -5 230 130" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
      <defs><linearGradient id="ndg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1A56DB"/><stop offset="100%" stopColor="#00F0FF"/></linearGradient></defs>
      <path d="M0 120 V0 L60 80 V0 H90 V120 H60 L30 40 V120 Z" fill="url(#ndg)"/>
      <path d="M110 0 H150 C200 0 220 30 220 60 C220 90 200 120 150 120 H110 Z M140 30 V90 H150 C180 90 190 75 190 60 C190 45 180 30 150 30 Z" fill="url(#ndg)"/>
    </svg>
    <div style={{display:'flex',flexDirection:'column'}}>
      <span style={{fontFamily:'var(--disp)',fontSize:16,fontWeight:600,letterSpacing:'.06em',color:'var(--txt)'}}>Nexo Digital</span>
      <span style={{fontSize:'8.5px',textTransform:'uppercase',letterSpacing:'.22em',color:'var(--txt-m)'}}>Estudio Tech Premium</span>
    </div>
  </a>
);

/* â”€â”€ NAVBAR â”€â”€ */
const Navbar = () => {
  const [sc,setSc] = React.useState(false);
  const [op,setOp] = React.useState(false);
  React.useEffect(() => {
    const fn=()=>setSc(window.scrollY>14);
    fn(); window.addEventListener('scroll',fn,{passive:true});
    return ()=>window.removeEventListener('scroll',fn);
  },[]);
  const links=[
    {href:'servicios.html',label:'Servicios'},
    {href:'proceso.html',label:'Proceso'},
    {href:'clientes.html',label:'Clientes'},
    {href:'equipo.html',label:'Equipo'},
    {href:'contacto.html',label:'Contacto'},
  ];
  return (
    <>
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,padding:'0 20px'}}>
      <div style={{maxWidth:1200,margin:'0 auto',marginTop:14,borderRadius:28,border:`1px solid ${sc?'var(--bdr)':'transparent'}`,background:sc?'rgba(255,255,255,0.97)':'transparent',boxShadow:sc?'0 2px 20px rgba(0,0,0,0.07)':'none',backdropFilter:sc?'blur(28px)':'none',transition:'all .3s'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:20,padding:'11px 22px'}}>
          <Logo/>
          <div style={{display:'none'}} className="dnav">
            {links.map(l=><a key={l.href} href={l.href} style={{fontSize:13.5,fontWeight:500,color:'var(--txt-s)',textDecoration:'none',transition:'color .2s'}} onMouseEnter={e=>e.target.style.color='var(--txt)'} onMouseLeave={e=>e.target.style.color='var(--txt-s)'}>{l.label}</a>)}
          </div>
          <div style={{display:'none'}} className="dnav" id="nav-right">
            <div style={{display:'flex',alignItems:'center',gap:1,borderRadius:20,border:'1px solid rgba(29,78,216,0.18)',padding:'3px 4px',background:'rgba(29,78,216,0.05)',fontSize:11.5,fontWeight:600}}>
              <span style={{padding:'3px 8px',borderRadius:16,background:'var(--blue)',color:'#fff'}}>ES</span>
              <a href="pt/" onClick={function(){try{localStorage.setItem('nd-lang','pt');}catch(e){}}} style={{padding:'3px 8px',borderRadius:16,color:'var(--txt-s)',textDecoration:'none'}}>PT</a>
            </div>
            <a href="/contacto" style={{display:'inline-flex',alignItems:'center',borderRadius:9999,background:'var(--blue)',padding:'9px 20px',fontSize:13.5,fontWeight:600,color:'#fff',textDecoration:'none',transition:'all .2s'}}>Empezar â†’</a>
          </div>
          <button onClick={()=>setOp(!op)} aria-label="Alternar menÃº de navegaciÃ³n" style={{display:'none',width:40,height:40,alignItems:'center',justifyContent:'center',borderRadius:'50%',border:'1px solid var(--bdr)',background:'rgba(255,255,255,0.93)',color:'var(--txt)',cursor:'pointer',fontSize:17}} className="mbtn">{op?'âœ•':'â˜°'}</button>
        </div>
      </div>
    </nav>
    {op&&(
      <div style={{position:'fixed',top:82,left:0,right:0,zIndex:99,padding:'0 20px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',borderRadius:22,border:'1px solid var(--bdr)',background:'rgba(255,255,255,0.98)',padding:20,boxShadow:'var(--glow-s)',backdropFilter:'blur(28px)'}}>
          {links.map(l=><a key={l.href} href={l.href} onClick={()=>setOp(false)} style={{display:'block',padding:'11px 14px',borderRadius:12,fontSize:14,fontWeight:500,color:'var(--txt-s)',textDecoration:'none',transition:'all .2s'}} onMouseEnter={e=>{e.target.style.background='var(--surf2)';e.target.style.color='var(--txt)';}} onMouseLeave={e=>{e.target.style.background='';e.target.style.color='var(--txt-s)'}}>{l.label}</a>)}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:1,borderRadius:20,border:'1px solid rgba(29,78,216,0.18)',padding:'3px 4px',background:'rgba(29,78,216,0.05)',fontSize:12,fontWeight:600,margin:'8px 0 4px'}}>
            <span style={{padding:'4px 14px',borderRadius:16,background:'var(--blue)',color:'#fff'}}>ES</span>
            <a href="pt/" onClick={function(){try{localStorage.setItem('nd-lang','pt');}catch(e){}}} style={{padding:'4px 14px',borderRadius:16,color:'var(--txt-s)',textDecoration:'none'}}>PT</a>
          </div>
          <a href="/contacto" onClick={()=>setOp(false)} style={{marginTop:8,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:9999,background:'var(--blue)',padding:'12px 20px',fontSize:14,fontWeight:600,color:'#fff',textDecoration:'none'}}>Empezar â†’</a>
        </div>
      </div>
    )}
    <style>{`.dnav{display:flex!important;align-items:center;gap:26px;} @media(max-width:1024px){.dnav{display:none!important;}.mbtn{display:inline-flex!important;}} @media(min-width:1025px){.mbtn{display:none!important;}}`}</style>
    </>
  );
};

/* â”€â”€ HERO â”€â”€ */
const Hero = () => (
  <section className="sec-hero" style={{position:'relative',overflow:'hidden',textAlign:'center'}}>
    <div className="hero-bg"/>
    <div className="aurora-layer"/>
    <div className="orb orb1" aria-hidden="true"/><div className="orb orb2" aria-hidden="true"/><div className="orb orb3" aria-hidden="true"/>
    <div className="ring" aria-hidden="true" style={{width:760,height:760,top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:.6}}/>
    <div className="ring" aria-hidden="true" style={{width:520,height:520,top:'50%',left:'50%',transform:'translate(-50%,-50%)',borderColor:'rgba(124,58,237,0.07)',opacity:.8}}/>
    <div className="wrap" style={{position:'relative'}}>
      <div className="ha1">
        <span className="ew" style={{background:'linear-gradient(135deg,rgba(29,78,216,0.1),rgba(124,58,237,0.08))',borderColor:'rgba(29,78,216,0.22)'}}>
          <span className="dot"/>Estudio Tech Premium
        </span>
      </div>
      <h1 className="h1 ha2" style={{marginTop:28,maxWidth:'54rem',marginLeft:'auto',marginRight:'auto'}}>
        Construimos sistemas digitales que trabajan por tu empresa, <em>incluso cuando no estÃ¡s.</em>
      </h1>
      <p className="ha3" style={{marginTop:20,fontSize:'clamp(15px,2.1vw,18.5px)',lineHeight:1.9,color:'var(--txt-s)',maxWidth:'42rem',margin:'20px auto 0'}}>
        Webs, apps SaaS, CRM, automatizaciones, TPV y kioscos. Infraestructura segura y disponibilidad 24/7 para empresas en cualquier lugar.
      </p>
      <div className="ha4" style={{marginTop:34,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="#saas" className="btn btn-p" style={{background:'linear-gradient(135deg,#1d4ed8,#7c3aed)',boxShadow:'0 4px 24px rgba(29,78,216,0.35)'}}>Ver productos SaaS â†’</a>
        <a href="#contacto" className="btn btn-s" style={{background:'rgba(255,255,255,0.9)',backdropFilter:'blur(12px)'}}>Hablar con nosotros</a>
      </div>
      <div className="ha5" style={{marginTop:28,display:'flex',justifyContent:'center',gap:8,flexWrap:'wrap'}}>
        {[['ðŸ’»','100% Remoto'],['âš¡','Respuesta en 24h'],['ðŸ›¡ï¸','Infraestructura segura']].map(([ic,l])=>(
          <span key={l} style={{fontSize:12,fontWeight:500,color:'var(--txt-s)',padding:'5px 13px',borderRadius:9999,border:'1px solid var(--bdr)',background:'rgba(255,255,255,0.85)',backdropFilter:'blur(8px)',display:'inline-flex',alignItems:'center',gap:5}}>{ic} {l}</span>
        ))}
      </div>
      <div className="ha6" style={{marginTop:52,display:'grid',gridTemplateColumns:'repeat(4,1fr)',width:'min(540px,94vw)',margin:'52px auto 0',borderRadius:20,border:'1px solid rgba(29,78,216,0.12)',background:'rgba(255,255,255,0.85)',backdropFilter:'blur(20px)',overflow:'hidden',boxShadow:'0 8px 40px rgba(29,78,216,0.1)'}}>
        {[['40+','Proyectos'],['99.9%','Uptime'],['< 2s','Velocidad'],['24h','Respuesta']].map(([v,l],i)=>(
          <div key={l} style={{padding:'18px 12px',textAlign:'center',borderRight:i<3?'1px solid rgba(29,78,216,0.09)':'none'}}>
            <div style={{fontFamily:'var(--disp)',fontSize:'clamp(17px,2.2vw,23px)',fontWeight:700,background:'linear-gradient(135deg,#1d4ed8,#7c3aed)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{v}</div>
            <div style={{fontSize:10,color:'var(--txt-m)',marginTop:4,textTransform:'uppercase',letterSpacing:'.12em',fontWeight:600}}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* â”€â”€ SOCIAL PROOF TICKER â”€â”€ */
const Ticker = () => {
  const row1=[
    {icon:'ðŸš€',color:'#34d399',label:'Web lanzada',loc:'EspaÃ±a',time:'hace 2 dÃ­as'},
    {icon:'ðŸ’¬',color:'#60a5fa',label:'Chatbot IA activado',loc:'Portugal',time:'hace 4 dÃ­as'},
    {icon:'ðŸ›’',color:'#a78bfa',label:'Tienda online entregada',loc:'EspaÃ±a',time:'hace 6 dÃ­as'},
    {icon:'âš™ï¸',color:'#2dd4bf',label:'CRM integrado con WhatsApp',loc:'Europa',time:'hace 8 dÃ­as'},
    {icon:'ðŸ”’',color:'#fb923c',label:'AuditorÃ­a de seguridad',loc:'EspaÃ±a',time:'hace 10 dÃ­as'},
    {icon:'ðŸ“Š',color:'#fbbf24',label:'Dashboard analÃ­tico',loc:'Portugal',time:'hace 12 dÃ­as'},
  ];
  const row2=[
    {icon:'âœ…',color:'#34d399',label:'Nuevo cliente',loc:'Portugal',time:'hace 1 dÃ­a'},
    {icon:'ðŸ“±',color:'#60a5fa',label:'App publicada en stores',loc:'EspaÃ±a',time:'hace 5 dÃ­as'},
    {icon:'ðŸŽ¯',color:'#a78bfa',label:'CampaÃ±a Google Ads',loc:'Europa',time:'hace 7 dÃ­as'},
    {icon:'âš¡',color:'#2dd4bf',label:'AutomatizaciÃ³n B2B',loc:'EspaÃ±a',time:'hace 9 dÃ­as'},
    {icon:'ðŸŒ',color:'#fb923c',label:'Landing page premium',loc:'Portugal',time:'hace 11 dÃ­as'},
    {icon:'ðŸ“ˆ',color:'#fbbf24',label:'SEO Audit Â· +67% visibilidad',loc:'Europa',time:'hace 13 dÃ­as'},
  ];
  const Item = ({icon,color,label,loc,time}) => (
    <div style={{display:'inline-flex',alignItems:'center',gap:10,padding:'9px 16px 9px 10px',borderRadius:14,border:`1px solid ${color}28`,background:`linear-gradient(135deg,${color}12,rgba(255,255,255,0.85))`,backdropFilter:'blur(12px)',flexShrink:0,marginRight:10,cursor:'default'}}>
      <div style={{width:32,height:32,borderRadius:10,background:`${color}20`,border:`1px solid ${color}30`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,flexShrink:0}}>{icon}</div>
      <div style={{minWidth:0}}>
        <div style={{fontSize:12,fontWeight:600,color:'var(--txt)',whiteSpace:'nowrap',lineHeight:1.3}}>{label}</div>
        <div style={{fontSize:10,color:'var(--txt-m)',marginTop:1,whiteSpace:'nowrap'}}>{loc} Â· {time}</div>
      </div>
      <div style={{width:6,height:6,borderRadius:'50%',background:color,boxShadow:`0 0 8px ${color}`,flexShrink:0,marginLeft:2}}/>
    </div>
  );
  return (
    <div style={{padding:'18px 0 20px',borderTop:'1px solid var(--bdr)',borderBottom:'1px solid var(--bdr)',overflow:'hidden',background:'rgba(245,247,251,0.95)',maskImage:'linear-gradient(90deg,transparent,black 6%,black 94%,transparent)'}}>
      <div style={{display:'flex',width:'max-content',animation:'ticker 38s linear infinite',marginBottom:9}}>
        {[...row1,...row1].map((t,i)=><Item key={i} {...t}/>)}
      </div>
      <div style={{display:'flex',width:'max-content',animation:'tickerR 42s linear infinite'}}>
        {[...row2,...row2].map((t,i)=><Item key={i} {...t}/>)}
      </div>
    </div>
  );
};

/* â”€â”€ TECH MARQUEE â”€â”€ */
const Marquee = () => {
  const items=[
    {t:'Next.js',c:'#1d4ed8'},
    {t:'TypeScript',c:'#1d4ed8'},
    {t:'React',c:'#0369a1'},
    {t:'Node.js',c:'#15803d'},
    {t:'PostgreSQL',c:'#1d4ed8'},
    {t:'Cloudflare',c:'#c2410c'},
    {t:'WordPress',c:'#1d4ed8'},
    {t:'PHP',c:'#6d28d9'},
    {t:'Flutter',c:'#0369a1'},
    {t:'Kotlin',c:'#6d28d9'},
    {t:'Swift',c:'#c2410c'},
    {t:'Firebase',c:'#b45309'},
    {t:'Docker',c:'#0369a1'},
    {t:'AWS',c:'#c2410c'},
    {t:'Supabase',c:'#065f46'},
    {t:'Stripe',c:'#6d28d9'},
    {t:'Ciberseguridad',c:'#b91c1c'},
    {t:'APIs REST',c:'#0f766e'},
    {t:'AutomatizaciÃ³n',c:'#065f46'},
    {t:'CI/CD',c:'#b45309'},
    {t:'Redis',c:'#b91c1c'},
    {t:'Vercel',c:'#1d4ed8'},
  ];
  const d=[...items,...items];
  return (
    <div style={{padding:'28px 0',borderTop:'1px solid var(--bdr)',borderBottom:'1px solid var(--bdr)'}}>
      <div style={{overflow:'hidden',maskImage:'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)'}}>
        <div style={{display:'flex',gap:10,width:'max-content',animation:'marquee 36s linear infinite'}}>
          {d.map((t,i)=>(
            <span key={i} style={{display:'inline-flex',alignItems:'center',gap:6,borderRadius:9999,border:`1px solid ${t.c}20`,background:`${t.c}0a`,padding:'7px 15px',fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'.14em',color:t.c,whiteSpace:'nowrap',transition:'all .2s'}}>
              <span style={{width:5,height:5,borderRadius:'50%',background:t.c,opacity:.8,flexShrink:0}}/>
              {t.t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* â”€â”€ SAAS PRODUCTS â”€â”€ */
const SaasSection = () => {
  const P=[
    {st:'Disponible',sc:'green',tag:'SaaS',title:'Nexo Invoicer',desc:'FacturaciÃ³n moderna para empresas de construcciÃ³n, ventas y pequeÃ±os negocios. Control financiero y emisiÃ³n sin fricciÃ³n.',feats:['Facturas y recibos digitales','GestiÃ³n fiscal organizada','Historial e informes'],cta:'Solicitar demo'},
    {st:'Beta privada',sc:'blue',tag:'SaaS',title:'SpeakEasily',desc:'Plataforma orientada a comunicaciÃ³n y experiencia digital con foco en simplicidad y crecimiento.',feats:['Flujos intuitivos','Experiencia mobile-first','Lista para SaaS beta privada'],cta:'Unirme a la lista'},
    {st:'En expansiÃ³n',sc:'orange',tag:'SaaS',title:'Nexo CRM & WhatsApp',desc:'RelaciÃ³n comercial y atenciÃ³n centralizadas con automatizaciÃ³n y contexto en tiempo real.',feats:['Pipeline comercial visual','WhatsApp integrado','Automatizaciones de seguimiento'],cta:'Agendar reuniÃ³n'},
    {st:'Disponible',sc:'green',tag:'SaaS',title:'Nexo SEO Audit',desc:'DiagnÃ³stico tÃ©cnico y estratÃ©gico para detectar bloqueos, oportunidades y prioridades SEO.',feats:['AnÃ¡lisis tÃ©cnico completo','Prioridades accionables','Hoja de ruta de mejora'],cta:'Solicitar auditorÃ­a'},
    {st:'Disponible',sc:'blue',tag:'Software',title:'TPV & Kioscos Software',desc:'Software de punto de venta y kioscos digitales llave en mano para negocios fÃ­sicos. Sin complicaciones tÃ©cnicas.',feats:['TPV tÃ¡ctil personalizado','Kioscos de autoservicio','Soporte y actualizaciones incluidas'],cta:'Ver demo'},
    {st:'Disponible',sc:'green',tag:'Servicio',title:'Landing Page Pro',desc:'PÃ¡ginas de aterrizaje de alta conversiÃ³n con SEO tÃ©cnico, diseÃ±o premium y optimizaciÃ³n continua.',feats:['DiseÃ±o mobile-first y rÃ¡pido','SEO tÃ©cnico desde el dÃ­a 1','IntegraciÃ³n analÃ­tica y CRO'],cta:'Ver ejemplos'},
  ];
  return (
    <section id="saas" className="sec-lg">
      <div className="wrap">
        <div className="sh c rev">
          <span className="ew">Productos SaaS</span>
          <h2 className="sh-t">Plataformas propias diseÃ±adas para escalar.</h2>
          <p className="sh-d">Software desarrollado por Nexo Digital para acelerar operaciones, ventas y presencia online.</p>
        </div>
        <div className="g3">
          {P.map((p,i)=>(
            <div key={p.title} className={`card rev d${i%4+1}`}>
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:10}}>
                <span className={`sb ${p.sc}`}><span className="sb-dot"/>{p.st}</span>
                <span className="tag">{p.tag}</span>
              </div>
              <div className="card-h">{p.title}</div>
              <p className="card-p">{p.desc}</p>
              <ul className="fl">{p.feats.map(f=><li key={f} className="fi"><IconCheck/><span>{f}</span></li>)}</ul>
              <div className="card-cta"><a href="#contacto">{p.cta}</a></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ SERVICES â”€â”€ */
const ServicesSection = () => {
  const S=[
    {icon:'ðŸŒ',title:'Landing Page / PÃ¡gina Web',desc:'DiseÃ±o y desarrollo web premium orientado a conversiÃ³n, con SEO tÃ©cnico desde el primer dÃ­a.',feats:['SEO tÃ©cnico nacional e internacional','DiseÃ±o mobile-first','Core Web Vitals optimizados']},
    {icon:'ðŸ›’',title:'Tienda Online',desc:'E-commerce completo con gestiÃ³n de productos, pagos integrados y experiencia de compra optimizada.',feats:['CatÃ¡logo y pasarela de pago','GestiÃ³n de pedidos e inventario','IntegraciÃ³n con marketplaces']},
    {icon:'ðŸ¤–',title:'Chatbot IA',desc:'Asistentes virtuales con inteligencia artificial integrados en tu web o WhatsApp. AtenciÃ³n 24/7 sin coste de personal.',feats:['IA conversacional personalizada','IntegraciÃ³n web y WhatsApp','Redirige a ventas o soporte']},
    {icon:'ðŸ§¾',title:'FacturaciÃ³n Digital',desc:'Sistema de facturaciÃ³n para empresas de construcciÃ³n, ventas y pequeÃ±os negocios. RÃ¡pido, claro y sin complicaciones.',feats:['Facturas y recibos digitales','GestiÃ³n fiscal organizada','Para construcciÃ³n, ventas y retail']},
    {icon:'ðŸ–¥ï¸',title:'TPV & Kioscos Digitales',desc:'Software TPV e infraestructura de kioscos para pequeÃ±os y medianos negocios. Llave en mano.',feats:['Software TPV personalizado','Kioscos de autoservicio','Soporte y mantenimiento incluido']},
    {icon:'âš™ï¸',title:'Sistemas a Medida',desc:'ERP, CRM, dashboards y portales internos diseÃ±ados para la operaciÃ³n real del negocio.',feats:['ERP y CRM personalizados','Integraciones vÃ­a API REST','Arquitectura escalable']},
    {icon:'ðŸ“£',title:'TrÃ¡fico Pago / Anuncios',desc:'CampaÃ±as Google Ads y Meta Ads orientadas a resultados medibles para negocios locales y nacionales.',feats:['Google Ads y Meta Ads','SegmentaciÃ³n geogrÃ¡fica precisa','Informes y optimizaciÃ³n continua']},
    {icon:'ðŸ”’',title:'Ciberseguridad & Infraestructura',desc:'AuditorÃ­as de seguridad, hardening, SSL, firewall Cloudflare y monitorizaciÃ³n activa 24/7.',feats:['AuditorÃ­a de seguridad web','Firewall y protecciÃ³n DDoS','Backups automÃ¡ticos diarios']},
  ];
  return (
    <section id="servicios" className="sec-lg" style={{background:'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'}}>
      <div className="wrap">
        <div className="sh c rev">
          <span className="ew">Servicios de desarrollo</span>
          <h2 className="sh-t">Lo que construimos para tu empresa.</h2>
          <p className="sh-d">Desde webs y tiendas online hasta sistemas internos, TPV y seguridad. Todo con criterio tÃ©cnico y foco en negocio.</p>
        </div>
        <div className="g3">
          {S.map((s,i)=>(
            <div key={s.title} className={`card rev d${i%4+1}`}>
              <div style={{fontSize:30,marginBottom:12}}>{s.icon}</div>
              <div className="card-h" style={{fontSize:'clamp(15px,2vw,19px)'}}>{s.title}</div>
              <p className="card-p">{s.desc}</p>
              <ul className="fl">{s.feats.map(f=><li key={f} className="fi"><IconCheck/><span>{f}</span></li>)}</ul>
              <div className="card-cta"><a href="#contacto">Consultar â†’</a></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ AGENDA CTA â”€â”€ */
const AgendaSection = () => (
  <section className="sec">
    <div className="wrap">
      <div style={{borderRadius:24,border:'1px solid rgba(52,211,153,0.18)',background:'linear-gradient(135deg,rgba(5,150,105,0.07),rgba(26,86,219,0.07),rgba(124,58,237,0.05))',padding:'clamp(32px,5vw,52px)',textAlign:'center'}} className="rev">
        <span className="ew" style={{marginBottom:20,display:'inline-flex'}}>Â¿Hablamos?</span>
        <h2 style={{fontFamily:'var(--disp)',fontSize:'clamp(1.7rem,3.5vw,2.5rem)',fontWeight:600,letterSpacing:'-.015em',color:'var(--txt)',marginTop:16}}>
          La primera conversaciÃ³n es gratis y sin compromiso.
        </h2>
        <p style={{marginTop:14,fontSize:'clamp(14px,1.9vw,17px)',lineHeight:2,color:'var(--txt-s)',maxWidth:'38rem',margin:'14px auto 0'}}>
          CuÃ©ntanos tu proyecto, tu problema o tu idea. En 24h te decimos si podemos ayudarte y cÃ³mo.
        </p>
        <div style={{marginTop:32,display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="#contacto" className="btn btn-p">Enviar consulta â†’</a>
          <a href="mailto:contacto@nexo-digital.app" className="btn btn-teal">âœ‰ Escribir por email</a>
          <a href="https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20me%20interesa%20vuestros%20servicios" target="_blank" rel="noreferrer" className="btn btn-s">ðŸ’¬ WhatsApp directo</a>
        </div>
        <p style={{marginTop:18,fontSize:12,color:'var(--txt-m)'}}>
          EspaÃ±a Â· Portugal Â· Europa â€” Respuesta garantizada en menos de 24h
        </p>
      </div>
    </div>
  </section>
);

/* â”€â”€ STATS â”€â”€ */
const StatsSection = () => {
  const S=[
    {v:'40+',l:'Proyectos entregados',d:'Sitios, plataformas y sistemas con foco en claridad y ejecuciÃ³n.'},
    {v:'99.9%',l:'Uptime garantizado',d:'MonitorizaciÃ³n continua con alertas inmediatas ante cualquier incidencia.'},
    {v:'<2s',l:'Velocidad web objetivo',d:'Experiencias ligeras, lectura rÃ¡pida y Core Web Vitals optimizados.'},
    {v:'24h',l:'Tiempo de respuesta',d:'AcompaÃ±amiento directo y respuesta garantizada en menos de 24 horas.'},
  ];
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sh c rev">
          <span className="ew">Confianza y mÃ©tricas</span>
          <h2 className="sh-t">Una forma de trabajar orientada a consistencia y rendimiento.</h2>
        </div>
        <div className="g4">
          {S.map((s,i)=>(
            <div key={s.l} className={`card rev d${i+1}`} style={{textAlign:'center'}}>
              <div className="stat-v">{s.v}</div>
              <div className="stat-l">{s.l}</div>
              <p className="stat-d">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ CLIENTS â”€â”€ */
const ClientsSection = () => {
  const C=['Reformas Machado','Soltur Reformas','Santafe Reformas','Super Clim','Saviesa','Bresami','Viviane Cordeiro','Misme Electric','Ecants'];
  return (
    <section id="clientes" className="sec" style={{background:'linear-gradient(to bottom,rgba(238,241,248,0.5),transparent)'}}>
      <div className="wrap">
        <div className="sh c rev">
          <span className="ew">Empresas que confÃ­an en nosotros</span>
          <h2 className="sh-t">Proyectos reales para negocios que apuestan por lo digital.</h2>
          <p className="sh-d">Hemos trabajado con empresas locales, e-commerces y negocios en expansiÃ³n en EspaÃ±a, Portugal y mÃ¡s.</p>
        </div>
        <div className="client-wrap rev">{C.map(c=><span key={c} className="cpill">{c}</span>)}</div>
        <div className="cta-join rev">
          <div>
            <div style={{fontFamily:'var(--disp)',fontSize:16,fontWeight:600,color:'var(--txt)'}}>Â¿Tu empresa podrÃ­a ser la siguiente?</div>
            <p style={{marginTop:5,fontSize:13,color:'var(--txt-s)'}}>Ãšltimos clientes registrados en los Ãºltimos 14 dÃ­as. Ãšnete a nuestra lista.</p>
          </div>
          <a href="#contacto" className="btn btn-p btn-sm" style={{flexShrink:0}}>Contactar ahora â†’</a>
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ TEAM â”€â”€ */
const TeamSection = () => {
  const T=[
    {i:'E',g:'linear-gradient(135deg,#1a56db,#0d9488)',n:'Enoque Santos',r:'System IT Â· Seguridad Â· Developer',b:'Especialista en infraestructura IT, ciberseguridad y arquitectura de sistemas. Garantiza que cada proyecto se despliega sobre una base robusta, segura y escalable.',li:'https://www.linkedin.com/in/enoque-santos/',portfolio:null},
    {i:'A',g:'linear-gradient(135deg,#1e3a8a,#1a56db)',n:'Abner Gabriel',r:'Developer Senior Â· Web & Apps',b:'Desarrollador senior con amplia experiencia en aplicaciones web de alto rendimiento. Transforma requisitos complejos en productos digitales claros y precisos.',li:'https://www.linkedin.com/in/abner-gabriel-b830163a1',portfolio:'https://meu-portifolio-silk-xi.vercel.app/'},
    {i:'L',g:'linear-gradient(135deg,#0f766e,#0d9488)',n:'Elias Mendes',r:'Developer Â· Web & Apps Â· Empresario',b:'Desarrollador de aplicaciones con visiÃ³n empresarial. Combina criterio tÃ©cnico y enfoque de negocio para construir productos que generan valor real y duradero.',li:'https://www.linkedin.com/in/hiperclimservicos/',portfolio:null},
  ];
  const IconLinkedIn = () => React.createElement('svg',{width:15,height:15,viewBox:'0 0 24 24',fill:'currentColor'},React.createElement('path',{d:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'}));
  const IconPortfolio = () => React.createElement('svg',{width:15,height:15,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'}),React.createElement('polyline',{points:'15 3 21 3 21 9'}),React.createElement('line',{x1:10,y1:14,x2:21,y2:3}));
  return (
    <section id="equipo" className="sec-lg" style={{background:'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'}}>
      <div className="wrap">
        <div className="sh c rev">
          <span className="ew">Nuestro equipo</span>
          <h2 className="sh-t">Personas reales detrÃ¡s de cada proyecto.</h2>
          <p className="sh-d">Equipo tÃ©cnico con experiencia en sistemas IT, seguridad, desarrollo y aplicaciones. AcompaÃ±amiento directo y soporte continuo en cada proyecto.</p>
        </div>
        <div className="g3">
          {T.map((t,i)=>(
            <div key={t.n} className={`card rev d${i+1}`}>
              <div className="t-av" style={{background:t.g}}>{t.i}</div>
              <div className="t-n">{t.n}</div>
              <div className="t-r">{t.r}</div>
              <p className="t-b">{t.b}</p>
              <div style={{display:'flex',gap:8,marginTop:14}}>
                {t.li&&React.createElement('a',{href:t.li,target:'_blank',rel:'noreferrer',style:{display:'inline-flex',alignItems:'center',gap:5,padding:'6px 12px',borderRadius:8,border:'1px solid rgba(29,78,216,0.18)',background:'rgba(29,78,216,0.05)',color:'#1d4ed8',fontSize:12,fontWeight:600,textDecoration:'none',transition:'all .2s'}},React.createElement(IconLinkedIn,null),'LinkedIn')}
                {t.portfolio&&React.createElement('a',{href:t.portfolio,target:'_blank',rel:'noreferrer',style:{display:'inline-flex',alignItems:'center',gap:5,padding:'6px 12px',borderRadius:8,border:'1px solid rgba(15,118,110,0.18)',background:'rgba(15,118,110,0.05)',color:'#0f766e',fontSize:12,fontWeight:600,textDecoration:'none',transition:'all .2s'}},React.createElement(IconPortfolio,null),'Portafolio')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ FAQ â”€â”€ */
const FaqSection = () => {
  const [open,setOpen] = React.useState(null);
  const Q=[
    {q:'Â¿QuÃ© servicios de desarrollo web ofrecÃ©is?',a:'En Nexo Digital ofrecemos desarrollo web, tiendas online, aplicaciones SaaS, CRM con WhatsApp, chatbots IA, TPV, kioscos digitales, ciberseguridad y auditorÃ­as SEO. Trabajamos con empresas de toda EspaÃ±a, Portugal y mÃ¡s allÃ¡.'},
    {q:'Â¿CuÃ¡nto cuesta una pÃ¡gina web?',a:'El precio depende del proyecto. Una web informativa puede partir de 350â‚¬, una tienda online de 800â‚¬, y los sistemas a medida desde 1.500â‚¬. Contacta con nosotros para una propuesta personalizada sin compromiso y con respuesta en menos de 24h.'},
    {q:'Â¿En cuÃ¡nto tiempo desarrollÃ¡is una web?',a:'El plazo habitual es de 2 a 6 semanas para webs estÃ¡ndar y de 4 a 12 semanas para sistemas mÃ¡s complejos. Siempre acordamos un calendario concreto antes de empezar para que tengas visibilidad completa del proceso.'},
    {q:'Â¿TrabajÃ¡is en remoto o solo de forma presencial?',a:'Trabajamos 100% en remoto con cualquier empresa, independientemente de su ubicaciÃ³n. Tenemos clientes en EspaÃ±a, Portugal y Europa. Toda la comunicaciÃ³n y seguimiento es directo y sin intermediarios.'},
    {q:'Â¿QuÃ© es un sistema TPV y cÃ³mo puede ayudar a mi negocio?',a:'Un TPV (Terminal Punto de Venta) es el software que gestiona las ventas, el inventario y los cobros de tu negocio. En Nexo Digital lo desarrollamos a medida o configuramos soluciones llave en mano para pequeÃ±os y medianos negocios.'},
  ];
  return (
    <section className="sec">
      <div className="wrap">
        <div style={{maxWidth:760,margin:'0 auto'}}>
          <div className="sh c rev">
            <span className="ew">Preguntas frecuentes</span>
            <h2 className="sh-t">Todo lo que necesitas saber.</h2>
          </div>
          <div className="rev">
            {Q.map((q,i)=>(
              <div key={i} className="faq-item">
                <button className="faq-q" onClick={()=>setOpen(open===i?null:i)}>
                  <span>{q.q}</span>
                  <IconArrow open={open===i}/>
                </button>
                {open===i&&<p className="faq-a">{q.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ CONTACT FORM â”€â”€ */
const ContactSection = () => {
  const [st,setSt]=React.useState('idle');
  const [msg,setMsg]=React.useState('');
  const [fdata,setFdata]=React.useState(null);
  const ref=React.useRef();

  const buildMailto=(d)=>{
    if(!d) return 'mailto:contacto@nexo-digital.app';
    const subj='Nueva consulta: '+(d.nombre||'')+((d.empresa)?' â€” '+d.empresa:'');
    const body=['Nombre: '+(d.nombre||''),'Email: '+(d.email||''),'TelÃ©fono: '+(d.telefono||''),'Empresa: '+(d.empresa||''),'Servicio: '+(d.servicio||''),'Presupuesto: '+(d.presupuesto||''),'Plazo: '+(d.timeline||''),'','DescripciÃ³n:',d.descripcion||''].join('\n');
    return 'mailto:contacto@nexo-digital.app?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
  };
  const buildWa=(d)=>{
    if(!d) return 'https://wa.me/34689135159';
    const txt='Hola Nexo Digital! Me interesa '+(d.servicio||'vuestros servicios')+'. Soy '+(d.nombre||'un cliente potencial')+((d.empresa)?' de '+d.empresa:'')+((d.descripcion)?'. '+d.descripcion.substring(0,120):'.')+' Â¿PodÃ©is ayudarme?';
    return 'https://wa.me/34689135159?text='+encodeURIComponent(txt);
  };

  const submit=async(e)=>{
    e.preventDefault(); setSt('loading');
    const data=Object.fromEntries(new FormData(ref.current).entries());
    data.tipo='consulta-proyecto'; data._url=window.location.href;
    setFdata(data);
    try{
      const params=new URLSearchParams();Object.entries(data).forEach(([k,v])=>params.append(k,String(v)));
      const r=await fetch('/api/send',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:params.toString()});
      let j;
      try{ j=await r.json(); }catch(_){ j={success:false,message:'El servidor no respondiÃ³ correctamente ('+r.status+').'}; }
      if(j.success){setSt('ok');ref.current.reset();setFdata(null);}
      else{setMsg(j.message||'Error al enviar.');setSt('err');}
    }catch(err){
      setMsg('No se pudo conectar con el servidor.');
      setSt('err');
    }
  };
  return (
    <section id="contacto" className="sec-lg" style={{position:'relative',overflow:'hidden',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 40%,#0c1a3a 70%,#0f172a 100%)'}}>
      <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',top:'-200px',left:'50%',transform:'translateX(-30%)',background:'radial-gradient(circle,rgba(29,78,216,0.28) 0%,rgba(124,58,237,0.15) 50%,transparent 70%)',filter:'blur(80px)'}}/>
        <div style={{position:'absolute',width:350,height:350,borderRadius:'50%',bottom:'-100px',right:'-80px',background:'radial-gradient(circle,rgba(124,58,237,0.22) 0%,transparent 70%)',filter:'blur(60px)'}}/>
        <div style={{position:'absolute',width:280,height:280,borderRadius:'50%',top:'50%',left:'-60px',background:'radial-gradient(circle,rgba(13,148,136,0.18) 0%,transparent 70%)',filter:'blur(60px)'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'48px 48px',maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)'}}/>
      </div>
      <div className="wrap" style={{position:'relative'}}>
        <div className="sh c rev">
          <span className="ew" style={{background:'rgba(255,255,255,0.08)',borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.85)'}}>Siguiente paso</span>
          <h2 className="sh-t" style={{color:'#ffffff'}}>Â¿Tienes un proyecto en mente? CuÃ©ntanoslo.</h2>
          <p className="sh-d" style={{color:'rgba(255,255,255,0.65)'}}>Te respondemos en menos de 24h. Trabajamos con empresas de cualquier lugar.</p>
        </div>
        <div className="fbox rev" style={{background:'rgba(255,255,255,0.04)',backdropFilter:'blur(24px)',WebkitBackdropFilter:'blur(24px)',border:'1px solid rgba(255,255,255,0.12)',boxShadow:'0 8px 40px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.1)'}}>
          <div className="fmsg ok" style={{display:st==='ok'?'flex':'none',alignItems:'flex-start',gap:10}}>
            <span style={{fontSize:18}}>âœ“</span>
            <span>Consulta recibida. Te contactaremos en menos de 24 horas.</span>
          </div>
          {st==='err'&&(
            <div style={{padding:'14px 16px',borderRadius:12,background:'rgba(239,68,68,0.12)',border:'1px solid rgba(239,68,68,0.3)',marginBottom:16}}>
              <p style={{fontSize:13,fontWeight:600,color:'#fca5a5',margin:'0 0 10px'}}>âš  {msg}</p>
              <p style={{fontSize:12,color:'rgba(255,255,255,0.5)',margin:'0 0 10px'}}>Contacta con nosotros directamente:</p>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                <a href={buildWa(fdata)} target="_blank" rel="noreferrer"
                  style={{display:'inline-flex',alignItems:'center',gap:6,padding:'7px 13px',borderRadius:8,background:'#25d366',color:'#fff',fontSize:12,fontWeight:600,textDecoration:'none'}}>
                  ðŸ’¬ WhatsApp
                </a>
                <a href={buildMailto(fdata)}
                  style={{display:'inline-flex',alignItems:'center',gap:6,padding:'7px 13px',borderRadius:8,background:'rgba(255,255,255,0.12)',color:'rgba(255,255,255,0.85)',fontSize:12,fontWeight:600,textDecoration:'none',border:'1px solid rgba(255,255,255,0.2)'}}>
                  âœ‰ Enviar por email
                </a>
              </div>
            </div>
          )}
          <form ref={ref} onSubmit={submit}>
            <div className="fr2">
              <div className="fg2"><label className="fl2">Nombre *</label><input name="nombre" type="text" className="fi2" required placeholder="Tu nombre"/></div>
              <div className="fg2"><label className="fl2">Empresa</label><input name="empresa" type="text" className="fi2" placeholder="Tu empresa"/></div>
            </div>
            <div className="fr2">
              <div className="fg2"><label className="fl2">Email *</label><input name="email" type="email" className="fi2" required placeholder="tu@email.com"/></div>
              <div className="fg2"><label className="fl2">TelÃ©fono *</label><input name="telefono" type="tel" className="fi2" required placeholder="NÃºmero de telÃ©fono"/></div>
            </div>
            <div className="fg2">
              <label className="fl2">Â¿QuÃ© servicio te interesa? *</label>
              <select name="servicio" className="fs2" required>
                <option value="">Selecciona una opciÃ³n</option>
                <optgroup label="â”€â”€ Productos SaaS â”€â”€">
                  <option value="Nexo Invoicer">Nexo Invoicer (FacturaciÃ³n)</option>
                  <option value="SpeakEasily">SpeakEasily (ComunicaciÃ³n digital)</option>
                  <option value="Nexo CRM & WhatsApp">Nexo CRM &amp; WhatsApp</option>
                  <option value="Nexo SEO Audit">Nexo SEO Audit</option>
                </optgroup>
                <optgroup label="â”€â”€ Servicios â”€â”€">
                  <option value="Landing Page / PÃ¡gina Web">Landing Page / PÃ¡gina Web</option>
                  <option value="Tienda Online">Tienda Online</option>
                  <option value="TPV & Kioscos">TPV &amp; Kioscos Digitales</option>
                  <option value="Sistemas a Medida">Sistemas a Medida (ERP/CRM)</option>
                  <option value="TrÃ¡fico pago / Anuncios">TrÃ¡fico Pago / Anuncios</option>
                  <option value="Ciberseguridad">Ciberseguridad &amp; Infraestructura</option>
                  <option value="Otro">Otro / No definido</option>
                </optgroup>
              </select>
            </div>
            <div className="fr2">
              <div className="fg2">
                <label className="fl2">Presupuesto aproximado</label>
                <select name="presupuesto" className="fs2">
                  <option value="">Selecciona un rango</option>
                  <option>350â‚¬ â€“ 800â‚¬</option><option>800â‚¬ â€“ 1.500â‚¬</option>
                  <option>1.500â‚¬ â€“ 3.000â‚¬</option><option>3.000â‚¬ â€“ 5.000â‚¬</option>
                  <option>MÃ¡s de 5.000â‚¬</option><option>Pago mensual</option>
                </select>
              </div>
              <div className="fg2">
                <label className="fl2">Â¿CuÃ¡ndo lo necesitas?</label>
                <select name="timeline" className="fs2">
                  <option value="">Selecciona</option>
                  <option>Lo antes posible</option><option>En 1 mes</option>
                  <option>En 2â€“3 meses</option><option>Sin prisa</option>
                </select>
              </div>
            </div>
            <div className="fg2"><label className="fl2">Describe tu proyecto *</label><textarea name="descripcion" className="ft2" required placeholder="Â¿QuÃ© necesitas? Â¿QuÃ© objetivos tienes?"/></div>
            <button type="submit" className="btn btn-p" style={{width:'100%',fontSize:15,padding:'14px 24px',background:'linear-gradient(135deg,#2563eb,#7c3aed)',boxShadow:'0 4px 24px rgba(37,99,235,0.5)'}} disabled={st==='loading'}>
              {st==='loading'?'Enviandoâ€¦':'Enviar consulta â†’'}
            </button>
            <p style={{marginTop:11,fontSize:11.5,color:'rgba(255,255,255,0.4)',textAlign:'center'}}>
              Respuesta en &lt;24h Â· contacto@nexo-digital.app
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ FOOTER â”€â”€ */
const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="fg3">
        <div>
          <Logo/>
          <p style={{marginTop:16,fontSize:13.5,lineHeight:1.85,color:'var(--txt-s)',maxWidth:250}}>Soluciones digitales con diseÃ±o premium, claridad tÃ©cnica y foco en negocio. EspaÃ±a Â· Portugal Â· Europa.</p>
          <div style={{marginTop:16,display:'flex',gap:8,flexWrap:'wrap'}}>
            {['LinkedIn','Instagram','X'].map(s=><a key={s} href="#" className="badge" style={{fontSize:10}}>{s}</a>)}
          </div>
        </div>
        <div>
          <div className="fh">Productos SaaS</div>
          {['Nexo Invoicer','SpeakEasily','Nexo CRM & WhatsApp','Nexo SEO Audit'].map(l=><a key={l} href="#saas" className="flk">{l}</a>)}
        </div>
        <div>
          <div className="fh">Servicios</div>
          {['Landing Page / Web','Tienda Online','TPV & Kioscos','Sistemas a Medida','Ciberseguridad'].map(l=><a key={l} href="#servicios" className="flk">{l}</a>)}
        </div>
        <div>
          <div className="fh">Contacto</div>
          <a href="mailto:contacto@nexo-digital.app" className="flk">contacto@nexo-digital.app</a>
          <span className="flk" style={{cursor:'default'}}>EspaÃ±a Â· Portugal Â· Europa</span>
          <a href="#equipo" className="flk" style={{marginTop:12}}>Nuestro equipo</a>
          <a href="#clientes" className="flk">Clientes</a>
        </div>
      </div>
      <div className="fbot">
        <span>Â© 2026 Nexo Digital</span>
        <div style={{display:'flex',gap:16,flexWrap:'wrap',justifyContent:'flex-end'}}>
          <a href="/aviso-legal" className="flk" style={{fontSize:12}}>Aviso Legal</a>
          <a href="/privacidad" className="flk" style={{fontSize:12}}>Privacidad</a>
          <a href="cookies.html" className="flk" style={{fontSize:12}}>Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

/* â”€â”€ STICKY BAR â”€â”€ */
const StickyBar = () => {
  const [show,setShow]=React.useState(false);
  const [dismissed,setDismissed]=React.useState(false);
  React.useEffect(()=>{
    const fn=()=>setShow(window.scrollY>500&&!dismissed);
    window.addEventListener('scroll',fn,{passive:true});
    return ()=>window.removeEventListener('scroll',fn);
  },[dismissed]);
  return (
    <div className={`sticky-bar${show?' show':''}`} style={{paddingBottom:'env(safe-area-inset-bottom)'}}>
      <div className="sticky-inner">
        <p className="sticky-txt"><strong>Â¿Buscas soluciones digitales?</strong> Habla con nosotros hoy.</p>
        <a href="#contacto" className="btn btn-p btn-sm">Consulta gratuita â†’</a>
        <button className="sticky-x" onClick={()=>{setDismissed(true);setShow(false);}} aria-label="Cerrar">âœ•</button>
      </div>
    </div>
  );
};

/* â”€â”€ SCROLL FAB â”€â”€ */
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
      setMsgs([{r:'b',t:'Hola! Soy el asistente de Nexo Digital. Puedo ayudarte con info sobre nuestros servicios, precios o encaminarte con el equipo.\n\nEn que puedo ayudarte?'}]);
    }
    if (open) setTimeout(() => endRef.current && endRef.current.scrollIntoView({behavior:'smooth'}), 60);
  }, [open]);

  React.useEffect(() => {
    endRef.current && endRef.current.scrollIntoView({behavior:'smooth'});
  }, [msgs, busy]);

  const waLink = 'https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20vengo%20del%20chat%20de%20vuestra%20web';

  const send = async (text) => {
    const txt = (text || inp).trim();
    if (!txt || busy) return;
    setInp('');
    const history = [...msgs, {r:'u', t:txt}];
    setMsgs(history);
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({messages: history.map(m => ({role: m.r==='u'?'user':'assistant', content:m.t}))})
      });
      const data = await res.json();
      setMsgs(function(h){ return [...h, {r:'b', t: data.reply || 'Lo siento, ha ocurrido un error. Puedes escribirnos directamente.'}]; });
    } catch(e) {
      setMsgs(function(h){ return [...h, {r:'b', t:'Error de conexion. Escribenos por WhatsApp o email y te respondemos enseguida.'}]; });
    }
    setBusy(false);
  };

  const chips = ['Que servicios ofreceis?','Cuanto cuesta una web?','Cuanto tarda el proyecto?','Quiero hablar con alguien'];

  const Bubble = function(props) {
    const m = props.m;
    const isBot = m.r === 'b';
    const hasWa = isBot && (m.t.toLowerCase().indexOf('whatsapp') !== -1 || m.t.toLowerCase().indexOf('contactar') !== -1 || m.t.toLowerCase().indexOf('escribi') !== -1);
    return (
      React.createElement('div', {style:{display:'flex',justifyContent:isBot?'flex-start':'flex-end',marginBottom:8}},
        React.createElement('div', {style:{
          maxWidth:'83%',padding:'9px 13px',
          borderRadius:isBot?'4px 16px 16px 16px':'16px 4px 16px 16px',
          background:isBot?'#f0f4ff':'linear-gradient(135deg,#1d4ed8,#7c3aed)',
          border:isBot?'1px solid rgba(29,78,216,0.12)':'none',
          fontSize:13,lineHeight:1.65,color:isBot?'#1e293b':'#fff',whiteSpace:'pre-line'
        }},
          m.t,
          hasWa && React.createElement('a', {href:waLink,target:'_blank',rel:'noreferrer',style:{
            display:'inline-flex',alignItems:'center',gap:5,marginTop:9,
            padding:'5px 10px',borderRadius:8,textDecoration:'none',
            background:'rgba(37,211,102,0.15)',border:'1px solid rgba(37,211,102,0.3)',
            color:'#25d366',fontSize:11.5,fontWeight:600
          }}, 'ðŸ’¬ Abrir WhatsApp')
        )
      )
    );
  };

  return (
    <>
      {open && (
        <div style={{
          position:'fixed',bottom:90,left:24,
          width:'min(360px,calc(100vw - 48px))',
          maxHeight:'min(500px,calc(100vh - 110px))',
          background:'linear-gradient(160deg,rgba(255,255,255,0.98),rgba(255,255,255,0.99))',
          backdropFilter:'blur(20px)',borderRadius:20,
          border:'1px solid rgba(0,0,0,0.09)',
          boxShadow:'0 20px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.05)',
          zIndex:9998,display:'flex',flexDirection:'column',overflow:'hidden'
        }}>
          <div style={{
            display:'flex',alignItems:'center',gap:10,padding:'12px 14px',
            background:'linear-gradient(135deg,#1d4ed8,#1e3a8a)',
            borderBottom:'1px solid rgba(0,0,0,0.07)',flexShrink:0
          }}>
            <div style={{width:34,height:34,borderRadius:'50%',background:'rgba(255,255,255,0.15)',border:'1px solid rgba(255,255,255,0.25)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:17,flexShrink:0}}>ðŸ¤–</div>
            <div style={{flex:1}}>
              <div style={{fontWeight:700,fontSize:13,color:'#ffffff'}}>Nexo Digital</div>
              <div style={{display:'flex',alignItems:'center',gap:4,marginTop:1}}>
                <div style={{width:5,height:5,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 5px #4ade80'}}/>
                <span style={{fontSize:10.5,color:'rgba(255,255,255,0.8)',fontWeight:500}}>En lÃ­nea</span>
              </div>
            </div>
            <button onClick={function(){setOpen(false);}} style={{
              width:26,height:26,borderRadius:7,background:'rgba(255,255,255,0.12)',
              border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.8)',
              cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13
            }}>âœ•</button>
          </div>
          <div style={{flex:1,overflowY:'auto',padding:'14px 12px 6px',scrollbarWidth:'thin',scrollbarColor:'rgba(0,0,0,0.1) transparent'}}>
            {msgs.map(function(m,i){ return React.createElement(Bubble, {key:i, m:m}); })}
            {busy && (
              <div style={{display:'flex',justifyContent:'flex-start',marginBottom:8}}>
                <div style={{padding:'10px 14px',borderRadius:'4px 16px 16px 16px',background:'#f0f4ff',border:'1px solid rgba(29,78,216,0.12)',display:'flex',gap:4,alignItems:'center'}}>
                  {[0,1,2].map(function(i){ return React.createElement('div',{key:i,style:{width:6,height:6,borderRadius:'50%',background:'#1d4ed8',opacity:0.5,animation:'cwDot 1.2s ease-in-out infinite',animationDelay:(i*0.18)+'s'}}); })}
                </div>
              </div>
            )}
            <div ref={endRef}/>
          </div>
          {msgs.length <= 1 && !busy && (
            <div style={{padding:'4px 12px 8px',display:'flex',flexWrap:'wrap',gap:5}}>
              {chips.map(function(c){ return (
                <button key={c} onClick={function(){send(c);}} style={{
                  fontSize:11.5,padding:'4px 9px',borderRadius:999,
                  border:'1px solid rgba(29,78,216,0.18)',background:'rgba(29,78,216,0.06)',
                  color:'#1d4ed8',cursor:'pointer'
                }}>{c}</button>
              ); })}
            </div>
          )}
          <div style={{padding:'8px 10px',borderTop:'1px solid rgba(0,0,0,0.07)',display:'flex',gap:7,alignItems:'center',flexShrink:0}}>
            <input value={inp} onChange={function(e){setInp(e.target.value);}}
              onKeyDown={function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}}
              placeholder="Escribe tu pregunta..."
              style={{flex:1,background:'#f0f4ff',border:'1px solid rgba(29,78,216,0.15)',borderRadius:10,padding:'8px 11px',color:'#0f172a',fontSize:12.5,outline:'none',fontFamily:'inherit',caretColor:'#1d4ed8'}}
            />
            <button onClick={function(){send();}} disabled={busy||!inp.trim()} style={{
              width:34,height:34,borderRadius:9,flexShrink:0,
              background:busy||!inp.trim()?'#e2e8f0':'linear-gradient(135deg,#1d4ed8,#7c3aed)',
              border:'none',cursor:busy||!inp.trim()?'default':'pointer',
              display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,
              color:busy||!inp.trim()?'#94a3b8':'#fff'
            }}>&#10148;</button>
          </div>
        </div>
      )}
      <button onClick={function(){setOpen(function(o){return !o;});}} aria-label="Chat Nexo Digital" style={{
        position:'fixed',bottom:24,left:24,width:44,height:44,borderRadius:'50%',
        border:'none',cursor:'pointer',zIndex:9999,
        background:'linear-gradient(135deg,#1d4ed8,#1e40af)',
        boxShadow:open?'0 0 0 3px rgba(124,58,237,0.35),0 6px 20px rgba(124,58,237,0.45)':'0 4px 16px rgba(26,86,219,0.45)',
        display:'flex',alignItems:'center',justifyContent:'center',
        transition:'all .25s',transform:open?'scale(0.93)':'scale(1)',
        flexShrink:0
      }}>
        {open
          ? React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'#fff',strokeWidth:2.5,strokeLinecap:'round'},React.createElement('line',{x1:18,y1:6,x2:6,y2:18}),React.createElement('line',{x1:6,y1:6,x2:18,y2:18}))
          : React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'#fff',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round'},
              React.createElement('rect',{x:3,y:8,width:18,height:12,rx:3}),
              React.createElement('path',{d:'M8 8V6a4 4 0 018 0v2'}),
              React.createElement('circle',{cx:9,cy:14,r:1.2,fill:'#fff',stroke:'none'}),
              React.createElement('circle',{cx:15,cy:14,r:1.2,fill:'#fff',stroke:'none'}),
              React.createElement('path',{d:'M9.5 17.5c.7.7 3.3.7 5 0'}),
              React.createElement('line',{x1:12,y1:3,x2:12,y2:8})
            )
        }
      </button>
    </>
  );
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
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };
  const base = {
    position:'fixed', right:24, zIndex:198, width:46, height:46,
    borderRadius:13, border:'1px solid rgba(255,255,255,0.25)',
    background:'linear-gradient(135deg,#1d4ed8,#7c3aed)',
    display:'flex', alignItems:'center', justifyContent:'center',
    cursor:'pointer', transition:'all .25s cubic-bezier(.16,1,.3,1)',
    opacity: vis ? 1 : 0, transform: vis ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(10px)',
    pointerEvents: vis ? 'all' : 'none',
    boxShadow:'0 4px 20px rgba(29,78,216,0.45)',
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={{...base, bottom: 148}}
        aria-label={atBottom ? 'Volver arriba' : 'Ir abajo'}
        onMouseEnter={e=>{ e.currentTarget.style.transform='scale(1.1) translateY(0)'; e.currentTarget.style.boxShadow='0 6px 28px rgba(29,78,216,0.6)'; }}
        onMouseLeave={e=>{ e.currentTarget.style.transform='scale(1) translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(29,78,216,0.45)'; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{transition:'transform .25s', transform: atBottom ? 'rotate(180deg)' : 'rotate(0deg)'}}>
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </>
  );
};

/* â”€â”€ WHATSAPP FAB â”€â”€ */
const WaFab = () => (
  <a href="https://wa.me/34689135159?text=Hola%20Nexo%20Digital,%20me%20interesa%20vuestros%20servicios" target="_blank" rel="noreferrer" className="wa-fab" aria-label="WhatsApp Nexo Digital">
    <svg width="28" height="28" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>
);

/* â”€â”€ PROCESS â”€â”€ */
const ProcessSection = () => {
  const steps=[
    {n:'01',color:'linear-gradient(135deg,#059669,#0d9488)',icon:'ðŸ’¬',title:'Consulta gratuita',desc:'CuÃ©ntanos tu proyecto. Te escuchamos sin compromiso y en 24h te decimos exactamente quÃ© podemos hacer y cuÃ¡nto costarÃ­a.'},
    {n:'02',color:'linear-gradient(135deg,#7c3aed,#1a56db)',icon:'ðŸ“‹',title:'Propuesta tÃ©cnica',desc:'Recibes un documento con alcance, tecnologÃ­a, plazos y precio cerrado. Sin costes ocultos ni sorpresas al final.'},
    {n:'03',color:'linear-gradient(135deg,#1a56db,#0d9488)',icon:'âš™ï¸',title:'Desarrollo iterativo',desc:'Construimos en sprints con entregas visibles. Tienes acceso a cada avance y canales directos con el equipo.'},
    {n:'04',color:'linear-gradient(135deg,#d97706,#059669)',icon:'ðŸš€',title:'Lanzamiento y soporte',desc:'Desplegamos con CI/CD, monitorizaciÃ³n 24/7 y te acompaÃ±amos con soporte post-lanzamiento incluido.'},
  ];
  return (
    <section id="proceso" className="sec-lg">
      <div className="wrap">
        <div className="sh c rev">
          <span className="ew" style={{color:'var(--emerald-s)',borderColor:'rgba(52,211,153,0.2)'}}>Nuestro proceso</span>
          <h2 className="sh-t">De la idea al lanzamiento, sin fricciÃ³n.</h2>
          <p className="sh-d">Un proceso claro, iterativo y con comunicaciÃ³n directa en cada fase.</p>
        </div>
        <div className="g2" style={{maxWidth:860,margin:'0 auto'}}>
          {steps.map((s,i)=>(
            <div key={s.title} className={`card rev d${i%4+1}`} style={{flexDirection:'row',gap:18,alignItems:'flex-start'}}>
              <div className="proc-icon" style={{background:s.color}}>{s.icon}</div>
              <div>
                <div className="proc-num">Paso {s.n}</div>
                <div className="card-h" style={{marginTop:0}}>{s.title}</div>
                <p className="card-p" style={{marginTop:6}}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ TESTIMONIALS â”€â”€ */
const TestimonialsSection = () => {
  const T=[
    {q:'Pasamos de perder leads por no responder a tiempo a tener un chatbot que los atiende en segundos. En 6 semanas logramos un +38% en conversiones.',author:'Carlos M.',role:'Taller mecÃ¡nico',initials:'CM',color:'linear-gradient(135deg,#059669,#0d9488)'},
    {q:'La auditorÃ­a tÃ©cnica nos revelÃ³ un 67% de rebote en mobile. En 2 semanas lo bajamos al 22%. Las ventas subieron ese mismo mes.',author:'Sara L.',role:'E-commerce',initials:'SL',color:'linear-gradient(135deg,#7c3aed,#1a56db)'},
    {q:'Conectaron nuestro CRM con el sistema de facturaciÃ³n. 15 horas semanales de trabajo manual eliminadas. El ROI se pagÃ³ en el primer mes.',author:'Javier R.',role:'ConsultorÃ­a B2B Â· Madrid',initials:'JR',color:'linear-gradient(135deg,#1e3a8a,#0d9488)'},
  ];
  return (
    <section className="sec-lg" style={{background:'linear-gradient(to bottom,rgba(238,241,248,0.7),transparent)'}}>
      <div className="wrap">
        <div className="sh c rev">
          <span className="ew" style={{color:'var(--amber-s)',borderColor:'rgba(251,191,36,0.2)'}}>Resultados reales</span>
          <h2 className="sh-t">Lo que dicen nuestros clientes.</h2>
          <p className="sh-d">Empresas reales. NÃºmeros reales. Sin testimonios de stock.</p>
        </div>
        <div className="g3">
          {T.map((t,i)=>(
            <div key={t.author} className={`card rev d${i+1}`} style={{display:'flex',flexDirection:'column'}}>
              <div className="test-stars">{'â˜…â˜…â˜…â˜…â˜…'.split('').map((s,j)=><span key={j} className="test-star">{s}</span>)}</div>
              <p className="test-q">&ldquo;{t.q}&rdquo;</p>
              <div style={{display:'flex',alignItems:'center',gap:10,marginTop:'auto'}}>
                <div className="test-av" style={{background:t.color}}>{t.initials}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:600,color:'var(--txt)'}}>{t.author}</div>
                  <div style={{fontSize:11,color:'var(--txt-m)',marginTop:2}}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rev" style={{marginTop:44,display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'clamp(24px,5vw,56px)'}}>
          {[{v:'+50',l:'Clientes activos'},{v:'99.9%',l:'Uptime garantizado'},{v:'14d',l:'Entrega media'},{v:'4.9â˜…',l:'ValoraciÃ³n media'}].map(s=>(
            <div key={s.l} style={{textAlign:'center'}}>
              <div style={{fontFamily:'var(--disp)',fontSize:'clamp(1.4rem,3vw,2rem)',fontWeight:600,color:'var(--txt)'}}>{s.v}</div>
              <div style={{fontSize:12,color:'var(--txt-m)',marginTop:4,textTransform:'uppercase',letterSpacing:'.1em'}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* â”€â”€ COOKIE BANNER â”€â”€ */
const CookieBanner = () => {
  const KEY = 'nd_cookie_consent';
  const [visible, setVisible] = React.useState(false);
  const [detail, setDetail] = React.useState(false);

  React.useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setVisible(true); } catch(_) {}
  }, []);

  const accept = (all) => {
    try {
      localStorage.setItem(KEY, all ? 'all' : 'necessary');
    } catch(_) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position:'fixed', bottom:0, left:0, right:0, zIndex:10000,
      padding:'0 0 env(safe-area-inset-bottom)',
      animation:'slideUp .4s cubic-bezier(.16,1,.3,1)'
    }}>
      <div style={{
        margin:'0 auto', maxWidth:900,
        background:'rgba(15,23,42,0.97)', backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)',
        borderTop:'1px solid rgba(255,255,255,0.08)', borderRadius:'20px 20px 0 0',
        padding:'20px 24px', boxShadow:'0 -8px 40px rgba(0,0,0,0.4)'
      }}>
        <div style={{display:'flex', alignItems:'flex-start', gap:16, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:240}}>
            <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:6}}>
              <span style={{fontSize:16}}>ðŸª</span>
              <span style={{fontFamily:'var(--disp)', fontSize:14, fontWeight:700, color:'#f1f5f9'}}>Uso de cookies</span>
            </div>
            <p style={{fontSize:12.5, lineHeight:1.75, color:'#94a3b8', margin:0}}>
              Usamos cookies necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies analÃ­ticas para mejorar la experiencia.{' '}
              <button onClick={() => setDetail(!detail)} style={{background:'none', border:'none', color:'#60a5fa', cursor:'pointer', fontSize:12.5, padding:0, textDecoration:'underline'}}>
                {detail ? 'Ocultar detalles' : 'Ver detalles'}
              </button>
            </p>
            {detail && (
              <div style={{marginTop:10, fontSize:12, color:'#64748b', lineHeight:1.7}}>
                <p style={{margin:'0 0 4px'}}><strong style={{color:'#94a3b8'}}>Necesarias:</strong> SesiÃ³n, seguridad. No requieren consentimiento.</p>
                <p style={{margin:0}}><strong style={{color:'#94a3b8'}}>AnalÃ­ticas:</strong> Google Analytics (anÃ³nimo), mejora de navegaciÃ³n.</p>
              </div>
            )}
          </div>
          <div style={{display:'flex', gap:8, alignItems:'center', flexShrink:0, flexWrap:'wrap'}}>
            <button onClick={() => accept(false)} style={{
              padding:'9px 16px', borderRadius:9999, fontSize:12.5, fontWeight:600, cursor:'pointer',
              background:'transparent', border:'1px solid rgba(255,255,255,0.15)', color:'#94a3b8',
              transition:'all .2s', whiteSpace:'nowrap'
            }}>Solo necesarias</button>
            <button onClick={() => accept(true)} style={{
              padding:'9px 18px', borderRadius:9999, fontSize:12.5, fontWeight:600, cursor:'pointer',
              background:'linear-gradient(135deg,#1d4ed8,#7c3aed)', border:'none', color:'#fff',
              boxShadow:'0 4px 16px rgba(29,78,216,0.4)', transition:'all .2s', whiteSpace:'nowrap'
            }}>Aceptar todo</button>
          </div>
        </div>
        <p style={{marginTop:10, fontSize:11, color:'#475569', textAlign:'center'}}>
          Al continuar navegando, aceptas el uso de cookies necesarias. {'Â·'}{' '}
          <a href="privacidad.html" style={{color:'#60a5fa', textDecoration:'none'}}>PolÃ­tica de privacidad</a>
          {' Â· '}
          <a href="cookies.html" style={{color:'#60a5fa', textDecoration:'none'}}>PolÃ­tica de cookies</a>
        </p>
      </div>
    </div>
  );
};

/* â”€â”€ APP â”€â”€ */
const App = () => {
  useReveal();
  return (
    <>
      <Navbar/>
      <Hero/>
      <Ticker/>
      <Marquee/>
      <SaasSection/>
      <hr/>
      <ServicesSection/>
      <AgendaSection/>
      <ProcessSection/>
      <StatsSection/>
      <ClientsSection/>
      <hr/>
      <TestimonialsSection/>
      <TeamSection/>
      <FaqSection/>
      <ContactSection/>
      <Footer/>
      <StickyBar/>
      <ChatWidget/>
      <ScrollFab/>
      <WaFab/>
      <CookieBanner/>
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
