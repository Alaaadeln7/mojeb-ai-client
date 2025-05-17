"use client";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];

export default function BusinessHours() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState("08:00 AM");
  const [endTime, setEndTime] = useState("05:00 PM");

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="card bg-base-100 shadow-xl mt-8 p-4">
      <h1 className="my-3 text-2xl font-bold"> Business Hours</h1>
      <div className="flex items-center space-x-4">
        <div>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedDays.length > 0}
            onChange={(e) =>
              e.target.checked ? setSelectedDays(days) : setSelectedDays([])
            }
          />
        </div>
        <div className="flex space-x-2 flex-wrap gap-3">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`btn btn-sm ${
                selectedDays.includes(day) ? "btn-primary" : "btn-outline"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <label className="font-semibold">Time:</label>
          <select
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="select select-bordered"
          >
            {["08:00 AM", "09:00 AM", "10:00 AM"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          <span className="font-semibold">-</span>

          <select
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="select select-bordered"
          >
            {["05:00 PM", "06:00 PM", "07:00 PM"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary">Connect</button>
      </div>
    </div>
  );
}
