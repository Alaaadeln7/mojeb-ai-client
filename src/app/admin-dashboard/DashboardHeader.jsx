import { PanelRightClose } from "lucide-react";

export default function DashboardHeader({ isOpen, setIsOpen }) {
  return (
    <header className="flex items-center justify-between bg-base-200 p-4 px-10 shadow-sm">
      {!isOpen && (
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <PanelRightClose className="size-6" />
        </button>
      )}
      <h1 className="sm:text-2xl text-md font-bold">Admin Dashboard</h1>
    </header>
  );
}
