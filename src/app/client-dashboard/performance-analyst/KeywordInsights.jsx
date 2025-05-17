export default function KeywordInsights() {
  const keywords = ["Appointment", "Hours", "Price", "Services", "Location"];

  return (
    <div className="bg-base-100 p-5 rounded-xl shadow-sm w-full">
      <h1 className="font-semibold text-xl mb-4 capitalize">
        Keyword Insights
      </h1>
      <ol className="list-decimal list-inside space-y-2">
        {keywords.map((keyword, index) => (
          <li
            key={index}
            className="hover:bg-base-200/50 px-2 py-1 rounded transition-colors cursor-pointer"
          >
            <span className="font-medium">{keyword}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
