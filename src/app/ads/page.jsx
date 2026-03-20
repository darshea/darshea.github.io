export const metadata = {
  title: 'ADS — AI Displacement Score',
  description: 'Structured AI risk analysis for public equities. Five dimensions. One score.',
}

const SUBSTACK_URL = '[SUBSTACK_URL]'

const dimensions = [
  {
    id: 'D1',
    name: 'Labor Vulnerability',
    measures: '% of workforce in roles with high automation exposure',
    inputs: 'O*NET automation scores × company department weights, AI hiring ratio as adaptation signal, historical headcount trends',
    signal: 'Higher score = larger share of workforce replaceable by current AI',
  },
  {
    id: 'D2',
    name: 'Revenue Durability',
    measures: 'How defensible recurring revenue is against AI substitution',
    inputs: 'Net revenue retention, contract duration, renewal rates, consumption-based vs. seat-based mix, customer concentration',
    signal: 'Higher score = revenue more vulnerable to AI-driven churn',
  },
  {
    id: 'D3',
    name: 'Pricing Power',
    measures: 'Ability to maintain price when AI alternatives exist',
    inputs: 'Gross margin trend (8Q), competitive pricing pressure, free/open-source AI alternatives in the company\'s category',
    signal: 'Higher score = pricing under more pressure from AI commoditization',
  },
  {
    id: 'D4',
    name: 'Intermediation',
    measures: 'How easily AI can bypass the company\'s value chain',
    inputs: 'Number of value-chain layers, thickness of each layer, direct substitution pathways, platform dependency vs. standalone defensibility',
    signal: 'Higher score = thinner moat, easier for AI to route around',
  },
  {
    id: 'D5',
    name: 'Adaptation Speed',
    measures: 'How fast the company is building its own AI capability',
    inputs: 'AI product revenue (ACV, ARR), R&D allocation to AI, acquisition strategy, time-to-market on AI features, internal AI deployment metrics',
    signal: 'Higher score = slower adaptation, falling behind',
  },
]

const riskLevels = [
  { range: '70–100', label: 'HIGH RISK', color: 'text-red-500', description: 'AI displacement is structural and underway. Core business model directly threatened.' },
  { range: '40–69', label: 'MEDIUM RISK', color: 'text-yellow-500', description: 'Material exposure exists but company has defensible layers or active adaptation.' },
  { range: '0–39', label: 'LOW RISK', color: 'text-green-500', description: 'Net AI beneficiary or strong defensive position. AI is a tailwind, not a threat.' },
]

