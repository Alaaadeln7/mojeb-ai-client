"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

export default function layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-screen flex fixed top-0 left-0 h-screen bg-base-200">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1">
        <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="overflow-y-scroll h-screen">{children}</main>
      </div>
    </section>
  );
}
