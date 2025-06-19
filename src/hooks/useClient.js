"use client";
import {
  useCreateClientMutation,
  useDeleteClientMutation,
  useEmailNotificationMutation,
  useGetClientByIdQuery,
  useGetClientsQuery,
  usePerformanceReportsMutation,
  usePlanUsageAlertMutation,
  // useSearchClientQuery,
  useTicketEscalationAlertMutation,
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
  const clientId = currentClient?.data?._id;
  const [updateClient, { isLoading: updateClientLoading }] =
    useUpdateClientMutation();
  const [deleteClient, { isLoading: deleteClientLoading }] =
    useDeleteClientMutation();

  const [emailNotification, { isLoading: emailNotificationLoading }] =
    useEmailNotificationMutation();
  const [planUsageAlert, { isLoading: planUsageAlertLoading }] =
    usePlanUsageAlertMutation();
  const [performanceReports, { isLoading: performanceReportsLoading }] =
    usePerformanceReportsMutation();
  const [ticketEscalationAlert, { isLoading: ticketEscalationAlertLoading }] =
    useTicketEscalationAlertMutation();

  const handleEmailNotification = async () => {
    try {
      const response = await emailNotification({ id: clientId }).unwrap();
      toast.success(response?.message);
    } catch (error) {
      console.error("Failed to send email notification:", error);
      throw error;
    }
  };
  const handlePlanUsageAlert = async () => {
    try {
      const response = await planUsageAlert({
        id: clientId,
      }).unwrap();
      toast.success(response?.message);
    } catch (error) {
      console.error("Failed to send email notification:", error);
      throw error;
    }
  };
  const handlePerformanceReports = async () => {
    try {
      const response = await performanceReports({ id: clientId }).unwrap();
      toast.success(response?.message);
    } catch (error) {
      console.error("Failed to send email notification:", error);
      throw error;
    }
  };
  const handleTicketEscalationAlert = async () => {
    try {
      const response = await ticketEscalationAlert({ id: clientId }).unwrap();
      toast.success(response?.message);
    } catch (error) {
      console.error("Failed to send email notification:", error);
      throw error;
    }
  };
  const handleCreateClient = async (clientData) => {
    try {
      const response = await createClient(clientData).unwrap();
      toast.success("Client created successfully!");
    } catch (error) {
      toast.error(error?.data?.data?.message);
      throw error?.data?.data?.message;
    }
  };

  const handleUpdateClient = async (id, clientData) => {
    try {
      const response = await updateClient({ id, clientData }).unwrap();
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
    handleEmailNotification,
    emailNotificationLoading,
    handlePlanUsageAlert,
    planUsageAlertLoading,
    handlePerformanceReports,
    performanceReportsLoading,
    handleTicketEscalationAlert,
    ticketEscalationAlertLoading,
  };
}
