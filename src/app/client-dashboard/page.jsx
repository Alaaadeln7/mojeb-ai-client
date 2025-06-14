import React from "react";
import Overview from "../../molecules/Overview";
import RecentClients from "./RecentClients";
import UsingWarming from "./UsingWarming";
import { overviewData } from "@/data/clientDBData";

export default function ClientDashboard() {
  return (
    <section className="mb-20 sm:mx-10 mx-2">
      <Overview cards={overviewData} />
      <div className=" grid sm:grid-cols-4 grid-cols-1 md:grid-cols-4 gap-4 mt-5 items-center">
        <RecentClients />
        <UsingWarming />
      </div>
    </section>
  );
}
