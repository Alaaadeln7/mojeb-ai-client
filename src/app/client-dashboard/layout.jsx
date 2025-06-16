"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import ClientDashboardHeader from "./ClientDashboardHeader";
import ProfileModal from "./ProfileModal";

export default function ClientDashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  return (
    <>
      <section className="w-screen flex fixed top-0 left-0 h-screen bg-base-200 mb-20">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex-1">
          <ClientDashboardHeader
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsOpenProfile={setIsOpenProfile}
            isOpenProfile={isOpenProfile}
          />
          <main className="overflow-y-scroll h-screen">{children}</main>
        </div>
      </section>
      {isOpenProfile && <ProfileModal setIsOpenProfile={setIsOpenProfile} />}
    </>
  );
}
