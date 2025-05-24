import React from "react";
import Overview from "../../molecules/Overview";
import ClientDashboardHeader from "./ClientDashboardHeader";
import RecentClients from "./RecentClients";
import UsingWarming from "./UsingWarming";
import { overviewData } from "@/data/clientDBData";

export default function ClientDashboard() {
  return (
    <section className="flex flex-col px-10">
      <ClientDashboardHeader />
      <Overview cards={overviewData} />
      <div className="w-screen flex gap-5 justify-center flex-wrap mt-10">
        <RecentClients />
        <UsingWarming />
      </div>
    </section>
  );
}
