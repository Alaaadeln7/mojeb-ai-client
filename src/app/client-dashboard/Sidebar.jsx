"use client";
import Logo from "@/components/Logo";
import {
  ArrowLeft,
  ArrowRight,
  ChartLine,
  House,
  PhoneCall,
  ScrollText,
  Settings,
  menu,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <aside
      style={{ background: "var(--scound-color)" }}
      className={`max-w-2/12 p-10 sm:px-5 px-0 bg-cyan-800 fixed top-0 h-screen ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } h-screen shadow-sm shadow-base-200 transition-transform duration-300 z-50`}
    >
      <button
        className="btn btn-primary btn-circle absolute top-3 -right-8"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <ArrowLeft className="size-5" />
        ) : (
          <ArrowRight className="size-5" />
        )}
      </button>
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex flex-col gap-2 list mt-5">
          <li>
            <Link
              className="list-row hover:bg-base-300 transition-colors text-base-100"
              href={"/client-dashboard"}
            >
              <House className="size-5" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className="list-row hover:bg-base-300 transition-colors text-base-100"
              href={"/client-dashboard/calls-tickets"}
            >
              <PhoneCall className="size-5" />
              <span className="hidden sm:inline">Calls & Tickets</span>
            </Link>
          </li>
          <li>
            <Link
              className="list-row hover:bg-base-300 transition-colors text-base-100"
              href={"/client-dashboard/voice-script"}
            >
              <ScrollText className="size-5" />
              <span className="hidden sm:inline">Voice Script</span>
            </Link>
          </li>
          <li>
            <Link
              className="list-row hover:bg-base-300 transition-colors text-base-100"
              href={"/client-dashboard/performance-analyst"}
            >
              <ChartLine className="size-5" />
              <span className="hidden sm:inline"> Performance Analyst</span>
            </Link>
          </li>
          <li>
            <Link
              className="list-row hover:bg-base-300 transition-colors text-base-100"
              href={"/client-dashboard/settings"}
            >
              <Settings className="size-5" />
              <span className="hidden sm:inline">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
