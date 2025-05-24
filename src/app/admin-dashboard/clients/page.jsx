"use client";
import { useState } from "react";
import ClientsHeader from "./ClientsHeader";
import ClientTable from "./ClientTable";
import ActionsClients from "./ActionsClients";
import PaginationTable from "./PaginationTable";

export default function Clients() {
  const [selectedClients, setSelectedClients] = useState([]);
  return (
    <section className="sm:mx-10 mx-2 my-5">
      <ClientsHeader />
      {selectedClients.length > 0 && <ActionsClients />}
      <ClientTable
        selectedClients={selectedClients}
        setSelectedClients={setSelectedClients}
      />
      <PaginationTable />
    </section>
  );
}
