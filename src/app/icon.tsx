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
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#00CFFF',
            fontSize: 20,
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-1px',
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  )
}
