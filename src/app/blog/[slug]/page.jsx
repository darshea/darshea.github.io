import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return { title: `${post.frontmatter.title} — Danbi Kim` }
}

function fmt(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const { frontmatter, content } = post

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold mb-2">{frontmatter.title}</h1>
        {frontmatter.date && (
          <time className="text-xs text-gray-400">{fmt(frontmatter.date)}</time>
        )}
        {frontmatter.description && (
          <p className="text-gray-500 text-sm mt-2">{frontmatter.description}</p>
        )}
      </header>
      <div className="prose prose-sm prose-gray max-w-none
        prose-headings:font-semibold prose-headings:text-black
        prose-a:text-black prose-a:underline prose-a:underline-offset-2
        prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
        prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200">
        <MDXRemote source={content} />
      </div>
    </article>
  )
}
