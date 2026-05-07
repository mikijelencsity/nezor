import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { BlogPost } from '@/types'

interface BlogPreviewProps {
  posts: BlogPost[]
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Tippek és tudástár"
          description="Hasznos cikkek weboldalakról, webshopokról és digitális marketingről."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group">
              <span className="text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">{post.category}</span>
              <h3 className="font-display font-bold text-dark mt-3 mb-2 group-hover:text-cyan transition-colors">{post.title}</h3>
              <p className="text-sm text-muted mb-4 line-clamp-2">{post.description}</p>
              <div className="flex items-center gap-2 text-xs text-muted">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Button href="/blog" variant="outline">
            Összes cikk <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
