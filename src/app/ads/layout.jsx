export default function AdsLayout({ children }) {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col antialiased">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
        {children}
      </main>
    </div>
  )
}
