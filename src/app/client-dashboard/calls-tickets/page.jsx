import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function CallsAndTickets() {
  return (
    <section className="sm:p-10 p-5">
      <header>
        <h1 className="text-2xl font-bold">Calls & Tickets</h1>
      </header>
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
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table table-zebra">
          <thead className="bg-base-300">
            <tr>
              <th>Customer</th>
              <th>Pone</th>
              <th>Duration</th>
              <th>Scenario</th>
              <th>Date</th>
              <th>Status</th>
              <th>Issurcipt</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr>
                <td>john Doe</td>
                <td>3:34</td>
                <td>5:34</td>
                <td>appointm-bocking</td>
                <td>jun 6 2025</td>
                <td>
                  <button className="btn btn-soft btn-circle">
                    <Play
                      className="size-5 "
                      style={{ color: "var(--primary-color)" }}
                    />
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost text-blue-600">view</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
