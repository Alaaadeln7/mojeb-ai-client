import {
  ChartLine,
  Database,
  LayoutDashboard,
  PanelRightOpen,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`bg-gradient dark:bg-gradient-dark relative top-0 left-0 ${
        isOpen ? "translate-x-0 w-1/4" : "translate-x-[-100%] w-0"
      } h-screen transition-all duration-300 ease-in-out`}
    >
      {isOpen && (
        <div className="flex items-center justify-between p-4 px-10 ">
          <h2 className=" text-lg font-bold mb-2 hidden sm:flex">Sidebar</h2>
          {isOpen && (
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setIsOpen(!isOpen)}
            >
              <PanelRightOpen className="size-6" />
            </button>
          )}
        </div>
      )}
      <ul className="overflow-y-auto h-[calc(100vh-4rem)] list">
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link className=" flex gap-5" href="/admin-dashboard">
            <LayoutDashboard className="size-5" />
            <span className="hidden sm:block">Dashboard</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link className=" flex gap-5" href="/admin-dashboard/clients">
            <User className="size-5" />
            <span className="hidden sm:block">Clients</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link className=" flex gap-5" href="/admin-dashboard/analytics">
            <ChartLine className="size-5" />
            <span className="hidden sm:block">Analytics</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link className=" flex gap-5" href="/admin-dashboard/users-roles">
            <Users className="size-5" />
            <span className="hidden sm:block">Users & Roles</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link className=" flex gap-5" href="/admin-dashboard/subscriptions">
            <Database className="size-5" />
            <span className="hidden sm:block">Subscriptions</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10   transition-colors cursor-pointer">
          <Link className=" flex gap-5" href="/admin-dashboard/settings">
            <Settings className="size-5" />
            <span className="hidden sm:block">Settings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