export default function ADS() {
  return (
    <div className="space-y-24">

      {/* Hero */}
      <div className="space-y-6 pt-2">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-gray-400">AI Displacement Score</p>
          <h1 className="text-3xl font-semibold tracking-tight leading-snug">
            Structured AI risk analysis<br />for public equities.
          </h1>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Five dimensions. One score. Which companies are exposed — and which are building the moat.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#scores"
            className="text-sm text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
          >
            View latest scores
          </a>
          <a
            href={SUBSTACK_URL}
            className="text-sm text-gray-500 border border-gray-200 px-4 py-2 hover:border-black hover:text-black transition-colors"
          >
            Subscribe — $19/mo
          </a>
        </div>
      </div>

      {/* The Problem */}
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-gray-400">The Problem</p>
        <h2 className="text-xl font-semibold">AI risk is structural. Most analysis isn&apos;t.</h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed max-w-lg">
          <p>
            Earnings calls mention AI 300% more than two years ago. But there&apos;s no standardized
            framework to measure which companies face real displacement risk — and which are just talking.
          </p>
          <p>
            ADS is a systematic, repeatable methodology for scoring AI displacement risk at the company
            level. Not sentiment. Not hype. Structure.
          </p>
        </div>
      </div>

      {/* Methodology */}
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-gray-400">Methodology</p>
          <h2 className="text-xl font-semibold">How ADS Works</h2>
          <p className="text-sm text-gray-500">Every company goes through a three-stage pipeline.</p>
        </div>

        {/* Stage 1 */}
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Stage 1 — Data Collection</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: 'Primary Sources',
                items: ['SEC 10-K / 10-Q filings (EDGAR)', 'Quarterly earnings transcripts', 'Management guidance and investor presentations'],
              },
              {
                label: 'Workforce Data',
                items: ['O*NET occupation classifications mapped to company headcount', 'Department-level breakdown (engineering, sales, support, G&A)', 'AI/ML hiring ratio from public job postings'],
              },
              {
                label: 'Market Data',
                items: ['Gross margin and operating margin trends (8-quarter trailing)', 'Revenue mix (subscription vs. consumption vs. one-time)', 'Customer concentration and contract duration'],
              },
              {
                label: 'Competitive Data',
                items: ['AI-native entrant landscape per vertical', 'Switching cost analysis (migration timelines, implementation costs)', 'Patent and R&D intensity'],
              },
            ].map(({ label, items }) => (
              <div key={label} className="border border-gray-100 p-4 space-y-2">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</p>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-xs text-gray-600 leading-relaxed flex gap-2">
                      <span className="text-gray-300 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stage 2 */}
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Stage 2 — Five-Dimension Scoring</p>
          <p className="text-xs text-gray-500">Each dimension is scored 0–100 based on quantifiable indicators.</p>
          <div className="space-y-3">
            {dimensions.map((d) => (
              <div key={d.id} className="border-t border-gray-100 pt-4 space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-medium text-gray-400 w-6 shrink-0">{d.id}</span>
                  <span className="text-sm font-medium text-black">{d.name}</span>
                </div>
                <div className="pl-9 space-y-1">
                  <p className="text-xs text-gray-500"><span className="text-gray-400">Measures: </span>{d.measures}</p>
                  <p className="text-xs text-gray-500"><span className="text-gray-400">Inputs: </span>{d.inputs}</p>
                  <p className="text-xs text-gray-400 italic">{d.signal}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 pt-2">
            Composite ADS = weighted average across D1–D5, normalized to 0–100.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Stage 3 — Report Generation</p>
          <ul className="space-y-1">
            {[
              'Five-dimension breakdown with supporting data points',
              'Competitive landscape mapping',
              'Key trigger identification — the single event most likely to cause a material score change',
              'Quarterly re-scoring as new filings become available',
            ].map((item) => (
              <li key={item} className="text-xs text-gray-600 flex gap-2">
                <span className="text-gray-300 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Risk Classification */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-gray-400">Risk Classification</p>
          <h2 className="text-xl font-semibold">Score Interpretation</h2>
        </div>
        <div className="space-y-3">
          {riskLevels.map(({ range, label, color, description }) => (
            <div key={range} className="border-t border-gray-100 pt-4 flex gap-6">
              <div className="shrink-0 w-20">
                <p className="text-xs font-medium text-gray-400">{range}</p>
                <p className={`text-xs font-semibold mt-0.5 ${color}`}>{label}</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Scores */}
      <div id="scores" className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-gray-400">Latest Scores</p>
        <div className="space-y-0">
          <a
            href="/ads/weekly/issue-1/"
            className="flex items-baseline justify-between border-t border-gray-100 py-4 group"
          >
            <span className="text-sm text-black group-hover:opacity-40 transition-opacity">
              #1 — ServiceNow (NOW)
            </span>
            <span className="text-xs text-gray-400 shrink-0 ml-6">March 20, 2026</span>
          </a>
          <div className="border-t border-gray-100" />
        </div>
      </div>

      {/* What You Get */}
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-gray-400">What You Get</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="border border-gray-100 p-5 space-y-3">
            <p className="text-sm font-medium">Free</p>
            <ul className="space-y-1">
              {['Weekly score table for every company covered', 'One-page summary per company', 'Delivered to your inbox'].map((item) => (
                <li key={item} className="text-xs text-gray-600 flex gap-2">
                  <span className="text-gray-300 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-black p-5 space-y-3">
            <div className="flex items-baseline justify-between">
              <p className="text-sm font-medium">Pro</p>
              <p className="text-xs text-gray-400">$19/month</p>
            </div>
            <ul className="space-y-1">
              {[
                'Full methodology report per company',
                'SEC-sourced data, five-dimension breakdown with supporting inputs',
                'Competitive landscape and trigger analysis',
              ].map((item) => (
                <li key={item} className="text-xs text-gray-600 flex gap-2">
                  <span className="text-gray-300 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={SUBSTACK_URL}
              className="inline-block text-xs text-black border-b border-black pb-0.5 hover:opacity-40 transition-opacity mt-2"
            >
              Subscribe on Substack →
            </a>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-gray-400">Roadmap</p>
          <h2 className="text-xl font-semibold">What&apos;s Coming</h2>
        </div>
        <div className="space-y-6">
          <div className="border-t border-gray-100 pt-5 space-y-2">
            <div className="flex items-baseline gap-3">
              <p className="text-sm font-medium">Layer 1 — Daily Quantitative Factors</p>
              <span className="text-xs text-gray-400">in development</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
              Real-time market data overlay on top of the quarterly ADS score. Price action,
              margin trends, AI hiring ratios, and news sentiment collected daily via API — no
              LLM dependency, fully deterministic. Delivers a continuously updated risk signal
              between quarterly deep-dive re-scores.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-5 space-y-2">
            <p className="text-sm font-medium">v2 — AI Capability × Job Description Matching</p>
            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
              Classifying every emerging AI function (code generation, document processing,
              customer interaction, data analysis) by current automation capability level.
              Cross-referencing against actual company job descriptions and workforce composition
              to produce granular, role-level displacement estimates.
            </p>
            <p className="text-xs text-gray-400 italic mt-2">
              Not &quot;this company is at risk&quot; — &quot;this specific function displaces this specific role,
              at this confidence level, today.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="border-t border-gray-100 pt-6 space-y-1">
        <p className="text-xs text-gray-400">AI Displacement Score by Danbi Kim</p>
        <p className="text-xs text-gray-300 leading-relaxed max-w-lg">
          This is an analytical framework, not investment advice. The author may hold positions
          in securities discussed.
        </p>
      </div>

    </div>
  )
}
