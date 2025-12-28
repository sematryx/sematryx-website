import Header from '@/components/Header'
import Footer from '@/components/Footer'
import UniversalLayoutWrapper from '@/components/UniversalLayoutWrapper'

export default function DomainsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <UniversalLayoutWrapper>
        {children}
      </UniversalLayoutWrapper>
      <Footer />
    </main>
  )
}

