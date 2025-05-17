"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Apr 1", calls: 10 },
  { name: "Apr 2", calls: 20 },
  { name: "Apr 3", calls: 15 },
  { name: "Apr 4", calls: 30 },
  { name: "Apr 5", calls: 25 },
  { name: "Apr 6", calls: 35 },
  { name: "Apr 7", calls: 28 },
];

const pieData = [
  { name: "Accuracy", value: 83 },
  { name: "Remaining", value: 17 },
];

const COLORS = ["#00C49F", "#FF8042"];

const scenarioData = [
  {
    name: "Appointment Booking",
    calls: 630,
    duration: "3:15",
    satisfaction: "91%",
  },
  { name: "Complaint", calls: 215, duration: "4:02", satisfaction: "68%" },
  {
    name: "General Inquiry",
    calls: 405,
    duration: "1:50",
    satisfaction: "93%",
  },
];

export default function IntentDetection() {
  return (
    <div className="bg-base-100 p-5 rounded-xl shadow-sm  col-span-12 md:col-span-2">
      <h3>Intent Detection Accuracy</h3>
      <div className="flex justify-center items-center sm:flex-wrap md:flex-nowrap">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-4xl">50%</span>
          <p className="font-semibold">Accuracy</p>
        </div>
      </div>
    </div>
  );
}
