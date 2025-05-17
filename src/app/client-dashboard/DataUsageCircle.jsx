"use client";
import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function DataUsageCircle({ used = 60, total = 100 }) {
  const percentage = (used / total) * 100;
  const data = [
    { name: "Used", value: used },
    { name: "Remaining", value: total - used },
  ];

  const COLORS = ["#10a5b1", "#3d4d58"];

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="text-center">
        <h2 className="text-xl font-bold">{percentage}%</h2>
        <p className="text-sm text-gray-500">
          {used}GB of {total}GB used
        </p>
      </div>
    </div>
  );
}
