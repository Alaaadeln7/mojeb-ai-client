import { User } from "lucide-react";

export default function ClientDashboardHeader() {
  return (
    <header className="flex justify-between items-center px-10 flex-wrap my-10">
      <h1 className="text-2xl font-bold">Client Dashboard</h1>
      <button className="btn  btn-circle">
        <User className="size-5" />
      </button>
    </header>
  );
}
