import type { Metadata } from 'next'
import './globals.css'
import Header from './common/Header'
import Footer from './common/Footer'
export const metadata: Metadata = {
  title: 'Stack Junior',
  description: 'A trusted community of students for learning and growing together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] lg:px-[44px] md:px-[30px] px-[20] mx-auto">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
