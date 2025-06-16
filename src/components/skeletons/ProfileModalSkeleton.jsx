import React from "react";

export default function ProfileModalSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-base-100 rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
        {/* Header skeleton */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-7 w-32 bg-base-300 rounded-lg animate-pulse"></div>
          <div className="h-8 w-8 bg-base-300 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-base-100 shadow-md rounded-xl p-8 space-y-6">
          {/* Client ID skeleton */}
          <div className="text-center">
            <div className="h-5 w-48 bg-base-300 rounded-lg mx-auto animate-pulse"></div>
          </div>

          {/* Grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-1/3 bg-base-300 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-base-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Description skeleton */}
          <div className="space-y-3">
            <div className="h-4 w-1/4 bg-base-300 rounded animate-pulse"></div>
            <div className="h-4 bg-base-300 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-base-300 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-base-300 rounded animate-pulse"></div>
          </div>

          {/* Dates skeleton */}
          <div className="text-right space-y-2">
            <div className="h-3 w-1/3 ml-auto bg-base-300 rounded animate-pulse"></div>
            <div className="h-3 w-1/4 ml-auto bg-base-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
