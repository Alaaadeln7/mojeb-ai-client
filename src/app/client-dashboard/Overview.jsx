"use client";
import { DollarSign, LayoutDashboard, ShoppingBag, User } from "lucide-react";
import OverviewCard from "./OverviewCard";

export default function Overview() {
  return (
    <section className="bg-base-100 rounded-sm p-5 w-fit mx-auto">
      <header className="flex justify-between items-center px-3 my-3">
        <h1 className="flex gap-3 items-center justify-center text-3xl">
          <LayoutDashboard />
          <span className="font-bold">Overview</span>
        </h1>
      </header>
      <div className="flex justify-around items-center gap-3 flex-wrap">
        <OverviewCard
          title={"Calls This Month"}
          number={123}
          icon={<ShoppingBag className="size-5" />}
          bg={"bg-blue-100"}
          color={"bg-blue-500"}
          textColor={"text-blue-500"}
        />
        <OverviewCard
          title={"Tickets created"}
          number={32}
          icon={<DollarSign className="size-5" />}
          bg={"bg-cyan-100"}
          color={"bg-cyan-500"}
          textColor={"text-cyan-500"}
        />
        <OverviewCard
          title={"Customer Satisfaction"}
          number={4000}
          icon={<User className="size-5" />}
          bg={"bg-purple-100"}
          color={"bg-purple-500"}
          textColor={"text-purple-500"}
        />
        <OverviewCard
          title={"Average Call Duration"}
          number={23}
          icon={<User className="size-5" />}
          bg={"bg-red-100"}
          color={"bg-red-500"}
          textColor={"text-red-500"}
        />
      </div>
    </section>
  );
}
