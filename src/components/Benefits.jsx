const BENEFITS = [
  { num: '30 sec', icon: '⏱️', title: 'Save 90% of Time',     desc: 'Generate contracts in seconds instead of hours of manual drafting.' },
  { num: '75%',    icon: '💰', title: 'Reduce Costs',          desc: 'Cut legal document costs by up to 75% compared to traditional methods.' },
  { num: '99.9%',  icon: '✅', title: 'Accuracy Rate',         desc: 'AI-powered generation ensures consistent, error-free documents.' },
  { num: '∞',      icon: '📈', title: 'Scalability',           desc: 'Generate unlimited contracts as your business grows.' },
  { num: '10K+',   icon: '👥', title: 'Happy Customers',       desc: 'Trusted by thousands of businesses worldwide.' },
  { num: '#1',     icon: '🏆', title: 'Industry Leading',      desc: 'Rated the best AI contract generator by legal tech experts.' },
]

export default function Benefits() {
  return (
    <section id="benefits" style={{ background: 'linear-gradient(135deg,#111 0%,#1c0404 50%,#111 100%)', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', background: 'rgba(220,38,38,0.2)', color: '#fca5a5', fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 100, fontFamily: 'var(--font-mono)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.05em' }}>Why Choose Us</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, color: '#fff', marginBottom: 12 }}>Benefits That Matter</h2>
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7 }}>Real results that transform how businesses handle legal documents</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {BENEFITS.map(({ num, icon, title, desc }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden', transition: 'all .25s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.3)'; e.currentTarget.style.background = 'rgba(220,38,38,0.05)' }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, color: 'var(--red)', position: 'absolute', top: 16, right: 20, lineHeight: 1 }}>{num}</div>
              <div style={{ width: 44, height: 44, background: 'rgba(220,38,38,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>{icon}</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 8 }}>{title}</h4>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
