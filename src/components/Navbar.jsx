const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: '#fff', borderBottom: '1px solid #e5e5e5',
    padding: '0 48px', height: 68,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20,
    color: '#111', textDecoration: 'none', cursor: 'pointer',
  },
  logoIcon: {
    width: 34, height: 34, background: 'var(--red)', borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', fontSize: 14, fontWeight: 700,
  },
  links: { display: 'flex', alignItems: 'center', gap: 32 },
  link: { fontSize: 14, color: '#444', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' },
  right: { display: 'flex', alignItems: 'center', gap: 12 },
  ghost: {
    background: 'none', border: 'none', fontSize: 14, fontWeight: 500,
    color: '#444', cursor: 'pointer', fontFamily: 'var(--font-body)', padding: '8px 16px',
  },
  cta: {
    background: 'var(--red)', color: '#fff', border: 'none',
    fontSize: 14, fontWeight: 600, padding: '10px 20px', borderRadius: 8,
    cursor: 'pointer', fontFamily: 'var(--font-body)',
  },
}

export default function Navbar({ scrollTo }) {
  return (
    <nav style={s.nav}>
      <div style={s.logo} onClick={() => scrollTo('hero')}>
        <div style={s.logoIcon}>⚖</div>
        ContractAI
      </div>
      <div style={s.links}>
        {[['Home','hero'],['Products','features'],['Pricing','pricing'],['About','industry'],['Contact','footer']].map(([label, id]) => (
          <span key={id} style={s.link} onClick={() => scrollTo(id)}>{label}</span>
        ))}
      </div>
      <div style={s.right}>
        <button style={s.ghost}>Login</button>
        <button style={s.cta} onClick={() => scrollTo('hero')}>Start Free Trial →</button>
      </div>
    </nav>
  )
}
