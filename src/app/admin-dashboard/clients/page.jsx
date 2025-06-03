"use client";
import { useState } from "react";
import ClientsHeader from "./ClientsHeader";
import ClientTable from "./ClientTable";
import ActionsClients from "./ActionsClients";
import PaginationTable from "./PaginationTable";
import CreateNewClientModal from "./CreateNewClientModal";
import ClientsTableSkeleton from "@/components/skeletons/ClientsTableSkeleton";
import useClient from "@/hooks/useClient";
import TablePaginationSkeleton from "@/components/skeletons/TablePaginationSkeleton";

export default function Clients() {
  const [selectedClients, setSelectedClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    clients,
    getClientsLoading,
    totalPages,
    currentPage,
    handlePageChange,
  } = useClient();
  return (
    <>
      <section className="sm:mx-10 mx-2 my-5">
        <ClientsHeader
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
        {selectedClients && selectedClients?.length > 0 && <ActionsClients />}
        {getClientsLoading ? (
          <ClientsTableSkeleton />
        ) : (
          <ClientTable
            selectedClients={selectedClients}
            setSelectedClients={setSelectedClients}
            clients={clients?.clients}
          />
        )}
        {getClientsLoading ? (
          <TablePaginationSkeleton />
        ) : (
          <PaginationTable
            totalPages={totalPages}
            page={currentPage}
            handlePageChange={handlePageChange}
          />
        )}
      </section>
      {isModalOpen && <CreateNewClientModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
