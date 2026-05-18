import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NEZOR — Weboldal, Webshop és Facebook Hirdetések'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #1A1A2E 0%, #0d0d1a 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow top right */}
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,207,255,0.18) 0%, transparent 65%)',
        }} />
        {/* Glow bottom left */}
        <div style={{
          position: 'absolute', bottom: -120, left: -80,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,144,255,0.12) 0%, transparent 65%)',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 48, height: 48, background: '#1A1A2E',
            border: '2px solid rgba(0,207,255,0.5)', borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, fontWeight: 900, color: '#00CFFF',
          }}>N</div>
          <span style={{ fontSize: 34, fontWeight: 900, color: '#00CFFF', letterSpacing: '-1px' }}>
            NEZOR
          </span>
        </div>

        {/* Main heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            fontSize: 68, fontWeight: 900, color: 'white',
            lineHeight: 1.05, letterSpacing: '-2px',
          }}>
            Weboldal, Webshop
            <br />
            <span style={{ color: '#00CFFF' }}>és Facebook hirdetések</span>
          </div>
          <div style={{ fontSize: 26, color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>
            Professzionális digitális ügynökség — Bács-Kiskun megye
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Weboldal készítés', 'Webshop fejlesztés', 'Facebook hirdetések'].map((s) => (
              <div key={s} style={{
                background: 'rgba(0,207,255,0.1)',
                border: '1px solid rgba(0,207,255,0.3)',
                borderRadius: 8, padding: '8px 18px',
                color: '#00CFFF', fontSize: 16, fontWeight: 600,
              }}>{s}</div>
            ))}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 20, fontWeight: 500 }}>
            nezor.hu
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
