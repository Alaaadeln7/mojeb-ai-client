import { Plus, Search } from "lucide-react";

export default function UsersAndRolesHeader({ setIsModalOpen }) {
  return (
    <header className="space-y-4">
      {/* Title + Add Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Users & Roles</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary flex items-center gap-2 w-full sm:w-auto"
        >
          <Plus className="size-5" />
          <span>Add New User</span>
        </button>
      </div>

      {/* Search + Filter + Action */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Search Input */}
        <div className="flex items-center bg-base-100 rounded-md px-3 py-2 w-full md:w-3/3 shadow-sm">
          <Search className="size-5" />
          <input
            type="text"
            placeholder="Search users by name, email, or role"
            className="ml-2 w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
          />
        </div>

        {/* Search Button */}
        <button className="btn btn-primary w-full md:w-auto">Search</button>
      </div>
    </header>
  );
}
