'use client'

import { SignUp } from '@clerk/nextjs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Force dynamic rendering to avoid static generation issues with Clerk
export const dynamic = 'force-dynamic'

export default function SignUpPage() {
  return (
    <main>
      <Header />
      <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] min-h-[calc(100vh-200px)] py-24 flex items-center justify-center">
        <SignUp 
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'bg-[#1a1f2e] border border-gray-700 shadow-2xl',
            }
          }}
          afterSignUpUrl="/dashboard"
          signInUrl="/sign-in"
        />
      </div>
      <Footer />
    </main>
  )
}

