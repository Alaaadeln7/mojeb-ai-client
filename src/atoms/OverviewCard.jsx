export default function OverviewCard({ title, number }) {
  return (
    <div className="bg-base-100 w-full rounded-2xl py-4 px-4 mt-4 shadow-md flex flex-col justify-around">
      <h3 className="font-bold text-lg">{title}</h3>
      <h1 className="font-bold text-3xl">{number}</h1>
    </div>
  );
}
