import DataUsageCircle from "./DataUsageCircle";

export default function UsingWarming() {
  return (
    <div className="bg-base-100 rounded-xl p-5 flex flex-col gap-5 justify-center items-center col-span-1">
      <h1 className="text-lg md:text-xl font-bold text-center">
        Using Warning
      </h1>
      <DataUsageCircle used={30} total={100} />
      <button className="w-full btn btn-primary">Upgrade Plan</button>
    </div>
  );
}
