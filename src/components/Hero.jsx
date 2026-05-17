import { useEffect, useRef, useState } from 'react'

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY

const CONTRACT_TYPES = [
  'Non-Disclosure Agreement (NDA)',
  'Freelance Agreement',
  'Service Contract',
  'SaaS Terms of Service',
  'Privacy Policy',
  'Employment Contract',
  'Partnership Agreement',
  'Consulting Agreement',
  'Vendor Agreement',
  'Software License Agreement',
]

export default function Hero({ scrollTo }) {
  const canvasRef = useRef(null)
  const [contractType, setContractType] = useState('')
  const [description, setDescription] = useState('')
  const [generating, setGenerating] = useState(false)
  const [result, setResult] = useState('')
  const [showResult, setShowResult] = useState(false)

  // Neural-network particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(220,38,38,0.7)'; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(220,38,38,${0.15 * (1 - d / 100)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  const generateContract = async () => {
    if (!contractType || !description.trim()) {
      alert('Please select a contract type and provide a description.')
      return
    }
    setGenerating(true)
    setShowResult(false)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          system: 'You are a professional legal document drafter. Generate clear, structured, legally sound contracts with numbered sections. Be thorough but concise.',
          messages: [{
            role: 'user',
            content: `Generate a professional ${contractType} based on:\n\n${description}\n\nInclude: parties, key terms, obligations, IP (if relevant), confidentiality, termination, governing law, and signature blocks. Use numbered sections.`,
          }],
        }),
      })
      const data = await res.json()
      const text = data.content?.map(i => i.text || '').join('') || 'Error: No response.'
      setResult(text)
      setShowResult(true)
    } catch {
      setResult('Error generating contract. Check your API key and try again.')
      setShowResult(true)
    }
    setGenerating(false)
  }

  const copyContract = () => navigator.clipboard.writeText(result).then(() => alert('Copied!'))

  const downloadContract = () => {
    const blob = new Blob([result], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (contractType || 'contract').replace(/\s+/g, '-').toLowerCase() + '.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="hero" style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 48px', paddingTop: 68, overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.7 }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', maxWidth: 1280, margin: '0 auto' }}>

        {/* Left */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)', color: '#fca5a5', fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 100, marginBottom: 24, fontFamily: 'var(--font-mono)' }}>
            <span style={{ width: 8, height: 8, background: 'var(--red)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
            AI-Powered Legal Documents
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, lineHeight: 1.05, color: '#fff', marginBottom: 20 }}>
            Generate Professional<br />
            <span style={{ color: 'var(--red)' }}>Legal Contracts</span><br />
            in Seconds
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
            ContractAI uses advanced artificial intelligence to create legally-sound, customized contracts tailored to your specific needs. Save time, reduce costs, and protect your business.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
            {['Legally Compliant', 'Instant Generation', 'Multiple Formats'].map(t => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)' }}>
                <span style={{ color: 'var(--red)', fontWeight: 700 }}>✓</span> {t}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <button onClick={() => scrollTo('hero')} style={{ background: 'var(--red)', color: '#fff', border: 'none', fontSize: 16, fontWeight: 600, padding: '14px 28px', borderRadius: 8, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'background .2s' }}
              onMouseOver={e => e.target.style.background = '#b91c1c'}
              onMouseOut={e => e.target.style.background = 'var(--red)'}>
              Start Free Trial →
            </button>
            <button onClick={() => scrollTo('features')} style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', fontSize: 16, fontWeight: 500, padding: '14px 28px', borderRadius: 8, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              Explore Features
            </button>
          </div>
        </div>

        {/* Generator Card */}
        <div style={{ background: 'rgba(26,26,26,0.9)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: 16, padding: 28, backdropFilter: 'blur(20px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
            <div style={{ width: 40, height: 40, background: 'var(--red)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📄</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', fontSize: 18 }}>Quick Contract Generator</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>Generate in 30 seconds</div>
            </div>
          </div>

          <label style={{ display: 'block', fontSize: 12, color: 'var(--muted)', fontWeight: 500, marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Select Contract Type</label>
          <select value={contractType} onChange={e => setContractType(e.target.value)}
            style={{ width: '100%', background: '#0f0f0f', border: '1px solid rgba(220,38,38,0.2)', color: '#fff', fontSize: 14, padding: '11px 14px', borderRadius: 8, fontFamily: 'var(--font-body)', outline: 'none', marginBottom: 16, cursor: 'pointer' }}>
            <option value="">Choose a contract type...</option>
            {CONTRACT_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>

          <label style={{ display: 'block', fontSize: 12, color: 'var(--muted)', fontWeight: 500, marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Brief Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)}
            placeholder="Describe your contract needs — parties involved, key terms, duration, payment..."
            style={{ width: '100%', background: '#0f0f0f', border: '1px solid rgba(220,38,38,0.2)', color: '#fff', fontSize: 14, padding: '12px 14px', borderRadius: 8, fontFamily: 'var(--font-body)', outline: 'none', resize: 'none', minHeight: 90, marginBottom: 18, lineHeight: 1.6 }} />

          <button onClick={generateContract} disabled={generating}
            style={{ width: '100%', background: generating ? '#6b7280' : 'var(--red)', color: '#fff', border: 'none', fontSize: 15, fontWeight: 600, padding: 13, borderRadius: 8, cursor: generating ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10 }}>
            {generating
              ? <><span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> Generating...</>
              : <>⚡ Generate Contract →</>}
          </button>
          <div style={{ textAlign: 'center', fontSize: 11, color: '#4b5563', fontFamily: 'var(--font-mono)' }}>No credit card required • Free trial available</div>

          {showResult && (
            <div className="fade-up">
              <div style={{ background: '#0f0f0f', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 12, padding: 16, marginTop: 16, maxHeight: 280, overflowY: 'auto', color: '#d1fae5', fontFamily: 'var(--font-mono)', fontSize: 11.5, lineHeight: 1.8, whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {result}
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                {[['📋 Copy', copyContract], ['⬇ Download .txt', downloadContract]].map(([label, fn]) => (
                  <button key={label} onClick={fn} style={{ flex: 1, background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)', color: '#fca5a5', fontSize: 12, padding: 8, borderRadius: 6, cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trusted bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px 48px', display: 'flex', alignItems: 'center', gap: 40, justifyContent: 'center' }}>
        <span style={{ fontSize: 12, color: '#4b5563', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Trusted by 10,000+ businesses</span>
        {['TechCorp', 'LawFirm Pro', 'StartupHub', 'Enterprise Co', 'Legal360'].map(n => (
          <span key={n} style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#374151' }}>{n}</span>
        ))}
      </div>
    </section>
  )
}
