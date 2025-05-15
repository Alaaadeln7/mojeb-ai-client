"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ClientDashboardLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <main className="w-screen">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className={`transition-all duration-300 w-full`}>{children}</div>
    </main>
  );
}
