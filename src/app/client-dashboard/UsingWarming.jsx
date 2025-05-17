import DataUsageCircle from "./DataUsageCircle";

export default function UsingWarming() {
  return (
    <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 bg-base-100 rounded-xl p-5 flex flex-col gap-5 justify-center items-center mx-auto">
      <h1 className="text-lg md:text-xl font-bold text-center">
        Using Warning
      </h1>
      <DataUsageCircle used={30} total={100} />
      <button className="w-full btn btn-primary">Upgrade Plan</button>
    </div>
  );
}
