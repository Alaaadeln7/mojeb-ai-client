import { KeyRound, Pencil, ShieldCheck } from "lucide-react";

// Random user data generator
const generateRandomUsers = (count) => {
  const roles = ["Admin", "Editor", "Viewer", "Moderator"];
  const statuses = ["Active", "Inactive", "Pending", "Suspended"];
  const firstNames = [
    "Leanne",
    "Ervin",
    "Clementine",
    "Patricia",
    "Chelsey",
    "Dennis",
    "Kurtis",
    "Nicholas",
    "Glenna",
    "Clement",
  ];
  const lastNames = [
    "Graham",
    "Howell",
    "Bauch",
    "Lebsack",
    "Dietrich",
    "Schulist",
    "Weissnat",
    "Runolfsdottir",
    "Reichert",
    "DuBuque",
  ];

  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`,
    role: roles[Math.floor(Math.random() * roles.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    lastActive: `${Math.floor(Math.random() * 30) + 1} days ago`,
    email: `user${index + 1}@example.com`,
  }));
};

export default function UsersTable() {
  const users = generateRandomUsers(10);

  return (
    <div className="mt-10">
      {/* Desktop Table */}
      <div className="hidden md:block rounded-lg border border-base-content/10 bg-base-100 shadow-sm overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200">
              <th className="font-medium text-base-content/80">User</th>
              <th className="font-medium text-base-content/80">Role</th>
              <th className="font-medium text-base-content/80">Status</th>
              <th className="font-medium text-base-content/80">Last Active</th>
              <th className="font-medium text-base-content/80 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-base-200/50 transition-colors"
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-8 flex items-center justify-center">
                        <span>{user.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-base-content/60">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className={`badge badge-soft ${
                      user.role === "Admin"
                        ? "badge-primary"
                        : user.role === "Editor"
                        ? "badge-secondary"
                        : user.role === "Moderator"
                        ? "badge-accent"
                        : "badge-ghost"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge badge-soft ${
                      user.status === "Active"
                        ? "badge-success"
                        : user.status === "Inactive"
                        ? "badge-error"
                        : user.status === "Pending"
                        ? "badge-warning"
                        : "badge-neutral"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="text-sm text-base-content/60">
                  {user.lastActive}
                </td>
                <td>
                  <div className="flex justify-end gap-1">
                    <button
                      className="btn btn-ghost  hover:bg-base-300/20"
                      title="Edit"
                    >
                      <Pencil className="size-4 text-base-content/70" />
                    </button>
                    <button
                      className="btn btn-ghost btn-sm hover:bg-base-300/20"
                      title="Reset Password"
                    >
                      <KeyRound className="size-4 text-base-content/70" />
                    </button>
                    <button
                      className="btn btn-ghost btn-sm hover:bg-base-300/20"
                      title="Permissions"
                    >
                      <ShieldCheck className="size-4 text-base-content/70" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="card bg-base-100 border border-base-content/10 p-4 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="avatar placeholder">
                  <div
                    style={{ display: "flex" }}
                    className="items-center justify-center bg-neutral text-neutral-content rounded-full w-10"
                  >
                    <span>{user.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-base-content/60">{user.email}</p>
                </div>
              </div>
              <span
                className={`badge badge-sm  badge-soft ${
                  user.status === "Active"
                    ? "badge-success"
                    : user.status === "Inactive"
                    ? "badge-error"
                    : user.status === "Pending"
                    ? "badge-warning"
                    : "badge-neutral"
                }`}
              >
                {user.status}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-base-content/60">Role</p>
                <span
                  className={`badge badge-soft ${
                    user.role === "Admin"
                      ? "badge-primary"
                      : user.role === "Editor"
                      ? "badge-secondary"
                      : user.role === "Moderator"
                      ? "badge-accent"
                      : "badge-ghost"
                  }`}
                >
                  {user.role}
                </span>
              </div>
              <div>
                <p className="text-base-content/60">Last Active</p>
                <p>{user.lastActive}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                className="btn btn-ghost btn-sm hover:bg-base-300/20"
                title="Edit"
              >
                <Pencil className="size-4" />
              </button>
              <button
                className="btn btn-ghost btn-sm hover:bg-base-300/20"
                title="Reset Password"
              >
                <KeyRound className="size-4" />
              </button>
              <button
                className="btn btn-ghost btn-sm hover:bg-base-300/20"
                title="Permissions"
              >
                <ShieldCheck className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
