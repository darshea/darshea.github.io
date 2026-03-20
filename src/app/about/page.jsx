export const metadata = { title: 'About — Danbi Kim' }

export default function About() {
  return (
    <div className="space-y-10 pt-2">

      {/* Banner photo */}
      <div className="w-full overflow-hidden rounded-sm" style={{ height: '280px' }}>
        <img
          src="/images/about-banner.jpg"
          alt="Danbi Kim"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Bio */}
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

    </div>
  )
}
