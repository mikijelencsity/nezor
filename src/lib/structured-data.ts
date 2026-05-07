export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NEZOR',
    description: 'Professzionális weboldal és webshop készítés, Facebook hirdetés kezelés.',
    url: 'https://nezor.hu',
    email: 'nezorweb@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Bács-Kiskun',
      addressCountry: 'HU',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bács-Kiskun megye' },
      { '@type': 'Country', name: 'Magyarország' },
    ],
    serviceType: ['Weboldal készítés', 'Webshop fejlesztés', 'Facebook hirdetés kezelés'],
    priceRange: '$$',
    openingHours: ['Mo-Fr 09:00-18:00'],
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function blogPostSchema(post: { title: string; description: string; date: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://nezor.hu/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'NEZOR', url: 'https://nezor.hu' },
    publisher: { '@type': 'Organization', name: 'NEZOR', url: 'https://nezor.hu' },
  }
}
