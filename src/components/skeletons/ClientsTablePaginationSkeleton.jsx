import React from "react";

export default function ClientsTablePaginationSkeleton() {
  return (
    <div className="join mt-5">
      {/* Previous Button Skeleton */}
      <div className="join-item btn h-10 w-20 bg-base-300 animate-pulse rounded-none first:rounded-l-lg"></div>
      {/* Page Number Skeletons */}
      <div className="join-item btn h-10 w-10 bg-base-300 animate-pulse rounded-none"></div>
      <div className="join-item btn h-10 w-10 bg-base-300 animate-pulse rounded-none"></div>{" "}
      {/* Active page */}
      <div className="join-item btn h-10 w-10 bg-base-300 animate-pulse rounded-none"></div>
      <div className="join-item btn h-10 w-10 bg-base-300 animate-pulse rounded-none"></div>
      {/* Next Button Skeleton */}
      <div className="join-item btn h-10 w-20 bg-base-300 animate-pulse rounded-none last:rounded-r-lg"></div>
    </div>
  );
}
