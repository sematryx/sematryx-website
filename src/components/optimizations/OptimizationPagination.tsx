'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface OptimizationPaginationProps {
  page: number
  limit: number
  total: number
  totalPages: number
  onPageChange: (page: number) => void
  onLimitChange?: (limit: number) => void
}

export default function OptimizationPagination({
  page,
  limit,
  total,
  totalPages,
  onPageChange,
  onLimitChange,
}: OptimizationPaginationProps) {
  const start = (page - 1) * limit + 1
  const end = Math.min(page * limit, total)

  const handlePrevious = () => {
    if (page > 1) {
      onPageChange(page - 1)
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      onPageChange(page + 1)
    }
  }

  const handlePageClick = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show first page
      pages.push(1)

      // Calculate start and end of middle section
      let startPage = Math.max(2, page - 1)
      let endPage = Math.min(totalPages - 1, page + 1)

      // Adjust if we're near the start
      if (page <= 3) {
        endPage = Math.min(4, totalPages - 1)
      }

      // Adjust if we're near the end
      if (page >= totalPages - 2) {
        startPage = Math.max(totalPages - 3, 2)
      }

      // Add ellipsis if needed
      if (startPage > 2) {
        pages.push('...')
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pages.push('...')
      }

      // Show last page
      pages.push(totalPages)
    }

    return pages
  }

  if (total === 0) {
    return null
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1a1f2e] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400">
          Showing <span className="font-medium text-white">{start}</span> to{' '}
          <span className="font-medium text-white">{end}</span> of{' '}
          <span className="font-medium text-white">{total.toLocaleString()}</span> results
        </span>

        {onLimitChange && (
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-400">Per page:</label>
            <select
              value={limit}
              onChange={(e) => onLimitChange(parseInt(e.target.value, 10))}
              className="px-2 py-1 bg-[#242b3d] border border-gray-700 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className={`p-2 rounded-lg border transition-colors ${
            page === 1
              ? 'border-gray-700 text-gray-600 cursor-not-allowed'
              : 'border-gray-700 text-gray-300 hover:bg-[#242b3d] hover:text-white'
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNum, idx) => {
            if (pageNum === '...') {
              return (
                <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                  ...
                </span>
              )
            }

            const pageNumber = pageNum as number
            const isActive = pageNumber === page

            return (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:bg-[#242b3d] hover:text-white'
                }`}
              >
                {pageNumber}
              </button>
            )
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`p-2 rounded-lg border transition-colors ${
            page === totalPages
              ? 'border-gray-700 text-gray-600 cursor-not-allowed'
              : 'border-gray-700 text-gray-300 hover:bg-[#242b3d] hover:text-white'
          }`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
