import { Play } from "lucide-react";

export default function CallGreeting() {
  return (
    <section className="border border-base-300 p-5 rounded-2xl bg-base-100 mt-10">
      <h1 className="text-xl font-bold my-3">Call Greeting</h1>
      <div className="flex justify-between items-center border border-base-300 p-2 rounded-2xl">
        <input
          className="input border-none outline-none focus:outline-none w-full"
          placeholder="write your greeting to test the voice"
        />
        <button className="btn btn-circle btn-primary">
          <Play className="size-5" />
        </button>
      </div>
    </section>
  );
}
