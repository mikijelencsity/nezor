import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Tippek weboldalakról, webshopokról és Facebook hirdetésekről',
  description: 'Hasznos cikkek digitális marketingről, weboldal készítésről és webshop fejlesztésről magyar vállalkozásoknak.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Blog" title="Tudástár és tippek" description="Cikkek amelyek segítenek az online jelenlétedben." />

        {/* Featured post */}
        {featured && (
          <div className="animate-fade-up mb-12">
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block bg-dark rounded-3xl overflow-hidden p-10 md:p-14 hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan/10 rounded-full blur-3xl" />
              <div className="relative max-w-2xl">
                <span className="inline-block bg-cyan text-white text-xs font-display font-bold px-3 py-1 rounded-full mb-4">{featured.category}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-cyan transition-colors leading-tight">{featured.title}</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{featured.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(featured.date).toLocaleDateString('hu-HU')}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readingTime}</span>
                  <span className="flex items-center gap-1.5 text-cyan font-semibold">Olvasd el <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <article
              key={post.slug}
              className="animate-fade-up relative bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">{post.category}</span>
              <h2 className="font-display font-bold text-dark text-lg mt-3 mb-2 group-hover:text-cyan transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">{post.title}</Link>
              </h2>
              <p className="text-sm text-muted mb-4 line-clamp-3">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /><time dateTime={post.date}>{new Date(post.date).toLocaleDateString('hu-HU')}</time></span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
