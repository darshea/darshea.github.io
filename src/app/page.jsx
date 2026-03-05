import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-8">
      <h1 className="text-4xl font-semibold tracking-tight mb-3">Danbi Kim</h1>
      <p className="text-gray-500 text-lg mb-12">
        Building at the intersection of AI and finance.
      </p>
      <nav className="flex gap-6 text-sm">
        {['About', 'Projects', 'Blog', 'Contact'].map((label) => (
          <Link
            key={label}
            href={`/${label.toLowerCase()}`}
            className="text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
