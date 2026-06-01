import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(100).optional().default(''),
  phone: z.string().max(30).optional().default(''),
  email: z.string().email().max(200),
  industry: z.string().max(100).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  coupon: z.string().max(20).optional().default('NEZOR10'),
})

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Konfiguráció hiányzik' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: 'NEZOR Útmutató <onboarding@resend.dev>',
      to: 'miklosjelencsity@gmail.com',
      subject: `Új érdeklődő az útmutatóból: ${escHtml(data.name)}`,
      html: `
        <h2>Új érdeklődő az építőiparos útmutató oldalról</h2>
        <p><strong>Név:</strong> ${escHtml(data.name)}</p>
        <p><strong>Vállalkozás:</strong> ${escHtml(data.company)}</p>
        <p><strong>Telefon:</strong> ${escHtml(data.phone)}</p>
        <p><strong>Email:</strong> ${escHtml(data.email)}</p>
        <p><strong>Szakma:</strong> ${escHtml(data.industry)}</p>
        <p><strong>Üzenet:</strong> ${escHtml(data.message)}</p>
        <p><strong>Kuponkód:</strong> ${escHtml(data.coupon)}</p>
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
