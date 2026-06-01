import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email().max(200),
})

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID || !process.env.GUIDE_TOKEN) {
    return NextResponse.json({ error: 'Konfiguráció hiányzik' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const { email } = schema.parse(body)

    await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID,
      email,
      unsubscribed: false,
    })

    await resend.emails.send({
      from: 'NEZOR <onboarding@resend.dev>',
      to: email,
      subject: 'Megkaptuk! Az útmutatód itt van →',
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;">
          <h1 style="font-size:28px;font-weight:700;color:#0a1f44;margin-bottom:16px;">
            Köszönjük a feliratkozást!
          </h1>
          <p style="font-size:17px;color:#2d4670;line-height:1.6;margin-bottom:24px;">
            Az útmutatód azonnal elérhető — kattints az alábbi gombra, és olvasd el,
            hogyan hozz több ügyfelet a vállalkozásodnak online.
          </p>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://nezor.hu'}/epitoiparosoknak/utmutato?token=${process.env.GUIDE_TOKEN}"
             style="display:inline-block;background:#1e4fd8;color:#fff;padding:16px 32px;border-radius:4px;text-decoration:none;font-size:17px;font-weight:600;">
            Olvasom az útmutatót →
          </a>
          <p style="font-size:14px;color:#6b7a99;margin-top:32px;line-height:1.5;">
            Ha kérdésed van, írj nekünk:
            <a href="mailto:info@nezor.hu" style="color:#1e4fd8;">info@nezor.hu</a><br>
            NEZOR Webfejlesztés — Müller Dániel &amp; Jelencsity Miklós
          </p>
        </div>
      `,
    })

    await resend.emails.send({
      from: 'NEZOR Rendszer <onboarding@resend.dev>',
      to: 'miklosjelencsity@gmail.com',
      subject: `Új feliratkozó: ${escHtml(email)}`,
      html: `<p>Új feliratkozó az építőiparos lead magnetre:</p><p><strong>${escHtml(email)}</strong></p>`,
    })

    return NextResponse.json({ success: true, token: process.env.GUIDE_TOKEN })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Érvénytelen email cím' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }
}
