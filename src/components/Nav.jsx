import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="max-w-2xl mx-auto w-full px-6 pt-10 pb-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold text-black hover:opacity-50 transition-opacity">
          Danbi Kim
        </Link>
        <div className="flex gap-6">
          <Link href="/about" className="text-sm text-gray-500 hover:text-black transition-colors">
            About
          </Link>
          <Link href="/ads" className="text-sm text-gray-500 hover:text-black transition-colors">
            ADS
          </Link>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-black transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
