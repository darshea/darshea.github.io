export const metadata = { title: 'About — Danbi Kim' }

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">About</h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          I'm Danbi Kim, a quant/AI researcher based in Seoul.
          I build systems that sit at the boundary of machine learning and financial markets.
        </p>
        <p>
          Currently working on the AI Displacement Score (ADS) — a framework for
          quantifying how AI disrupts public companies — and an algorithmic gold trading system.
        </p>
        <p>
          Previously in fintech and data engineering. Interested in credit markets,
          autonomous agents, and anything that replaces a spreadsheet with a model.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">
          Now
        </h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>→ ADS: AI Displacement Score research framework</li>
          <li>→ gold-trader: multi-agent XAU/USD trading system</li>
          <li>→ Writing about AI risk and credit analysis</li>
        </ul>
      </div>
    </div>
  )
}
