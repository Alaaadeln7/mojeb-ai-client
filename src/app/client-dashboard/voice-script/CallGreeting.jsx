import { Play } from "lucide-react";
import React from "react";

export default function CallGreeting() {
  return (
    <section className="border border-base-300 p-5 rounded-2xl bg-base-100 mt-10">
      <h1 className="text-xl font-bold my-3">Call Greeting</h1>
      <div className="flex justify-between items-center border border-base-300 p-2 rounded-2xl">
        <p>hello world</p>
        <button className="btn btn-circle btn-neutral">
          <Play className="size-5" />
        </button>
      </div>
    </section>
  );
}
