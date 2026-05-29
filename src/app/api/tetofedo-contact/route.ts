import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(6).max(30),
  email: z.string().email().max(200),
})

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: 'NEZOR Tetőfedő <onboarding@resend.dev>',
      to: 'miklosjelencsity@gmail.com',
      subject: `Új tetőfedő érdeklődő: ${escHtml(data.name)}`,
      html: `
        <h2>Új érdeklődő a tetofedo landing oldalról</h2>
        <p><strong>Név:</strong> ${escHtml(data.name)}</p>
        <p><strong>Telefon:</strong> ${escHtml(data.phone)}</p>
        <p><strong>Email:</strong> ${escHtml(data.email)}</p>
        <p><strong>Ajánlat:</strong> Weboldal + 2 Facebook hirdetés (100.000 Ft)</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Érvénytelen adatok' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }
}
