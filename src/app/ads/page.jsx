export const metadata = { title: 'ADS — Danbi Kim' }

const issues = [
  {
    number: 1,
    title: 'ServiceNow (NOW)',
    date: 'March 2026',
    href: '/ads/weekly/issue-1/',
  },
]

export default function ADS() {
  return (
    <div className="space-y-16">

      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">ADS</h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
          AI Displacement Score is an automated research pipeline that scores public companies
          on their exposure to AI disruption — analyzing business model, revenue mix,
          workforce composition, and competitive dynamics.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-gray-400">Weekly</p>
        <div className="space-y-0">
          {issues.map((issue) => (
            <a
              key={issue.number}
              href={issue.href}
              className="flex items-baseline justify-between border-t border-gray-100 py-4 group"
            >
              <span className="text-sm text-black group-hover:opacity-40 transition-opacity">
                #{issue.number} — {issue.title}
              </span>
              <span className="text-xs text-gray-400 shrink-0 ml-6">{issue.date}</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}
