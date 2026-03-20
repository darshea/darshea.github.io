export default function AdsLayout({ children }) {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen flex flex-col font-dm">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
        {children}
      </main>
    </div>
  )
}
