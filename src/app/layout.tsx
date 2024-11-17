// app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MouseEffect from '@/components/MouseEffect'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GeekWeb - 技术社区',
  description: 'A community for tech enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-space-900 text-white`}>
        <MouseEffect />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}