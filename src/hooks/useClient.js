import {
  useCreateClientMutation,
  useDeleteClientMutation,
  useGetClientsQuery,
  useUpdateClientMutation,
} from "@/store/api/clientApiSlice";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

export default function useClient() {
  // const { user } = useAuth();
  // console.log(user);
  const [createClient, { isLoading: createClientLoading }] =
    useCreateClientMutation();
  // const { data: client, isLoading: getClientLoading } =
  //   useGetClientByIdQuery(clientId);
  const { data: clients, isLoading: getClientsLoading } = useGetClientsQuery();
  const [updateClient, { isLoading: updateClientLoading }] =
    useUpdateClientMutation();
  const [deleteClient, { isLoading: deleteClientLoading }] =
    useDeleteClientMutation();

  const handleCreateClient = async (clientData) => {
    try {
      const response = await createClient(clientData).unwrap();
      if (response?.data) {
        toast.success("Client created successfully!");
      }
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

  return {
    handleCreateClient,
    clients: clients?.data,
    handleUpdateClient,
    handleDeleteClient,
    createClientLoading,
    getClientsLoading,
    updateClientLoading,
    deleteClientLoading,
  };
}
