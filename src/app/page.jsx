export const metadata = { title: 'Danbi Kim' }

export default function Home() {
  return (
    <div className="space-y-20 pt-2">

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-gray-400">ADS</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          AI Displacement Score — an automated pipeline that researches public companies
          and quantifies their exposure to AI disruption.
        </p>
        <a
          href="/ads"
          className="inline-block text-sm text-black border-b border-black pb-0.5 hover:opacity-40 transition-opacity"
        >
          View ADS →
        </a>
      </section>

      <section className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-gray-400">About</p>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>Made in Moscow, raised in Seoul, based in Vancouver. Korean Canadian.</p>
          <p>
            Started out building license plate recognition at my dad&apos;s company, then automated
            paperwork at a law firm with Python. Did a co-op at Pratt &amp; Whitney figuring out
            how to use AI to make airplane engine parts supply more reliable. Now at Powerex
            (BC Hydro) — daily P&amp;L, financial data pipelines, catching bad data with ML, and
            learning how energy markets work along the way. CS from SFU.
          </p>
          <p>
            Right now I&apos;m also working on an algorithmic gold trading bot that runs 24/7, and
            a scoring system that measures how AI will disrupt public companies.
          </p>
          <p>Sundays are for church &amp; kitchen volunteering.</p>
        </div>
      </section>

    </div>
  )
}
