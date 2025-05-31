import {
  useDeleteChatbotMutation,
  useUpdateChatbotMutation,
  useTrainChatbotMutation,
  useAddInquiryMutation,
  useGetChatbotQuery,
} from "@/store/api/chatbotApiSlice";
import toast from "react-hot-toast";

export default function useChatbot() {
  const { data: chatbot, isLoading: getChatbotLoading } = useGetChatbotQuery();
  const [updateChatbot, { isLoading: updateChatbotLoading }] =
    useUpdateChatbotMutation();
  const [deleteChatbot, { isLoading: deleteChatbotLoading }] =
    useDeleteChatbotMutation();
  const [trainChatbot, { isLoading: trainChatbotLoading }] =
    useTrainChatbotMutation();
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

  const handleTrainChatbot = async (id) => {
    try {
      const response = await trainChatbot(id).unwrap();
      toast.success("Chatbot training started!");
      return response;
    } catch (error) {
      console.error("Failed to train chatbot:", error);
      toast.error(error.data?.message || "Failed to train chatbot");
      throw error;
    }
  };
  const handleAddInquiry = async ({ inquiry, chatbotId }) => {
    const res = await addInquiry({ inquiry, chatbotId }).unwrap();
    console.log({ inquiry, chatbotId });
    if (res?.data) {
      toast.success("inquiry added successfully");
    }
  };
  return {
    chatbot: chatbot?.data,
    handleUpdateChatbot,
    handleDeleteChatbot,
    handleTrainChatbot,
    getChatbotLoading,
    updateChatbotLoading,
    deleteChatbotLoading,
    trainChatbotLoading,
    handleAddInquiry,
    addInquiryLoading,
  };
}
