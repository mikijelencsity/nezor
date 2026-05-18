import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#1A1A2E',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            background: 'rgba(0,207,255,0.18)',
            borderRadius: '50%',
            filter: 'blur(6px)',
          }}
        />
        {/* Gradient N */}
        <span
          style={{
            fontSize: 21,
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #00CFFF 0%, #0090FF 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1,
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  )
}
