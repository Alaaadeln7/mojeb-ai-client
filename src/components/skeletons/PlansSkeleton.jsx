export function PlanCardSkeleton({ featured = false }) {
  return Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className={`relative rounded-xl p-6 shadow-lg w-80 transition-all ${
        featured ? "border-2 border-primary-focus" : "border border-base-300"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-base-300 text-transparent px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold animate-pulse">
          POPULAR
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-4">
          <span className="inline-block h-6 w-32 bg-base-300 rounded animate-pulse"></span>
        </h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">
            <span className="inline-block h-10 w-24 bg-base-300 rounded animate-pulse"></span>
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {[...Array(5)].map((_, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-base-300 rounded-full animate-pulse"></span>
            <span className="inline-block h-5 w-48 bg-base-300 rounded animate-pulse"></span>
          </li>
        ))}
      </ul>

      <button
        className="w-full py-3 px-4 rounded-lg font-bold bg-base-300 text-transparent animate-pulse"
        disabled
      >
        Loading...
      </button>
    </div>
  ));
}
