export default function AnalystCard({title , number}) {
  return (
    <div className="bg-base-100 p-5 rounded-xl shadow-sm">
      <h3>{title}</h3>
      <p className="text-2xl font-bold">{number}</p>
    </div>
  );
}
