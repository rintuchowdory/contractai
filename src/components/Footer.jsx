const COLS = [
  { title: 'Products', links: ['Contract Generator', 'Clause Library', 'Risk Analyzer', 'API Access'] },
  { title: 'Company',  links: ['About', 'Blog', 'Careers', 'Contact'] },
  { title: 'Legal',    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'] },
]

export default function Footer() {
  return (
    <footer id="footer" style={{ background: 'var(--bg)', padding: '64px 48px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, background: 'var(--red)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14 }}>⚖</div>
              ContractAI
            </div>
            <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>
              AI-powered legal contract generation for modern businesses. Fast, secure, and legally compliant.
            </p>
          </div>

          {COLS.map(({ title, links }) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>{title}</h4>
              {links.map(l => (
                <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: '#6b7280', textDecoration: 'none', marginBottom: 10, transition: 'color .2s' }}
                  onMouseOver={e => e.target.style.color = 'var(--red)'}
                  onMouseOut={e => e.target.style.color = '#6b7280'}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: '#4b5563' }}>
          <span>© 2025 ContractAI. All rights reserved.</span>
          <span>Made with ❤️ for legal-tech innovation</span>
        </div>
      </div>
    </footer>
  )
}
