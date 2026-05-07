import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional(),
  service: z.enum(['weboldalak', 'webshopok', 'facebook', 'egyeb']),
  message: z.string().min(10).max(2000),
})

const serviceLabels: Record<string, string> = {
  weboldalak: 'Weboldal készítés',
  webshopok: 'Webshop fejlesztés',
  facebook: 'Facebook hirdetések',
  egyeb: 'Egyéb',
}

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      // TODO: Replace with your verified Resend domain email before deploying
      // e.g., 'NEZOR Kapcsolat <noreply@nezor.hu>' after setting up the domain in Resend
      from: 'NEZOR Kapcsolat <onboarding@resend.dev>',
      to: 'nezorweb@gmail.com',
      subject: `Új érdeklődő: ${escHtml(data.name)} — ${serviceLabels[data.service]}`,
      html: `
        <h2>Új kapcsolatfelvétel a nezor.hu-ról</h2>
        <p><strong>Név:</strong> ${escHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escHtml(data.email)}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${escHtml(data.phone)}</p>` : ''}
        <p><strong>Szolgáltatás:</strong> ${serviceLabels[data.service]}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${escHtml(data.message).replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Érvénytelen adatok' }, { status: 400 })
    }
    console.error('[contact] send failed:', error)
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }
}
