export default function OverviewCard({
  title,
  number,
  // icon,
  bg,
  // color,
  textColor,
}) {
  return (
    <div
      className={`${bg} max-w-4/12 rounded-2xl py-4 px-4 mt-4`}
    >
      <header className="flex justify-between items-center w-full">
        <h3 className={`font-bold ${textColor}`}>{title}</h3>
      </header>
      <h1 className="font-bold text-3xl">{number}</h1>
    </div>
  );
}
