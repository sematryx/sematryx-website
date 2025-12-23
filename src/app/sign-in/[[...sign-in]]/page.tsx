'use client'

import { SignIn } from '@clerk/nextjs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SignInPage() {
  return (
    <main>
      <Header />
      <div className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] min-h-[calc(100vh-200px)] py-24 flex items-center justify-center">
        <SignIn 
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'bg-[#1a1f2e] border border-gray-700 shadow-2xl',
            }
          }}
          afterSignInUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </div>
      <Footer />
    </main>
  )
}

