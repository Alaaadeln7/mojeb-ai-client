export default function ScenarioPerformance() {
  return (
    <article className="bg-base-100 p-5 rounded-xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-xl">Scenario Performance</h1>
        <button className="btn btn-sm btn-ghost text-primary">View All</button>
      </div>

      <div className="w-full">
        {/* Desktop View (lg screens and up) */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-base-300 bg-base-100">
          <table className="table table-zebra w-full">
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

        {/* Tablet View (md screens) */}
        <div className="hidden sm:block md:hidden overflow-x-auto rounded-lg border border-base-300 bg-base-100">
          <table className="table table-zebra w-full">
            <thead className="bg-base-200">
              <tr>
                <th className="text-base-content/80">Scenario</th>
                <th className="text-base-content/80">Calls</th>
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
                  <td>
                    <h1>4</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (sm screens and down) */}
        <div className="sm:hidden space-y-3 p-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 p-4 hover:bg-base-300/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">Scenario {index + 1}</h3>
                <span className="badge badge-primary">
                  {Math.floor(Math.random() * 100) + 50} calls
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-base-content/70">Avg Duration</p>
                  <p>{Math.floor(Math.random() * 10) + 1}m</p>
                </div>
                <div>
                  <p className="text-sm text-base-content/70">Satisfaction</p>
                  <div className="flex items-center gap-2">80%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
