import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecentClients() {
  return (
    <div className="bg-base-100 rounded-xl p-5 col-span-3">
      <h1 className="text-lg md:text-xl font-bold my-5">Recent Clients</h1>

      <div className="overflow-x-auto border border-base-content/5 bg-base-100 rounded-lg">
        <table className="table w-full table-zebra">
          <thead className="bg-base-300">
            <tr>
              <th className="text-sm md:text-base">Name</th>
              <th className="text-sm md:text-base">Date</th>
              <th className="text-sm md:text-base">Duration</th>
              <th className="text-sm md:text-base">Ticket</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <th className="text-sm md:text-base">Toni Kroose</th>
                <td className="text-sm md:text-base">12/05/2025</td>
                <td className="text-sm md:text-base">15 mins</td>
                <td className="text-sm md:text-base">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="join mt-5 flex justify-center sm:justify-end gap-2">
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
    </div>
  );
}
