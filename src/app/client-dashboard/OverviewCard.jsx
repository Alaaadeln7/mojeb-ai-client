export default function OverviewCard({ title, number, bg, textColor }) {
  return (
    <div className={`${bg} w-full rounded-2xl py-4 px-4 mt-4 shadow-md`}>
      <header className="flex justify-between items-center w-full mb-2">
        <h3 className={`font-bold text-lg ${textColor}`}>{title}</h3>
      </header>
      <h1 className="font-bold text-3xl">{number}</h1>
    </div>
  );
}
