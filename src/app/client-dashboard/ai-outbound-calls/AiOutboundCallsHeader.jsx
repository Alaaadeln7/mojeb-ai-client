import { Plus } from "lucide-react";

export default function AiOutboundCallsHeader() {
  return (
    <header className="flex justify-between my-10 flex-wrap">
      <div>
        <h1 className="text-2xl font-bold">AI Outbound Calls</h1>
        <p>reach your clients automatically with smart conversations</p>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-primary">
          <Plus className="size-5" /> Add Call Task
        </button>
        <button className="btn btn-neutral">import CSV</button>
      </div>
    </header>
  );
}
