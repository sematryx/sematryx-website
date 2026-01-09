import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import './globals.css'
import FeedbackButton from '@/components/FeedbackButton'

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
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  // Only render ClerkProvider if key is available (prevents build errors)
  if (!clerkPublishableKey) {
    return (
      <html lang="en">
        <body className={inter.className}>
          {children}
          <FeedbackButton />
        </body>
      </html>
    )
  }

  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#6366f1',
          colorBackground: '#1a1f2e',
          colorInputBackground: '#0f1419',
          colorInputText: '#ffffff',
        },
        elements: {
          formButtonPrimary: 'bg-primary-600 hover:bg-primary-500',
          card: 'bg-[#1a1f2e] border border-gray-700',
          headerTitle: 'text-white',
          headerSubtitle: 'text-gray-400',
          socialButtonsBlockButton: 'bg-[#242b3d] border-gray-600 text-white hover:bg-[#2d3548]',
          formFieldLabel: 'text-gray-300',
          formFieldInput: 'bg-[#0f1419] border-gray-600 text-white',
          footerActionLink: 'text-primary-400 hover:text-primary-300',
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {children}
          <FeedbackButton />
        </body>
      </html>
    </ClerkProvider>
  )
}
