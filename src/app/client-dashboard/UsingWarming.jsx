import DataUsageCircle from "./DataUsageCircle";

export default function UsingWarming() {
  return (
    <div className="sm:w-3/12 bg-base-100 rounded-xl p-5 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-xl font-bold">Using Warming</h1>
      <DataUsageCircle used={30} total={100} />
      <button className="w-full btn btn-primary">Upgrade Plan</button>
    </div>
  );
}
