import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aeao-website.vercel.app'),
  title: 'AEAO - Enterprise Optimization Framework',
  description: 'The world\'s most advanced optimization framework. Where traditional optimizers solve mathematical problems, AEAO solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.',
  openGraph: {
    title: 'AEAO - Enterprise Optimization Framework',
    description: 'The world\'s most advanced optimization framework. Where traditional optimizers solve mathematical problems, AEAO solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.',
    type: 'website',
    siteName: 'AEAO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEAO - Enterprise Optimization Framework',
    description: 'The world\'s most advanced optimization framework. Where traditional optimizers solve mathematical problems, AEAO solves enterprise problems with AI-powered intelligence, compliance, and continuous learning.',
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