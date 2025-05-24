export default function Top5ActivesClients() {
  return (
    <div className=" bg-base-100 mt-4 p-3 sm:p-5 border border-base-300 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h1 className="sm:text-2xl text-md font-bold">Top 5 Active Clients</h1>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row flex justify-between items-center">
          <h4 className="font-semibold text-md">Client</h4>
          <h4 className="font-semibold text-md">Calls</h4>
        </li>
        {Array.from({ length: 5 }, (_, index) => (
          <li
            key={index}
            className="list-row flex justify-between items-center"
          >
            <h4 className="text-sm">Client {index + 1}</h4>
            <h4 className="text-sm">100</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
