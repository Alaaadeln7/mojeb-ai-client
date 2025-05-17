export default function ScenarioPerformance() {
  return (
    <article className="bg-base-100 p-5 rounded-xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-xl">Scenario Performance</h1>
        <button className="btn btn-sm btn-ghost text-primary">View All</button>
      </div>

      <div className="overflow-x-auto w-full rounded-lg border border-base-300 bg-base-100">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th className="text-base-content/80">Scenario Name</th>
              <th className="text-base-content/80">Calls</th>
              <th className="text-base-content/80">Avg Duration</th>
              <th className="text-base-content/80">Satisfaction</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr
                key={index}
                className="hover:bg-base-300/50 transition-colors"
              >
                <td className="font-medium">Scenario {index + 1}</td>
                <td>{Math.floor(Math.random() * 100) + 50}</td>
                <td>{Math.floor(Math.random() * 10) + 1}m</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div
                      className="radial-progress text-primary"
                      style={{
                        "--value": Math.floor(Math.random() * 100),
                        "--size": "1.5rem",
                      }}
                    >
                      {Math.floor(Math.random() * 100)}%
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
