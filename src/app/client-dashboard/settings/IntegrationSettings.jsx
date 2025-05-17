import React from "react";

export default function IntegrationSettings() {
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow-sm my-5">
      <h1 className="font-semibold text-2xl my-3">Integration Settings</h1>
      <div className="border border-base-300 p-5 rounded-2xl space-y-2">
        <div className="flex justify-between items-center gap-4">
          <h4>Google Calendar</h4>
          <div className="flex gap-3">
            <input
              type="text"
              className="input"
              placeholder="https://example.com"
            />
            <button className="btn btn-primary">connect</button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <h4>Slack</h4>
          <div className="flex gap-3">
            <input type="text" placeholder="web book url" className="input" />
            <button className="btn btn-primary">connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}
