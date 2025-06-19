import {
  useDeleteChatbotMutation,
  useUpdateChatbotMutation,
  useAddInquiryMutation,
  useGetChatbotQuery,
} from "@/store/api/chatbotApiSlice";
import toast from "react-hot-toast";
import useClient from "./useClient";

export default function useChatbot() {
  const { currentClient } = useClient();

  const { data: chatbot, isLoading: getChatbotLoading } = useGetChatbotQuery({
    chatbotId: currentClient?.chatbotId,
  });
  console.log("chatbot from useChatbot", chatbot);
  const [updateChatbot, { isLoading: updateChatbotLoading }] =
    useUpdateChatbotMutation();
  const [deleteChatbot, { isLoading: deleteChatbotLoading }] =
    useDeleteChatbotMutation();

  const [addInquiry, { isLoading: addInquiryLoading }] =
    useAddInquiryMutation();

  const handleUpdateChatbot = async (id, chatbotData) => {
    try {
      const response = await updateChatbot({ id, ...chatbotData }).unwrap();
      toast.success("Chatbot updated successfully!");
      return response;
    } catch (error) {
      console.error("Failed to update chatbot:", error);
      toast.error(error.data?.message || "Failed to update chatbot");
      throw error;
    }
  };

  const handleDeleteChatbot = async (id) => {
    try {
      const response = await deleteChatbot(id).unwrap();
      toast.success("Chatbot deleted successfully!");
      return response;
    } catch (error) {
      console.error("Failed to delete chatbot:", error);
      toast.error(error.data?.message || "Failed to delete chatbot");
      throw error;
    }
  };

  const handleAddInquiry = async ({ inquiry, chatbotId }) => {
    const res = await addInquiry({ q, a, keywords, chatbotId }).unwrap();
    console.log({ inquiry, chatbotId });
    if (res?.data) {
      toast.success("inquiry added successfully");
    }
  };

  return {
    chatbot: chatbot?.data,
    handleUpdateChatbot,
    handleDeleteChatbot,
    getChatbotLoading,
    updateChatbotLoading,
    deleteChatbotLoading,
    handleAddInquiry,
    addInquiryLoading,
  };
}
