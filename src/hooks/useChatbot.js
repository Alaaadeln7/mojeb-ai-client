import {
  useDeleteChatbotMutation,
  useUpdateChatbotMutation,
  useAddInquiryMutation,
  useGetChatbotQuery,
  useUpdateInquiryMutation,
  useDeleteInquiryMutation,
} from "@/store/api/chatbotApiSlice";
import toast from "react-hot-toast";
import useClient from "./useClient";

const handleError = (error, action) => {
  console.error(`Failed to ${action}:`, error);
  const message = error?.data?.message || `Failed to ${action}`;
  toast.error(message);
  throw error;
};

const notifySuccess = (action) => {
  toast.success(`${action} successfully!`);
};

export default function useChatbot() {
  const { currentClient } = useClient();

  // RTK Query hooks
  const { data: chatbot, isLoading: getChatbotLoading } = useGetChatbotQuery({
    chatbotId: currentClient?.chatbotId,
  });

  const [updateChatbot, { isLoading: updateChatbotLoading }] =
    useUpdateChatbotMutation();
  const [deleteChatbot, { isLoading: deleteChatbotLoading }] =
    useDeleteChatbotMutation();
  const [addInquiry, { isLoading: addInquiryLoading }] =
    useAddInquiryMutation();
  const [updateInquiry, { isLoading: updateInquiryLoading }] =
    useUpdateInquiryMutation();
  const [deleteInquiry, { isLoading: deleteInquiryLoading }] =
    useDeleteInquiryMutation();

  // Chatbot operations
  const handleUpdateChatbot = async (id, chatbotData) => {
    try {
      const response = await updateChatbot({ id, ...chatbotData }).unwrap();
      notifySuccess("Chatbot updated");
      return response;
    } catch (error) {
      handleError(error, "update chatbot");
    }
  };

  const handleDeleteChatbot = async (id) => {
    try {
      const response = await deleteChatbot(id).unwrap();
      notifySuccess("Chatbot deleted");
      return response;
    } catch (error) {
      handleError(error, "delete chatbot");
    }
  };

  // Inquiry operations
  const handleAddInquiry = async ({ question, answer, keyword }) => {
    try {
      const res = await addInquiry({
        question,
        answer,
        keyword,
        chatbotId: currentClient?.chatbotId,
      }).unwrap();

      if (res?.data) notifySuccess("Inquiry added");
      return res;
    } catch (error) {
      handleError(error, "add inquiry");
    }
  };

  const handleUpdateInquiry = async (inquiryData) => {
    try {
      const response = await updateInquiry(inquiryData).unwrap();
      notifySuccess("Inquiry updated");
      return response;
    } catch (error) {
      handleError(error, "update inquiry");
    }
  };

  const handleDeleteInquiry = async (data) => {
    try {
      const res = await deleteInquiry(data).unwrap();
      if (res?.data) notifySuccess("Inquiry deleted");
      return res;
    } catch (error) {
      handleError(error, "delete inquiry");
    }
  };

  return {
    chatbot: chatbot?.data?.inquiries,
    handleUpdateChatbot,
    handleDeleteChatbot,
    getChatbotLoading,
    updateChatbotLoading,
    deleteChatbotLoading,
    handleAddInquiry,
    addInquiryLoading,
    handleUpdateInquiry,
    updateInquiryLoading,
    deleteInquiryLoading,
    handleDeleteInquiry,
  };
}
