"use client";

import { ticketVolumeData } from "@/data/AnalyticsData";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function TicketVolume() {
  return (
    <article className="w-full max-w-full md:max-w-4xl mx-auto bg-base-100 mt-4 p-3 sm:p-5 border border-base-300 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h1 className="font-semibold text-xl sm:text-2xl mb-5 capitalize">
        ticket volume per day
      </h1>
      <div className="w-full h-[220px] sm:h-[280px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ticketVolumeData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10, fill: "#666" }}
              axisLine={{ stroke: "#ddd" }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#666" }}
              axisLine={{ stroke: "#ddd" }}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "6px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="tickets" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
