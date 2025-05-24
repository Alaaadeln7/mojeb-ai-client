import { Plus, Search } from "lucide-react";

export default function ClientsHeader() {
  return (
    <header className="space-y-4">
      {/* Title + Add Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button className="btn btn-primary flex items-center gap-2 w-full sm:w-auto">
          <Plus className="size-5" />
          <span>Add New Client</span>
        </button>
      </div>

      {/* Search + Filter + Action */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Search Input */}
        <div className="flex items-center bg-base-100 rounded-md px-3 py-2 w-full md:w-1/3 shadow-sm">
          <Search className="size-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search clients"
            className="ml-2 w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
          />
        </div>

        {/* Select */}
        <select className="select select-bordered w-full md:w-1/3">
          <option disabled selected>
            Filter by status
          </option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Trial</option>
        </select>

        {/* Search Button */}
        <button className="btn btn-primary w-full md:w-auto">Search</button>
      </div>
    </header>
  );
}
