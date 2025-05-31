import React from "react";

export default function ConversionsRate() {
  return (
    <div className="bg-base-100 rounded-xl p-5 flex justify-around items-center shadow-sm sm:col-span-2 md:col-span-2 lg:col-span-2">
      <div className="flex flex-col gap-4">
        <h3>Conversion Rate</h3>
        <p className="font-bold text-3xl">43%</p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="flex flex-col gap-4">
        <h3>Ai Missed Intents</h3>
        <p className="font-bold text-3xl">56</p>
      </div>
    </div>
  );
}
