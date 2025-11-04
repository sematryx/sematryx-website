import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DocsNav from '@/components/DocsNav'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      <div className="flex min-h-screen bg-white">
        <DocsNav />
        <div className="flex-1">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  )
}