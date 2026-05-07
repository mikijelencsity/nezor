import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Nem található' }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://nezor.hu/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-cyan mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Vissza a bloghoz
        </Link>
        <span className="text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mt-4 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted mb-10 pb-6 border-b border-gray-100">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('hu-HU')}
            </time>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {post.readingTime}
          </span>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-dark prose-a:text-cyan">
          <MDXRemote source={post.content ?? ''} />
        </div>
      </div>
    </article>
  )
}
