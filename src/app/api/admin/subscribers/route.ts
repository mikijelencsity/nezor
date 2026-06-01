import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET(req: NextRequest) {
  const password = req.nextUrl.searchParams.get('password')

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    return NextResponse.json({ error: 'Konfiguráció hiányzik' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE_ID,
    })

    if (error) throw error

    return NextResponse.json({ contacts: data?.data ?? [] })
  } catch {
    return NextResponse.json({ error: 'Nem sikerült lekérni a listát' }, { status: 500 })
  }
}
