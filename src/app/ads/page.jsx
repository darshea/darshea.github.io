export const metadata = {
  title: 'ADS — AI Displacement Score',
  description: 'Structured AI risk analysis for public equities. Five dimensions. One score.',
}

const SUBSTACK_URL = '[SUBSTACK_URL]'

const dimensions = [
  { id: 'D1', name: 'Labor Vulnerability',  desc: '% of workforce in roles with high automation exposure. O*NET automation scores × company department weights, AI hiring ratio as adaptation signal.' },
  { id: 'D2', name: 'Revenue Durability',   desc: 'How defensible recurring revenue is against AI substitution. NRR, contract duration, consumption-based vs. seat-based mix, customer concentration.' },
  { id: 'D3', name: 'Pricing Power',        desc: 'Ability to maintain price when AI alternatives exist. Gross margin trend (8Q), competitive pricing pressure, free/open-source AI alternatives.' },
  { id: 'D4', name: 'Intermediation',       desc: 'How easily AI can bypass the company\'s value chain. Value-chain layers, direct substitution pathways, platform dependency vs. standalone defensibility.' },
  { id: 'D5', name: 'Adaptation Speed',     desc: 'How fast the company is building its own AI capability. AI product revenue, R&D allocation, acquisition strategy, time-to-market on AI features.' },
]

