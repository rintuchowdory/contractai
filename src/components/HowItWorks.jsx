const STEPS = [
  { num: '01', icon: '📋', title: 'Choose Contract Type', desc: 'Select from our library of 50+ legal document templates including NDAs, service agreements, and more.' },
  { num: '02', icon: '✨', title: 'AI Generates Draft',   desc: 'Our AI analyzes your requirements and generates a comprehensive, legally-sound contract in seconds.' },
  { num: '03', icon: '✏️', title: 'Review & Customize',  desc: 'Use AI-assisted editing to modify clauses, detect risks, and ensure the contract meets your needs.' },
  { num: '04', icon: '⬇️', title: 'Export & Sign',       desc: 'Download your contract in PDF or Word format, ready for signatures and execution.' },
]

export default function HowItWorks({ scrollTo }) {
  return (
    <section id="how" style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', background: '#fef2f2', color: 'var(--red)', fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 100, fontFamily: 'var(--font-mono)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.05em' }}>Simple Process</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, color: '#111', marginBottom: 12 }}>How ContractAI Works</h2>
          <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.7 }}>Create professional legal documents in four simple steps</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {STEPS.map(({ num, icon, title, desc }) => (
            <div key={num} style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 16, padding: 28, position: 'relative', transition: 'all .25s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(220,38,38,0.08)' }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ position: 'absolute', top: -14, right: 20, background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, padding: '4px 12px', borderRadius: 100 }}>{num}</div>
              <div style={{ width: 52, height: 52, background: '#fef2f2', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#111', marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <button onClick={() => scrollTo('hero')} style={{ background: 'var(--red)', color: '#fff', border: 'none', fontSize: 15, fontWeight: 600, padding: '14px 32px', borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
            Try It Now - Free →
          </button>
        </div>
      </div>
    </section>
  )
}
