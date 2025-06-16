"use client";
import {
  useCreateClientMutation,
  useDeleteClientMutation,
  useGetClientByIdQuery,
  useGetClientsQuery,
  useSearchClientQuery,
  useUpdateClientMutation,
} from "@/store/api/clientApiSlice";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import { useState } from "react";

export default function useClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [createClient, { isLoading: createClientLoading }] =
    useCreateClientMutation();
  const { data: clients, isLoading: getClientsLoading } = useGetClientsQuery({
    page: currentPage,
  });
  const { user } = useAuth();

  const { data: currentClient, isLoading: getClientLoading } =
    useGetClientByIdQuery(user?._id);
  const [updateClient, { isLoading: updateClientLoading }] =
    useUpdateClientMutation();
  const [deleteClient, { isLoading: deleteClientLoading }] =
    useDeleteClientMutation();

  const handleCreateClient = async (clientData) => {
    try {
      const response = await createClient(clientData).unwrap();
      toast.success("Client created successfully!");
    } catch (error) {
      console.log("Failed to create client:", error?.data?.data?.message);
      toast.error(error?.data?.data?.message);
      throw error?.data?.data?.message;
    }
  };

  const handleUpdateClient = async (id, clientData) => {
    try {
      const response = await updateClient({ id, ...clientData }).unwrap();
      return response;
    } catch (error) {
      console.error("Failed to update client:", error);
      throw error;
    }
  };
  const handleDeleteClient = async (id) => {
    try {
      const response = await deleteClient(id).unwrap();
      return response;
    } catch (error) {
      console.error("Failed to delete client:", error);
      throw error;
    }
  };
  // const handleSearchClient = async (query) => {
  //   let res = await searchClient(query);
  //   if (res?.data) {
  //     return res?.data;
  //   }
  // };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return {
    handleCreateClient,
    clients: clients?.data,
    handleUpdateClient,
    handleDeleteClient,
    createClientLoading,
    getClientsLoading,
    updateClientLoading,
    deleteClientLoading,
    currentPage,
    handlePageChange,
    currentClient: currentClient?.data,
    getClientLoading,
    totalPages: clients?.data?.totalPages,
  };
}
