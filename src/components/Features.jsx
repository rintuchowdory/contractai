const FEATS = [
  { icon: '🛡️', title: 'Risk Detection',       desc: 'Automatic identification of potential legal risks and vulnerabilities in your contracts.' },
  { icon: '🌐', title: 'Regional Compliance',   desc: 'Smart suggestions based on EU, US, or Global legal requirements and standards.' },
  { icon: '⚡', title: 'Instant Generation',    desc: 'Generate comprehensive legal documents in under 30 seconds, not hours or days.' },
  { icon: '📚', title: 'Clause Library',        desc: 'Access thousands of pre-approved legal clauses vetted by legal professionals.' },
]

export default function Features() {
  return (
    <section id="features" style={{ background: '#f8f8f6', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', background: '#fef2f2', color: 'var(--red)', fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 100, fontFamily: 'var(--font-mono)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.05em' }}>Powerful Features</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, color: '#111', marginBottom: 12 }}>AI Features That Set Us Apart</h2>
          <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.7 }}>Cutting-edge technology meets legal expertise for unmatched document generation</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Core feature big card */}
          <div style={{ background: 'linear-gradient(135deg,#111 0%,#1a0505 100%)', borderRadius: 16, padding: 32, border: '1px solid rgba(220,38,38,0.2)' }}>
            <div style={{ display: 'inline-block', background: 'rgba(220,38,38,0.15)', color: '#fca5a5', fontSize: 11, padding: '4px 12px', borderRadius: 100, fontFamily: 'var(--font-mono)', marginBottom: 16, textTransform: 'uppercase' }}>Core Feature</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: '#fff', marginBottom: 12 }}>AI-Powered Generation</h3>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>Advanced language models create legally accurate contracts tailored to your specific requirements. Powered by state-of-the-art Claude AI technology.</p>
            <div style={{ width: '100%', height: 200, background: 'linear-gradient(135deg,#0f1c3f 0%,#1a0a2e 50%,#0d1b2a 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>🤖</div>
          </div>

          {/* 2x2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {FEATS.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #e5e5e5', transition: 'all .25s' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseOut={e => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ width: 44, height: 44, background: '#fef2f2', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 14 }}>{icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#111', marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
