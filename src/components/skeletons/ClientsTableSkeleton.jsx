export default function ClientsTableSkeleton() {
  return (
    <div className="w-full mt-10">
      {/* Desktop Table Skeleton */}
      <div className="hidden md:block bg-base-100 rounded-lg shadow-md overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>
                <div className="h-6 w-6 rounded bg-base-300 animate-pulse"></div>
              </th>
              <th>
                <div className="h-6 w-24 bg-base-300 animate-pulse rounded"></div>
              </th>
              <th>
                <div className="h-6 w-24 bg-base-300 animate-pulse rounded"></div>
              </th>
              <th>
                <div className="h-6 w-24 bg-base-300 animate-pulse rounded"></div>
              </th>
              <th>
                <div className="h-6 w-24 bg-base-300 animate-pulse rounded"></div>
              </th>
              <th>
                <div className="h-6 w-24 bg-base-300 animate-pulse rounded"></div>
              </th>
              <th>
                <div className="h-6 w-24 bg-base-300 animate-pulse rounded"></div>
              </th>
            </tr>
          </thead>

          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                <td>
                  <div className="h-6 w-6 rounded bg-base-300 animate-pulse"></div>
                </td>
                <td>
                  <div className="h-6 w-32 bg-base-300 animate-pulse rounded"></div>
                </td>
                <td>
                  <div className="h-6 w-20 bg-base-300 animate-pulse rounded"></div>
                </td>
                <td>
                  <div className="h-6 w-24 bg-base-300 animate-pulse rounded"></div>
                </td>
                <td>
                  <div className="h-6 w-16 bg-base-300 animate-pulse rounded"></div>
                </td>
                <td>
                  <div className="h-6 w-28 bg-base-300 animate-pulse rounded"></div>
                </td>
                <td>
                  <div className="h-10 w-20 bg-base-300 animate-pulse rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards Skeleton */}
      <div className="md:hidden space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 bg-base-100 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-base-300 animate-pulse"></div>
                <div className="h-6 w-32 bg-base-300 animate-pulse rounded"></div>
              </div>
              <div className="h-6 w-16 bg-base-300 animate-pulse rounded"></div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="h-4 w-12 bg-base-300 animate-pulse rounded mb-1"></div>
                <div className="h-4 w-20 bg-base-300 animate-pulse rounded"></div>
              </div>
              <div>
                <div className="h-4 w-12 bg-base-300 animate-pulse rounded mb-1"></div>
                <div className="h-4 w-8 bg-base-300 animate-pulse rounded"></div>
              </div>
              <div>
                <div className="h-4 w-16 bg-base-300 animate-pulse rounded mb-1"></div>
                <div className="h-4 w-24 bg-base-300 animate-pulse rounded"></div>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <div className="h-8 w-20 bg-base-300 animate-pulse rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
