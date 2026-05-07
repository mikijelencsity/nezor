'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbAsyncInit: () => void
    FB: {
      init: (options: { xfbml: boolean; version: string }) => void
    }
  }
}

export function MessengerWidget() {
  const pageId = process.env.NEXT_PUBLIC_FB_PAGE_ID

  useEffect(() => {
    if (!pageId) return

    window.fbAsyncInit = function () {
      window.FB.init({ xfbml: true, version: 'v18.0' })
    }

    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/hu_HU/sdk/xfbml.customerchat.js'
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [pageId])

  if (!pageId) return null

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        data-attribution="biz_inbox"
        data-page_id={pageId}
        data-theme_color="#00CFFF"
        data-logged_in_greeting="Szia! Miben segíthetünk?"
        data-logged_out_greeting="Szia! Miben segíthetünk?"
      />
    </>
  )
}
