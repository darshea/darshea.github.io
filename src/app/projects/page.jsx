export const metadata = { title: 'Projects — Danbi Kim' }

const projects = [
  {
    name: 'ADS — AI Displacement Score',
    description:
      'Automated pipeline that researches public companies and quantifies their AI disruption risk.',
    url: null,
    status: 'Active',
  },
  {
    name: 'gold-trader',
    description:
      'Algorithmic XAU/USD trading system with 10+ agents analyzing Bollinger Bands, trend, support/resistance, and retail positioning.',
    url: null,
    status: 'Active',
  },
]

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Projects</h1>

      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.name} className="border-t border-gray-100 pt-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="font-medium text-black">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="hover:opacity-50 transition-opacity">
                    {p.name}
                  </a>
                ) : p.name}
              </h2>
              <span className="text-xs text-gray-400 shrink-0 mt-0.5">{p.status}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
