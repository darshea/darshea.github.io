import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Danbi Kim',
  description: 'Building at the intersection of AI and finance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
