import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.enum(['weboldalak', 'webshopok', 'facebook', 'egyeb']),
  message: z.string().min(10),
})

const serviceLabels: Record<string, string> = {
  weboldalak: 'Weboldal készítés',
  webshopok: 'Webshop fejlesztés',
  facebook: 'Facebook hirdetések',
  egyeb: 'Egyéb',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: 'NEZOR Kapcsolat <onboarding@resend.dev>',
      to: 'nezorweb@gmail.com',
      subject: `Új érdeklődő: ${data.name} — ${serviceLabels[data.service]}`,
      html: `
        <h2>Új kapcsolatfelvétel a nezor.hu-ról</h2>
        <p><strong>Név:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
        <p><strong>Szolgáltatás:</strong> ${serviceLabels[data.service]}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${data.message.replace(/\n/g, '<br/>')}</p>
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
