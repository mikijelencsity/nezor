'use client'

import { useEffect } from 'react'

const GA_ID = 'G-X79GL5MKMH'

export function GoogleAnalytics() {
  useEffect(() => {
    function loadGA() {
      if (document.getElementById('ga-script')) return
      const script = document.createElement('script')
      script.id = 'ga-script'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(script)

      const inline = document.createElement('script')
      inline.id = 'ga-inline'
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `
      document.head.appendChild(inline)
    }

    // Check existing consent
    const consent = localStorage.getItem('nezor_cookie_consent')
    if (consent === 'accepted') loadGA()

    // Listen for future consent
    window.addEventListener('nezor_cookie_accepted', loadGA)
    return () => window.removeEventListener('nezor_cookie_accepted', loadGA)
  }, [])

  return null
}
