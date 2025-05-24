import { overviewData } from "@/data/AnalyticsData";

export default function AnalyticsOverview() {
  return (
    <section>
      <h2 className="font-bold text-xl my-5">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewData.map((item) => (
          <div key={item.id} className="bg-base-100 p-4 rounded shadow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-lg">
              {item.value.toLocaleString()} {item.unit}
            </p>
            <p
              className={`text-sm ${
                item.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.trend === "up" ? "↑" : "↓"} {item.change}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
