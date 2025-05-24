"use client";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DailyAiCallsData = [
  { number: 20, day: "7 Apr" },
  { number: 30, day: "8 Apr" },
  { number: 40, day: "9 Apr" },
  { number: 50, day: "10 Apr" },
  { number: 60, day: "11 Apr" },
  { number: 50, day: "12 Apr" },
];

export default function CallsOverview() {
  return (
    <article className="overflow-y-visible bg-base-100 mt-5 p-5 border border-base-300 rounded-lg shadow-sm">
      <h1 className="font-bold text-xl mb-4">Calls Overview</h1>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={DailyAiCallsData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line
              type="monotone"
              dataKey="number"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#666" }}
              axisLine={{ stroke: "#ddd" }}
            />
            <YAxis tick={{ fill: "#666" }} axisLine={{ stroke: "#ddd" }} />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "6px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
