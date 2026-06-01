import { readFileSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  const validToken = process.env.GUIDE_TOKEN

  if (!validToken || token !== validToken) {
    return NextResponse.redirect(new URL('/epitoiparosoknak', req.url))
  }

  const filePath = join(process.cwd(), 'public', 'epitoiparosoknak', 'utmutato.html')
  const html = readFileSync(filePath, 'utf-8')
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
