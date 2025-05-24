"use client";
import { LayoutDashboard } from "lucide-react";
import OverviewCard from "../atoms/OverviewCard";

/**
 * @param {string} title - Section title (e.g., "Overview")
 * @param {Array} cards - Array of card data objects (title, number, icon, bg, color, textColor)
 */
export default function Overview({ title = "Overview", cards = [] }) {
  return (
    <section className="bg-base-100 rounded-sm p-5 w-full max-w-6xl mx-auto mt-10">
      <header className="flex justify-between items-center px-3 my-3">
        <h1 className="flex gap-3 items-center justify-center text-2xl md:text-3xl">
          <LayoutDashboard />
          <span className="font-bold">{title}</span>
        </h1>
      </header>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <OverviewCard
            key={index}
            title={card.title}
            number={card.number}
            icon={card.icon}
            bg={card.bg}
            color={card.color}
            textColor={card.textColor}
          />
        ))}
      </div>
    </section>
  );
}
