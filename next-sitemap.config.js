/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nezor.hu',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async () => [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/weboldalak', priority: 0.9, changefreq: 'monthly' },
    { loc: '/webshopok', priority: 0.9, changefreq: 'monthly' },
    { loc: '/facebook-hirdetesek', priority: 0.9, changefreq: 'monthly' },
    { loc: '/csomagok', priority: 0.8, changefreq: 'weekly' },
    { loc: '/referenciak', priority: 0.7, changefreq: 'monthly' },
  ],
}
