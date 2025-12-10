import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Differentiators from '@/components/Differentiators'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <UseCases />
      <Features />
      <Differentiators />
      <Footer />
    </main>
  )
}
