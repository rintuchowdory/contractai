import { useState } from 'react'

const PLANS = [
  {
    name: 'Starter', tagline: 'Perfect for freelancers and small projects',
    monthly: 29, yearly: 24, popular: false,
    features: [
      { text: '5 contracts per month', ok: true },
      { text: 'Basic contract templates', ok: true },
      { text: 'PDF export', ok: true },
      { text: 'Email support', ok: true },
      { text: 'AI clause suggestions', ok: false },
      { text: 'Risk detection', ok: false },
      { text: 'Priority support', ok: false },
    ],
  },
  {
    name: 'Professional', tagline: 'Best for growing businesses',
    monthly: 79, yearly: 66, popular: true,
    features: [
      { text: '25 contracts per month', ok: true },
      { text: 'All contract templates', ok: true },
      { text: 'PDF & Word export', ok: true },
      { text: 'Priority email support', ok: true },
      { text: 'AI clause suggestions', ok: true },
      { text: 'Risk detection', ok: true },
      { text: 'Custom branding', ok: false },
    ],
  },
  {
    name: 'Enterprise', tagline: 'For large teams and organizations',
    monthly: 199, yearly: 166, popular: false,
    features: [
      { text: 'Unlimited contracts', ok: true },
      { text: 'All contract templates', ok: true },
      { text: 'All export formats', ok: true },
      { text: '24/7 priority support', ok: true },
      { text: 'AI clause suggestions', ok: true },
      { text: 'Advanced risk detection', ok: true },
      { text: 'Custom branding', ok: true },
      { text: 'API access', ok: true },
      { text: 'Dedicated account manager', ok: true },
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 0 }}>
          <div style={{ display: 'inline-block', background: '#fef2f2', color: 'var(--red)', fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 100, fontFamily: 'var(--font-mono)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.05em' }}>Pricing</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, color: '#111', marginBottom: 12 }}>Simple, Transparent Pricing</h2>
          <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.7, marginBottom: 24 }}>Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, margin: '24px 0 52px' }}>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#6b7280' }}>Monthly</span>
          <div onClick={() => setYearly(y => !y)} style={{ position: 'relative', width: 48, height: 26, background: yearly ? 'var(--red)' : '#e5e5e5', borderRadius: 100, cursor: 'pointer', transition: 'background .2s' }}>
            <div style={{ position: 'absolute', top: 3, left: 3, width: 20, height: 20, background: '#fff', borderRadius: '50%', transition: 'transform .2s', transform: yearly ? 'translateX(22px)' : 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
          </div>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#6b7280' }}>Yearly</span>
          <span style={{ background: '#dcfce7', color: '#166534', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 100, fontFamily: 'var(--font-mono)' }}>Save 17%</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 960, margin: '0 auto' }}>
          {PLANS.map(({ name, tagline, monthly, yearly: yr, popular, features }) => (
            <div key={name} style={{ background: popular ? 'var(--red)' : '#fff', border: popular ? '1px solid var(--red)' : '1px solid #e5e5e5', borderRadius: 20, padding: 32, position: 'relative' }}>
              {popular && (
                <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: '#7f1d1d', color: '#fca5a5', fontSize: 11, fontWeight: 600, padding: '6px 16px', borderRadius: '0 0 12px 12px', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
                  ⚡ Most Popular
                </div>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: popular ? '#fff' : '#111', marginBottom: 6 }}>{name}</div>
              <div style={{ fontSize: 13, color: popular ? 'rgba(255,255,255,0.75)' : '#6b7280', marginBottom: 24 }}>{tagline}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: popular ? '#fff' : '#111', lineHeight: 1, marginBottom: 4 }}>
                ${yearly ? yr : monthly}
              </div>
              <div style={{ fontSize: 14, color: popular ? 'rgba(255,255,255,0.7)' : '#9ca3af', marginBottom: 28 }}>/month</div>
              <button style={{ width: '100%', padding: 13, borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', border: 'none', background: popular ? '#fff' : '#fef2f2', color: 'var(--red)', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                Start Free Trial →
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {features.map(({ text, ok }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: popular ? (ok ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)') : (ok ? '#374151' : '#9ca3af'), textDecoration: ok ? 'none' : 'line-through' }}>
                    <div style={{ width: 18, height: 18, background: ok ? (popular ? 'rgba(255,255,255,0.2)' : '#dcfce7') : (popular ? 'rgba(255,255,255,0.1)' : '#fee2e2'), borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: ok ? (popular ? '#fff' : '#166534') : (popular ? 'rgba(255,255,255,0.5)' : '#dc2626'), flexShrink: 0 }}>
                      {ok ? '✓' : '✗'}
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
