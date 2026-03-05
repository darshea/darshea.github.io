import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="max-w-2xl mx-auto w-full px-6 pt-10 pb-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold text-black hover:opacity-60 transition-opacity">
          Danbi Kim
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
