import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function AiOutboundCallsTable() {
  return (
    <div className="my-10">
      <div className="space-y-5">
        {/* Table Container */}
        <div className="border border-base-content/5 bg-base-100 rounded-lg">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-base-300">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 p-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="card bg-base-100 border border-base-200 p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold">{index + 1}</span>
                  <div>
                    <h3 className="font-semibold">Cy Ganderton</h3>
                    <p className="text-sm text-base-content/70">
                      Quality Control Specialist
                    </p>
                  </div>
                </div>
                <div className="badge badge-outline">Favorite: Blue</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="join flex justify-center gap-1 sm:gap-2">
          <button className="join-item btn btn-sm sm:btn-md">
            <ChevronLeft className="size-4" />
          </button>
          <button className="join-item btn btn-sm sm:btn-md">1</button>
          <button className="join-item btn btn-sm sm:btn-md btn-active">
            2
          </button>
          <button className="join-item btn btn-sm sm:btn-md">3</button>
          <button className="join-item btn btn-sm sm:btn-md">4</button>
          <button className="join-item btn btn-sm sm:btn-md">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
