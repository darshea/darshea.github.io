import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
