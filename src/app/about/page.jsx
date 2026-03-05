export const metadata = { title: 'About — Danbi Kim' }

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">About</h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Made in Moscow, raised in Seoul, based in Vancouver. Korean Canadian.
        </p>
        <p>
          CS grad from SFU, currently a Management Reporting Analyst at Powerex (BC Hydro) —
          building financial data pipelines and ML-powered anomaly detection. Before that:
          data science at Pratt &amp; Whitney Canada, license plate detection at a Vancouver
          startup, and automating legal workflows with Python at a law firm.
        </p>
        <p>
          After hours I build things I want to exist. Right now that's an algorithmic gold
          trading bot running 24/7, and a research tool that scores how AI will disrupt
          public companies.
        </p>
        <p>
          Sundays are for church and kitchen volunteering.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">
          Now
        </h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>→ gold-trader: algorithmic XAU/USD trading bot, running 24/7</li>
          <li>→ ADS: automated pipeline that scores AI disruption risk for public companies</li>
        </ul>
      </div>
    </div>
  )
}
