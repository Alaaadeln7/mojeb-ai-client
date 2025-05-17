import React from "react";
import CallsAndTicketsHeader from "./CallsAndTicketsHeader";
import CallsAndTicketsTable from "./CallsAndTicketsTable";

export default function CallsAndTickets() {
  return (
    <section className="px-10">
      <CallsAndTicketsHeader />
      <CallsAndTicketsTable />
    </section>
  );
}
