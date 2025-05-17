import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function CallsAndTicketsTable() {
  return (
    <div className="my-10">
      <div className="overflow-x-auto border border-base-content/5 bg-base-100 rounded-lg">
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
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
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
      <button className="justify-end btn btn-primary capitalize mt-5">
        <Play className="size-5" /> test call
      </button>
    </div>
  );
}
