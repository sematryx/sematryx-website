import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aeao-website.vercel.app'),
  title: 'AEAO - Enterprise Optimization Framework',
  description: 'Enterprise-grade optimization with 15 coordinated AI systems, continuous learning, and full explainability. 22-26% performance boost over traditional optimizers. Financial, healthcare, supply chain, and more.',
  openGraph: {
    title: 'AEAO - Enterprise Optimization Framework',
    description: 'Enterprise-grade optimization with 15 coordinated AI systems, continuous learning, and full explainability. 22-26% performance boost over traditional optimizers.',
    type: 'website',
    siteName: 'AEAO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEAO - Enterprise Optimization Framework',
    description: 'Enterprise-grade optimization with 15 coordinated AI systems, continuous learning, and full explainability.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}