export default function Footer() {
  const linkStyle = { display: 'block', fontSize: 14, color: '#6b7280', textDecoration: 'none', marginBottom: 10, transition: 'color .2s' }
  const hover = e => e.target.style.color = 'var(--red)'
  const unhover = e => e.target.style.color = '#6b7280'

  return (
    <footer id="footer" style={{ background: 'var(--bg)', padding: '64px 48px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, background: 'var(--red)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14 }}>⚖</div>
              ContractAI
            </div>
            <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7, marginBottom: 20 }}>
              AI-powered legal contract generation for modern businesses. Fast, secure, and legally compliant.
            </p>
            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="mailto:Rintuchowdory@outlook.de" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
                onMouseOver={hover} onMouseOut={unhover}>
                📧 Rintuchowdory@outlook.de
              </a>
              <a href="https://github.com/rintuchowdory" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
                onMouseOver={hover} onMouseOut={unhover}>
                🐙 github.com/rintuchowdory
              </a>
              <a href="https://www.linkedin.com/in/rintu-chowdory/" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
                onMouseOver={hover} onMouseOut={unhover}>
                💼 linkedin.com/in/rintu-chowdory
              </a>
              <a href="https://www.xing.com/profile/Rintu_Chowdory" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
                onMouseOver={hover} onMouseOut={unhover}>
                🔗 xing.com/profile/Rintu_Chowdory
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>Products</h4>
            {['Contract Generator', 'Clause Library', 'Risk Analyzer', 'API Access'].map(l => (
              <a key={l} href="#" style={linkStyle} onMouseOver={hover} onMouseOut={unhover}>{l}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>Company</h4>
            {['About', 'Blog', 'Careers', 'Contact'].map(l => (
              <a key={l} href="#" style={linkStyle} onMouseOver={hover} onMouseOut={unhover}>{l}</a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>Legal</h4>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map(l => (
              <a key={l} href="#" style={linkStyle} onMouseOver={hover} onMouseOut={unhover}>{l}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: '#4b5563', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2025 ContractAI by Rintu Chowdory. All rights reserved.</span>
          <span>Built with ❤️ using React + Gemini AI</span>
        </div>
      </div>
    </footer>
  )
}