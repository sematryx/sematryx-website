import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sematryx.com'),
  title: 'Sematryx - Enterprise Optimization Framework',
  description: 'Sematryx solves optimization problems that traditional optimizers can\'t handle—with an Intelligence Hub that orchestrates and synthesizes insights from multiple AI systems, built-in compliance for regulatory constraints, explainable decisions for audit trails, and continuous learning—powered by the AEAO Engine.',
  openGraph: {
    title: 'Sematryx - Enterprise Optimization Framework',
    description: 'Sematryx solves optimization problems that traditional optimizers can\'t handle—with an Intelligence Hub that orchestrates and synthesizes insights from multiple AI systems, built-in compliance for regulatory constraints, explainable decisions for audit trails, and continuous learning—powered by the AEAO Engine.',
    type: 'website',
    siteName: 'Sematryx',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sematryx - Enterprise Optimization Framework',
    description: 'Sematryx solves optimization problems that traditional optimizers can\'t handle—with an Intelligence Hub that orchestrates and synthesizes insights from multiple AI systems, built-in compliance for regulatory constraints, explainable decisions for audit trails, and continuous learning—powered by the AEAO Engine.',
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