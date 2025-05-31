export default function LangSettings() {
  return (
    <div className="px-6 pb-6">
      <h1 className="text-xl font-semibold mb-1">Select your language</h1>
      <div className="flex justify-between items-center my-4 px-5">
        <p className="text-sm">default system language</p>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            what is your language?
          </option>
          <option>العربيه</option>
          <option>English</option>
        </select>
      </div>
    </div>
  );
}
