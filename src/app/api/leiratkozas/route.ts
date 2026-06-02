import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')

  if (!email || !process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    return NextResponse.redirect(new URL('/leiratkozas?status=hiba', req.url))
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.contacts.update({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: true,
    })
    return NextResponse.redirect(new URL('/leiratkozas?status=ok', req.url))
  } catch {
    return NextResponse.redirect(new URL('/leiratkozas?status=hiba', req.url))
  }
}
