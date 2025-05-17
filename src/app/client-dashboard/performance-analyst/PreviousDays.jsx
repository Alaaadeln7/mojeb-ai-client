"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "8 am", value: 15 },
  { name: "12 pm", value: 18 },
  { name: "2 pm", value: 14 },
  { name: "4 pm", value: 16 },
  { name: "6 pm", value: 17 },
];

const PreviousDays = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-5 p-4 bg-base-100 shadow-md rounded-2xl sm:flex-nowrap">
      <div className="p-4 border border-base-200 rounded-lg w-full">
        <div className="text-xl font-bold">
          +12%
          <span className="text-sm text-gray-500 ml-2">
            from previous 7 days
          </span>
        </div>
        <div className="flex items-center gap-1 mt-4">
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div>
                <div
                  style={{ background: "#10a5b1" }}
                  key={index}
                  className={`h-6 w-6 bg-blue-500 opacity-${index + "0"}`}
                />
              </div>
            ))}
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>8 am</span>
          <span>12 pm</span>
          <span>2 pm</span>
          <span>6 pm</span>
        </div>
      </div>

      <div className="p-4 border border-base-200 rounded-lg w-full">
        <div className="text-xl font-bold">
          +15%
          <span className="text-sm">escalation to human agents</span>
        </div>
        <div className="text-sm text-base-300">~ 15%</div>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10a5b1"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PreviousDays;
