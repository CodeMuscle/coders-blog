import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coders Blog',
  description: 'Built using Strapi and NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <div className="mx-auto container">

            <Navbar />
            <main>
              {children}
            </main>
            <Footer />


          </div>
        </>
        </body>
    </html>
  )
}
