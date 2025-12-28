import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DocsLayoutWrapper from '@/components/DocsLayoutWrapper'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <DocsLayoutWrapper>
        {children}
      </DocsLayoutWrapper>
      <Footer />
    </main>
  )
}