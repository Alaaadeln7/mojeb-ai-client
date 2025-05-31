"use client";
import useAuth from "@/hooks/useAuth";
import {
  ChartLine,
  ClipboardCheck,
  House,
  LogOut,
  PanelRightOpen,
  PhoneCall,
  ScrollText,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { logout, loading } = useAuth();
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
          <Link className=" flex gap-5" href={"/client-dashboard"}>
            <House className="size-5" />
            <span className="hidden sm:block">Dashboard</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link
            className=" flex gap-5"
            href={"/client-dashboard/calls-tickets"}
          >
            <PhoneCall className="size-5" />
            <span className="hidden sm:block">Calls & Tickets</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link className=" flex gap-5" href={"/client-dashboard/voice-script"}>
            <ScrollText className="size-5" />
            <span className="hidden sm:block">Voice Script</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link
            className=" flex gap-5"
            href={"/client-dashboard/performance-analyst"}
          >
            <ChartLine className="size-5" />
            <span className="hidden sm:block"> Performance Analyst</span>
          </Link>
        </li>

        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link
            className=" flex gap-5"
            href={"/client-dashboard/ai-outbound-calls"}
          >
            <ClipboardCheck className="size-5" />
            <span className="hidden sm:block">Ai Outbound</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <Link className=" flex gap-5" href={"/client-dashboard/settings"}>
            <Settings className="size-5" />
            <span className="hidden sm:block">Settings</span>
          </Link>
        </li>
        <li className="mb-1 list-row w-full hover:bg-base-100/10 transition-colors cursor-pointer">
          <button
            disabled={loading}
            onClick={logout}
            className="btn btn-ghost btn-circle"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                <LogOut className="size-5" />
                <span className="hidden sm:block">Logout</span>
              </>
            )}
          </button>
        </li>
      </ul>
    </aside>
  );
}
