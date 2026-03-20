export const metadata = { title: 'Contact — Danbi Kim' }

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/danbikim', display: 'linkedin.com/in/danbikim' },
  { label: 'Email', href: 'mailto:danbi000121@gmail.com', display: 'danbi000121@gmail.com' },
]

export default function Contact() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Contact</h1>

      <div className="space-y-4">
        {links.map(({ label, href, display }) => (
          <div key={label} className="flex items-baseline gap-6">
            <span className="text-xs uppercase tracking-widest text-gray-400 w-20 shrink-0">
              {label}
            </span>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm text-black hover:opacity-50 transition-opacity"
            >
              {display}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
