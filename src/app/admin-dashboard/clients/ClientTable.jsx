import { clientData } from "@/data/ClientData";
import formatDate from "@/utils/formatDate";
import { Bell, CircleX, TriangleAlert } from "lucide-react";

export default function ClientTable({
  selectedClients,
  setSelectedClients,
  clients,
}) {
  console.log(clients);
  const handleSelectClient = (clientId) => {
    setSelectedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  const isSelected = (id) => selectedClients.includes(id);

  return (
    <div className="w-full mt-10">
      {/* Desktop Table */}
      <div className="hidden md:block bg-base-100 rounded-lg shadow-md overflow-x-auto">
        <table className="table w-full table-zebra">
          {/* Table Head */}
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      const allIds = clientData.map((client) => client.id);
                      setSelectedClients(allIds);
                    } else {
                      setSelectedClients([]);
                    }
                  }}
                  checked={
                    selectedClients.length === clients.length &&
                    clients.length > 0
                  }
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
            {clients?.map((client) => (
              <tr
                key={client._id}
                className={isSelected(client.id) ? "bg-primary/10" : ""}
              >
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isSelected(client.id)}
                    onChange={() => handleSelectClient(client.id)}
                  />
                </td>

                <td>
                  <div className="flex flex-col">
                    <span className="font-medium">{client.name}</span>
                  </div>
                </td>

                <td>
                  <span>{client.Sector || "Unknown"}</span>
                </td>

                <td>
                  <div
                    className={`badge badge-soft ${
                      client?.isActive === true
                        ? "badge-success"
                        : client?.isActive === false
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {client?.isActive === true && (
                      <span className="flex items-center gap-1">
                        <Bell className="size-4" /> Active
                      </span>
                    )}
                    {client?.isActive === false && (
                      <span className="flex items-center gap-1">
                        <CircleX className="size-4" /> Inactive
                      </span>
                    )}
                    {client?.isActive === false && (
                      <span className="flex items-center gap-1">
                        <TriangleAlert className="size-4" /> Trial
                      </span>
                    )}
                  </div>
                </td>

                <td>{client.users || 0}</td>
                <td>{client.startDate || "N/A"}</td>

                <td>
                  <button className="btn btn-sm btn-outline">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {clients?.map((client) => (
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
                <h3 className="font-medium">{client.name}</h3>
              </div>
              <div
                className={`badge badge-soft ${
                  client?.isActive === true
                    ? "badge-success"
                    : client?.isActive === false
                    ? "badge-error"
                    : "badge-warning"
                }`}
              >
                {client?.isActive === true && (
                  <span className="flex items-center gap-1">
                    <Bell className="size-3" /> Active
                  </span>
                )}
                {client?.isActive === false && (
                  <span className="flex items-center gap-1">
                    <CircleX className="size-3" /> Inactive
                  </span>
                )}
                {client.status === "trial" && (
                  <span className="flex items-center gap-1">
                    <TriangleAlert className="size-3" /> Trial
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p>Sector</p>
                <p>{client.industry || "Unknown"}</p>
              </div>
              <div>
                <p>Users</p>
                <p>{client.users || 0}</p>
              </div>
              <div>
                <p>Start Date</p>
                <p>{formatDate(client.createdAt) || "N/A"}</p>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <button className="btn btn-sm btn-outline">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
