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

    </div>
  )
}
