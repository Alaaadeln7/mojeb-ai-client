"use client";
import { useState } from "react";
import ClientsHeader from "./ClientsHeader";
import ClientTable from "./ClientTable";
import ActionsClients from "./ActionsClients";
import PaginationTable from "./PaginationTable";
import CreateNewClientModal from "./CreateNewClientModal";
import useClient from "@/hooks/useClient";
import ClientsTableSkeleton from "@/components/skeletons/ClientsTableSkeleton";
import ClientsTablePaginationSkeleton from "@/components/skeletons/ClientsTablePaginationSkeleton";

export default function Clients() {
  const [selectedClients, setSelectedClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clients, getClientsLoading } = useClient();
  console.log(clients?.length);
  return (
    <>
      <section className="sm:mx-10 mx-2 my-5">
        <ClientsHeader
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
        {selectedClients.length > 0 && <ActionsClients />}
        {getClientsLoading ? (
          <ClientsTableSkeleton />
        ) : (
          <ClientTable
            selectedClients={selectedClients}
            setSelectedClients={setSelectedClients}
            clients={clients}
          />
        )}
        {getClientsLoading ? (
          <ClientsTablePaginationSkeleton />
        ) : (
          <PaginationTable clients={clients} />
        )}
      </section>
      {isModalOpen && <CreateNewClientModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
