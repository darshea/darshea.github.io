import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = { title: 'Blog — Danbi Kim' }

function fmt(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-sm">Posts coming soon.</p>
      ) : (
        <div className="space-y-0">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-baseline justify-between border-t border-gray-100 py-4 group"
            >
              <span className="text-sm text-black group-hover:opacity-50 transition-opacity">
                {post.title}
              </span>
              <span className="text-xs text-gray-400 shrink-0 ml-6">
                {post.date ? fmt(post.date) : ''}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
