export default function QuickActions() {
  return (
    <article className="bg-base-100 p-4 my-4 border border-base-300 rounded-lg shadow-sm">
      <h1 className="font-bold text-xl my-5">Quick Actions</h1>
      <div className="flex flex-wrap gap-4">
        <button className="btn btn-wide btn-primary capitalize">
          add new client
        </button>
        <button className="btn btn-wide btn-primary capitalize">
          Test AI scenario
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mt-5 ">
        <p className="text-sm bg-base-100 rounded-xl p-5">
          Tickets {500} opened
        </p>

        <p className="text-sm bg-base-100 rounded-xl p-5">{500} calls</p>
      </div>
    </article>
  );
}
