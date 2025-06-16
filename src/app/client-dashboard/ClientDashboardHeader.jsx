import { Bell, PanelRightClose, User } from "lucide-react";

export default function ClientDashboardHeader({
  isOpen,
  setIsOpen,
  setIsOpenProfile,
  isOpenProfile,
}) {
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
      <div className="flex items-center gap-5">
        <button className="btn btn-ghost btn-circle">
          <Bell className="size-5" />
        </button>
        <button
          onClick={() => setIsOpenProfile(!isOpenProfile)}
          className="btn btn-ghost btn-circle"
        >
          <User className="size-5" />
        </button>
      </div>
    </header>
  );
}
