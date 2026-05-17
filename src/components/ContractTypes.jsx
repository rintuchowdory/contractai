const TYPES = [
  { icon: '🛡️', title: 'Non-Disclosure Agreement', desc: 'Protect confidential information with legally binding NDAs customized to your needs.', popular: true,  bg: 'linear-gradient(135deg,#1a2a1a,#2a1a1a)', type: 'Non-Disclosure Agreement (NDA)' },
  { icon: '💼', title: 'Freelance Agreement',       desc: 'Clear terms for freelance work including scope, payment, and intellectual property rights.', popular: false, bg: 'linear-gradient(135deg,#1a1a2a,#2a1a1a)', type: 'Freelance Agreement' },
  { icon: '🤝', title: 'Service Contract',          desc: 'Comprehensive service agreements covering deliverables, timelines, and responsibilities.', popular: true,  bg: 'linear-gradient(135deg,#1a2a2a,#1a1a2a)', type: 'Service Contract' },
  { icon: '💻', title: 'SaaS Terms of Service',     desc: 'Complete terms of service for software products covering usage rights and limitations.', popular: false, bg: 'linear-gradient(135deg,#2a1a1a,#1a1a2a)', type: 'SaaS Terms of Service' },
  { icon: '📋', title: 'Privacy Policy',            desc: 'GDPR and CCPA compliant privacy policies for websites and applications.', popular: false, bg: 'linear-gradient(135deg,#1a2a1a,#2a2a1a)', type: 'Privacy Policy' },
  { icon: '⚖️', title: 'Custom Legal Documents',   desc: 'Fully bespoke legal documents crafted for your unique situation and requirements.', popular: false, bg: 'linear-gradient(135deg,#2a1a2a,#1a2a1a)', type: 'Employment Contract' },
]

export default function ContractTypes({ scrollTo }) {
  const prefill = (type) => {
    // Set the select in Hero via a custom event
    window.dispatchEvent(new CustomEvent('prefillContract', { detail: type }))
    scrollTo('hero')
  }

  return (
    <section id="types" style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', background: '#fef2f2', color: 'var(--red)', fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 100, fontFamily: 'var(--font-mono)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.05em' }}>Contract Library</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, color: '#111', marginBottom: 12 }}>Contract Types We Generate</h2>
          <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.7 }}>From simple NDAs to complex service agreements, we've got you covered</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {TYPES.map(({ icon, title, desc, popular, bg, type }) => (
            <div key={title} style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5', transition: 'all .25s', cursor: 'pointer' }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
              onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ height: 160, background: bg, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {popular && <div style={{ position: 'absolute', top: 12, right: 12, background: 'var(--red)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Popular</div>}
                <div style={{ width: 36, height: 36, background: 'rgba(0,0,0,0.4)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon}</div>
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#111', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
                <span onClick={() => prefill(type)} style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)', display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                  Generate Now →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
