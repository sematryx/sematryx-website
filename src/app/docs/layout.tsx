import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DocsNav from '@/components/DocsNav'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 bg-[#0f1419]">
        {/* Sidebar - fixed width, sticky */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-0 h-screen overflow-y-auto bg-[#1a1f2e] border-r border-gray-800">
            <DocsNav />
          </div>
        </aside>
        {/* Main content - scrollable */}
        <div className="flex-1 overflow-x-hidden">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  )
}