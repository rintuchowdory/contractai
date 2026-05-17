const SEGMENTS = [
  {
    icon: '🏢', title: 'Startups & SMBs',
    desc: 'Scale your business operations without the overhead of expensive legal teams. Generate NDAs, employment contracts, and investor agreements in minutes.',
    tags: ['Investor Agreements', 'Employment Contracts', 'Vendor Agreements'],
    bg: 'linear-gradient(135deg,#1a1a1a,#2a0a0a)',
    reverse: false,
  },
  {
    icon: '💼', title: 'Freelancers & Agencies',
    desc: 'Protect your work and get paid on time with clear, professional contracts that establish expectations from the start.',
    tags: ['Client Contracts', 'Project Agreements', 'Retainer Contracts'],
    bg: 'linear-gradient(135deg,#0a1a2a,#1a1a1a)',
    reverse: true,
  },
  {
    icon: '🏛️', title: 'Law Firms & Legal Teams',
    desc: 'Accelerate document drafting, reduce manual work, and focus on high-value legal strategy while AI handles routine contracts.',
    tags: ['Template Management', 'Bulk Generation', 'Client Portals'],
    bg: 'linear-gradient(135deg,#1a0a1a,#0a1a1a)',
    reverse: false,
  },
]

export default function Industry({ scrollTo }) {
  return (
    <section id="industry" style={{ background: '#f8f8f6', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, color: '#111', marginBottom: 12 }}>Built for Every Industry</h2>
          <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.7 }}>From solo entrepreneurs to enterprise teams, ContractAI adapts to your needs</p>
        </div>

        {SEGMENTS.map(({ icon, title, desc, tags, bg, reverse }, i) => (
          <div key={title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: i < SEGMENTS.length - 1 ? 80 : 0, direction: reverse ? 'rtl' : 'ltr' }}>
            <div style={{ height: 320, background: bg, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, direction: 'ltr' }}>
              {icon}
            </div>
            <div style={{ direction: 'ltr' }}>
              <div style={{ width: 56, height: 56, background: 'var(--red)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: '#111', marginBottom: 14 }}>{title}</h3>
              <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {tags.map(t => (
                  <span key={t} style={{ background: '#fff', border: '1px solid #e5e5e5', color: '#374151', fontSize: 12, fontWeight: 500, padding: '6px 14px', borderRadius: 100, fontFamily: 'var(--font-mono)' }}>{t}</span>
                ))}
              </div>
              <button onClick={() => scrollTo('hero')} style={{ background: 'var(--red)', color: '#fff', border: 'none', fontSize: 15, fontWeight: 600, padding: '12px 24px', borderRadius: 8, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                Get Started →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
