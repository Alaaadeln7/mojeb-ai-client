import React from "react";
import Overview from "./Overview";
import ClientDashboardHeader from "./ClientDashboardHeader";
import RecentClients from "./RecentClients";
import UsingWarming from "./UsingWarming";

export default function ClientDashboard() {
  return (
    <section className="flex flex-col px-10">
      <ClientDashboardHeader />
      <Overview />
      <div className="w-screen flex gap-5 justify-center flex-wrap mt-10">
        <RecentClients />
        <UsingWarming />
      </div>
    </section>
  );
}
