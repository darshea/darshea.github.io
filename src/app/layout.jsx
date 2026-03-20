import './globals.css'

export const metadata = {
  title: 'Danbi Kim',
  description: 'Building at the intersection of AI and finance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  )
}