export default function ADS() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: '#1a1a1a', lineHeight: '1.7' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#999', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 12 }}>
          AI Displacement Score
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, letterSpacing: '-0.5px', marginBottom: 10, fontWeight: 400 }}>
          Structured AI risk analysis<br />for public equities.
        </h1>
        <p style={{ fontSize: 15, color: '#666', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.6 }}>
          Five dimensions. One score. Which companies are exposed — and which are building the moat.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#scores" style={{ fontSize: 14, color: '#fff', background: '#1a1a1a', padding: '10px 24px', textDecoration: 'none', fontWeight: 500 }}>
            View latest scores
          </a>
          <a href={SUBSTACK_URL} style={{ fontSize: 14, color: '#555', border: '1px solid #ddd', padding: '10px 24px', textDecoration: 'none' }}>
            Subscribe — $19/mo
          </a>
        </div>
      </div>

      {/* The Problem */}
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
        The Problem
      </h2>
      <div style={{ background: '#f8f8f8', borderLeft: '3px solid #1a1a1a', padding: '20px 24px', marginBottom: 48, fontSize: 14, color: '#555', lineHeight: 1.8 }}>
        <strong style={{ color: '#1a1a1a' }}>Earnings calls mention AI 300% more than two years ago.</strong> But there&apos;s no standardized framework to measure which companies face real displacement risk — and which are just talking.
        <br /><br />
        ADS is a systematic, repeatable methodology for scoring AI displacement risk at the company level. Not sentiment. Not hype. <strong style={{ color: '#1a1a1a' }}>Structure.</strong>
      </div>

      {/* Methodology */}
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
        How ADS Works
      </h2>

      <p style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>Every company goes through a three-stage pipeline.</p>

      {/* Stage 1 */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px', color: '#888', marginBottom: 12 }}>
          Stage 1 — Data Collection
        </div>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: 14, color: '#555' }}>
          {[
            'SEC 10-K / 10-Q filings (EDGAR) · Earnings transcripts · Management guidance',
            'O*NET occupation classifications × company headcount · AI/ML hiring ratio from job postings',
            'Gross margin & operating margin trends (8-quarter trailing) · Revenue mix · Customer concentration',
            'AI-native entrant landscape per vertical · Switching cost analysis · Patent and R&D intensity',
          ].map((item) => (
            <li key={item} style={{ marginBottom: 8 }}>
              <span style={{ color: '#999' }}>→ </span>{item}
            </li>
          ))}
        </ul>
      </div>

      {/* Stage 2 */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px', color: '#888', marginBottom: 16 }}>
          Stage 2 — Five-Dimension Scoring (0–100 each)
        </div>
        {dimensions.map((d) => (
          <div key={d.id} style={{ display: 'flex', gap: 16, borderTop: '1px solid #f0f0f0', paddingTop: 14, paddingBottom: 14 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#aaa', width: 28, flexShrink: 0, paddingTop: 2 }}>{d.id}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{d.name}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{d.desc}</div>
            </div>
          </div>
        ))}
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#bbb', marginTop: 12, borderTop: '1px solid #f0f0f0', paddingTop: 12 }}>
          Composite ADS = weighted average across D1–D5, normalized to 0–100.
        </div>
      </div>

      {/* Stage 3 */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px', color: '#888', marginBottom: 12 }}>
          Stage 3 — Report Generation
        </div>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: 14, color: '#555' }}>
          {[
            'Five-dimension breakdown with supporting data points',
            'Competitive landscape mapping',
            'Key trigger identification — the single event most likely to cause a material score change',
            'Quarterly re-scoring as new filings become available',
          ].map((item) => (
            <li key={item} style={{ marginBottom: 8 }}>
              <span style={{ color: '#999' }}>→ </span>{item}
            </li>
          ))}
        </ul>
      </div>

      {/* Risk Classification */}
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
        Score Interpretation
      </h2>
      <div style={{ marginBottom: 48 }}>
        {[
          { range: '70–100', label: 'HIGH RISK',   color: '#dc2626', bg: '#fef2f2', desc: 'AI displacement is structural and underway. Core business model directly threatened.' },
          { range: '40–69',  label: 'MEDIUM RISK', color: '#d97706', bg: '#fffbeb', desc: 'Material exposure exists but company has defensible layers or active adaptation.' },
          { range: '0–39',   label: 'LOW RISK',    color: '#16a34a', bg: '#f0fdf4', desc: 'Net AI beneficiary or strong defensive position. AI is a tailwind, not a threat.' },
        ].map(({ range, label, color, bg, desc }) => (
          <div key={range} style={{ display: 'flex', gap: 16, borderTop: '1px solid #f0f0f0', paddingTop: 14, paddingBottom: 14, alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: 88 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#aaa' }}>{range}</div>
              <span style={{ display: 'inline-block', marginTop: 4, padding: '2px 8px', borderRadius: 3, fontSize: 10, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", background: bg, color }}>
                {label}
              </span>
            </div>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Latest Scores */}
      <h2 id="scores" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
        Latest Scores
      </h2>
      <div style={{ marginBottom: 48 }}>
        <a href="/ads/weekly/issue-1/" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid #f0f0f0', padding: '14px 0', textDecoration: 'none', color: '#1a1a1a' }}>
          <span style={{ fontSize: 14 }}>ISSUE #1</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#aaa' }}>March 20, 2026</span>
        </a>
        <div style={{ borderTop: '1px solid #f0f0f0' }} />
      </div>

      {/* What You Get */}
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
        What You Get
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 48 }}>
        <div style={{ border: '1px solid #eee', padding: 20 }}>
          <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Free</p>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: 13, color: '#666' }}>
            {['Weekly score table for every company covered', 'One-page summary per company', 'Delivered to your inbox'].map((item) => (
              <li key={item} style={{ marginBottom: 6 }}><span style={{ color: '#999' }}>→ </span>{item}</li>
            ))}
          </ul>
        </div>
        <div style={{ border: '1px solid #1a1a1a', padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 600 }}>Pro</p>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#aaa' }}>$19/month</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: 13, color: '#666', marginBottom: 16 }}>
            {['Full methodology report per company', 'SEC-sourced data, five-dimension breakdown with supporting inputs', 'Competitive landscape and trigger analysis'].map((item) => (
              <li key={item} style={{ marginBottom: 6 }}><span style={{ color: '#999' }}>→ </span>{item}</li>
            ))}
          </ul>
          <a href={SUBSTACK_URL} style={{ fontSize: 13, color: '#1a1a1a', borderBottom: '1px solid #1a1a1a', paddingBottom: 1, textDecoration: 'none' }}>
            Subscribe on Substack →
          </a>
        </div>
      </div>

      {/* Roadmap */}
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
        What&apos;s Coming
      </h2>
      <div style={{ marginBottom: 48 }}>
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 20, paddingBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
            <p style={{ fontSize: 14, fontWeight: 600 }}>Layer 1 — Daily Quantitative Factors</p>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#bbb' }}>in development</span>
          </div>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, maxWidth: 520 }}>
            Real-time market data overlay on top of the quarterly ADS score. Price action, margin trends, AI hiring ratios, and news sentiment collected daily via API — no LLM dependency, fully deterministic.
          </p>
        </div>
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 20, paddingBottom: 20 }}>
          <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>v2 — AI Capability × Job Description Matching</p>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, maxWidth: 520 }}>
            Classifying every emerging AI function by current automation capability level. Cross-referencing against actual company job descriptions to produce granular, role-level displacement estimates.
          </p>
          <div style={{ background: '#fafafa', borderLeft: '3px solid #d97706', padding: '12px 16px', marginTop: 12, fontSize: 13, color: '#555' }}>
            <strong style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#d97706', display: 'block', marginBottom: 4 }}>
              Target
            </strong>
            Not &quot;this company is at risk&quot; — &quot;this specific function displaces this specific role, at this confidence level, today.&quot;
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #e0e0e0', fontSize: 12, color: '#bbb', lineHeight: 1.8 }}>
        <p>AI Displacement Score by <a href="https://danbikim.github.io" style={{ color: '#888', textDecoration: 'none' }}>Danbi Kim</a></p>
        <p style={{ marginTop: 4 }}>This is an analytical framework, not investment advice. The author may hold positions in securities discussed.</p>
      </div>

    </div>
  )
}
