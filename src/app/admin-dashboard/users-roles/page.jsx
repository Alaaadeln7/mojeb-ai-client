"use client";
import useAuth from "@/hooks/useAuth";
import UsersAndRolesHeader from "./UsersAndRolesHeader";
import UsersTable from "./UsersTable";
import PaginationTable from "../clients/PaginationTable";
import TablePaginationSkeleton from "@/components/skeletons/TablePaginationSkeleton";
import CreateUserModal from "./CreateUserModal";
import { useState } from "react";

export default function UsersAndRoles() {
  const { users, getUsersLoading, totalPages, currentPage, handlePageChange } =
    useAuth();
  const [selectedClients, setSelectedClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="sm:mx-10 mx-2 my-5 mb-20">
        <UsersAndRolesHeader setIsModalOpen={setIsModalOpen} />
        <UsersTable users={users} getUsersLoading={getUsersLoading} />
        {getUsersLoading ? (
          <TablePaginationSkeleton />
        ) : (
          <PaginationTable
            totalPages={totalPages}
            page={currentPage}
            handlePageChange={handlePageChange}
          />
        )}
      </section>
      {isModalOpen && <CreateUserModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
