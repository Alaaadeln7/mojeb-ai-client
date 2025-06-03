import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationTable({
  totalPages,
  page,
  handlePageChange,
}) {
  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null;

  return (
    <div className="join mt-5 mb-20 flex flex-wrap">
      {/* Previous Page Button */}
      <button
        className="join-item btn"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Page Number Buttons */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`join-item btn ${page === pageNumber ? "btn-active" : ""}`}
          aria-label={`Page ${pageNumber}`}
          aria-current={page === pageNumber ? "page" : undefined}
        >
          {pageNumber}
        </button>
      ))}

      {/* Next Page Button */}
      <button
        className="join-item btn"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
