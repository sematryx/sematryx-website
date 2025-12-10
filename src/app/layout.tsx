import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sematryx.com'),
  title: 'Sematryx - Logic, Math, Language, Learning',
  description: 'Sematryx solves optimization problems traditional tools can\'t. Our Intelligence Hub orchestrates AI strategies with built-in compliance and full explainability for regulated industries.',
  openGraph: {
    title: 'Sematryx - Logic, Math, Language, Learning',
    description: 'Sematryx solves optimization problems traditional tools can\'t. Our Intelligence Hub orchestrates AI strategies with built-in compliance and full explainability for regulated industries.',
    type: 'website',
    siteName: 'Sematryx',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sematryx - Logic, Math, Language, Learning',
    description: 'Sematryx solves optimization problems traditional tools can\'t. Our Intelligence Hub orchestrates AI strategies with built-in compliance and full explainability for regulated industries.',
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