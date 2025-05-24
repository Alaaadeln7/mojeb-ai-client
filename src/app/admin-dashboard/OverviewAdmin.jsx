import OverviewCard from "@/atoms/OverviewCard";
import { LayoutDashboard } from "lucide-react";

export default function OverviewAdmin({ title = "Overview", cards }) {
  return (
    <section>
      <header className="flex justify-between items-center px-3 my-3">
        <h1 className="flex gap-3 items-center justify-center text-2xl md:text-3xl">
          <LayoutDashboard />
          <span className="font-bold">{title}</span>
        </h1>
      </header>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <OverviewCard key={index} title={card.title} number={card.number} />
        ))}
        <article className="bg-base-100 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 shadow-md rounded-2xl py-4 px-4 mt-4 justify-around">
          <h1 className="text-2xl font-bold mt-4 capitalize">expiring soon</h1>
          <p>{2} supers will expire soon</p>
          <progress
            className="progress progress-primary w-56"
            value="80"
            max="100"
          ></progress>
        </article>
      </div>
    </section>
  );
}
