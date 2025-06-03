import { Bell, CircleX, Ellipsis, TriangleAlert } from "lucide-react";
import formatDate from "@/utils/formatDate";

export default function ClientTable({
  selectedClients = [],
  setSelectedClients = () => {},
  clients = [],
  isLoading = false,
  error = null,
}) {
  const handleSelectClient = (clientId) => {
    setSelectedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = clients.map((client) => client.id);
      setSelectedClients(allIds);
    } else {
      setSelectedClients([]);
    }
  };

  const isSelected = (id) => selectedClients.includes(id);

  if (isLoading) {
    return (
      <div className="w-full mt-10 flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mt-10 alert alert-error">
        <TriangleAlert className="size-6" />
        <span>Error loading clients: {error.message}</span>
      </div>
    );
  }

  if (!clients || clients.length === 0) {
    return (
      <div className="w-full mt-10 alert alert-info">
        <Bell className="size-6" />
        <span>No clients found</span>
      </div>
    );
  }

  return (
    <div className="w-full mt-10">
      {/* Desktop Table */}
      <div className="hidden md:block bg-base-100 rounded-lg shadow-md overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedClients.length === clients.length &&
                    clients.length > 0
                  }
                  disabled={clients.length === 0}
                />
              </th>
              <th>Name</th>
              <th>Sector</th>
              <th>Status</th>
              <th>Users</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr
                key={client._id}
                className={isSelected(client._id) ? "bg-primary/10" : ""}
              >
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isSelected(client._id)}
                    onChange={() => handleSelectClient(client._id)}
                  />
                </td>

                <td>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {client.name || "Unnamed Client"}
                    </span>
                    <span className="text-sm">{client.email || ""}</span>
                  </div>
                </td>

                <td>
                  <span>{client.sector || client.industry || "Unknown"}</span>
                </td>

                <td>
                  <span
                    className={`badge badge-soft ${
                      client?.isActive
                        ? "badge-success"
                        : client?.status === "trial"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {client?.isActive ? (
                      <span className="flex items-center gap-1">
                        <Bell className="size-4" /> Active
                      </span>
                    ) : client?.status === "trial" ? (
                      <span className="flex items-center gap-1">
                        <TriangleAlert className="size-4" /> Trial
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <CircleX className="size-4" /> Inactive
                      </span>
                    )}
                  </span>
                </td>

                <td>{client.users || 0}</td>
                <td>
                  {formatDate(client.startDate || client.createdAt) || "N/A"}
                </td>

                <td>
                  <button className="btn btn-sm btn-ghost">
                    <Ellipsis className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {clients.map((client) => (
          <div
            key={client._id}
            className={`p-4 bg-base-100 rounded-lg shadow-md ${
              isSelected(client.id) ? "bg-primary/10" : ""
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={isSelected(client.id)}
                  onChange={() => handleSelectClient(client.id)}
                />
                <h3 className="font-medium">
                  {client.name || "Unnamed Client"}
                </h3>
              </div>
              <span
                className={`badge badge-soft ${
                  client?.isActive
                    ? "badge-success"
                    : client?.status === "trial"
                    ? "badge-warning"
                    : "badge-error"
                }`}
              >
                {client?.isActive ? (
                  <span className="flex items-center gap-1">
                    <Bell className="size-3" /> Active
                  </span>
                ) : client?.status === "trial" ? (
                  <span className="flex items-center gap-1">
                    <TriangleAlert className="size-3" /> Trial
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <CircleX className="size-3" /> Inactive
                  </span>
                )}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="font-semibold text-md">Sector</p>
                <p>{client.sector || client.industry || "Unknown"}</p>
              </div>
              <div>
                <p className="font-semibold text-md">Users</p>
                <p>{client.users || 0}</p>
              </div>
              <div>
                <p className="font-semibold text-md">Start Date</p>
                <p>
                  {formatDate(client.startDate || client.createdAt) || "N/A"}
                </p>
              </div>
              <div>
                <p className="font-semibold text-md">Email</p>
                <p className="">{client.email || "N/A"}</p>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <button className="btn btn-sm btn-ghost">
                <Ellipsis className="size-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
