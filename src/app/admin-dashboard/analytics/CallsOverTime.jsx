"use client";

import { CallsOverTimeData } from "@/data/AnalyticsData";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Function to format numbers like 1000 -> 1K
const formatYAxis = (tick) => {
  if (tick >= 1000000) return `${(tick / 1000000).toFixed(1)}M`;
  if (tick >= 1000) return `${(tick / 1000).toFixed(1)}K`;
  return tick;
};

export default function CallsOverTime() {
  return (
    <article className="w-full max-w-full md:max-w-4xl mx-auto bg-base-100 mt-4 p-3 sm:p-5 border border-base-300 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h1 className="font-bold text-base sm:text-lg md:text-xl mb-4 text-gray-800">
        Calls Over Time
      </h1>
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={CallsOverTimeData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#666", fontSize: 10 }}
              axisLine={{ stroke: "#ddd" }}
            />
            <YAxis
              tick={{ fill: "#666", fontSize: 10 }}
              axisLine={{ stroke: "#ddd" }}
              tickFormatter={formatYAxis}
            />
            <Tooltip
              formatter={(value) => formatYAxis(value)}
              contentStyle={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "6px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="number"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{
                r: 5,
                stroke: "#8884d8",
                strokeWidth: 2,
                fill: "#fff",
                style: {
                  filter: "drop-shadow(0 0 4px #8884d8)",
                },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
