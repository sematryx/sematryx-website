import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ConversationalOptimization from '@/components/ConversationalOptimization'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import AgentReady from '@/components/AgentReady'
import Differentiators from '@/components/Differentiators'
import Pricing from '@/components/Pricing'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ConversationalOptimization />
      <UseCases />
      <AgentReady />
      <Features />
      <Differentiators />
      <Pricing />
      <EmailSignup />
      <Footer />
    </main>
  )
}
