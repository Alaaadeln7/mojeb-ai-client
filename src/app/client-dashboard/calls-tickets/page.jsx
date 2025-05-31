import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function CallsAndTickets() {
  return (
    <section className="sm:p-10 p-5">
      <header>
        <h1 className="text-2xl font-bold">Calls & Tickets</h1>
        <div className="flex gap-3 my-5">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <button className="btn btn-primary">Filter</button>
        </div>
      </header>
      <div className="rounded-box border border-base-content/5 bg-base-100 p-2">
        {/* Large screens (default table) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-base-300">
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Duration</th>
                <th>Scenario</th>
                <th>Date</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>John Doe</td>
                  <td>3:34</td>
                  <td>5:34</td>
                  <td>appointment-booking</td>
                  <td>Jun 6 2025</td>
                  <td>
                    <button className="btn btn-ghost btn-circle btn-sm">
                      <Play className="size-4 text-primary" />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-sm text-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Medium screens (simplified table) */}
        <div className="hidden sm:block md:hidden overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-base-300">
              <tr>
                <th>Customer</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>John Doe</td>
                  <td>5:34</td>
                  <td>Jun 6 2025</td>
                  <td>
                    <button className="btn btn-ghost btn-circle btn-sm">
                      <Play className="size-4 text-primary" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small screens (stacked cards) */}
        <div className="sm:hidden space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-sm border border-base-content/5 p-3"
            >
              <div className="flex justify-between">
                <span className="font-bold">John Doe</span>
                <span className="text-sm opacity-75">Jun 6 2025</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>
                  Duration: <strong>5:34</strong>
                </span>
                <div className="flex gap-2">
                  <button className="btn btn-ghost btn-circle btn-sm">
                    <Play className="size-4 text-primary" />
                  </button>
                  <button className="btn btn-ghost btn-sm text-blue-600">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="join mt-5 flex justify-center gap-2">
        <button className="join-item btn btn-sm sm:btn-md">
          <ChevronLeft className="size-4" />
        </button>
        <button className="join-item btn btn-sm sm:btn-md">1</button>
        <button className="join-item btn btn-sm sm:btn-md btn-active">2</button>
        <button className="join-item btn btn-sm sm:btn-md">3</button>
        <button className="join-item btn btn-sm sm:btn-md">4</button>
        <button className="join-item btn btn-sm sm:btn-md">
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
