import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function RecentClients() {
  return (
    <div className="sm:w-7/12 bg-base-100 rounded-xl p-5">
      <h1 className="text-xl font-bold my-5">Recent Clients</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((item) => (
              <tr>
                <th>toni kroose</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="join mt-10 flex justify-end">
        <button className="join-item btn">
          <ChevronLeft className="size-5" />
        </button>
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
        <button className="join-item btn">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
