import { MessageSquareText, Plus, Trash2, Loader } from "lucide-react";
import ConversationScript from "./ConversationScript";

export default function MainConversationScript({
  setIsModalOpen,
  setSelectedChatbot,
  selectedChatbot,
  chatbot,
  getChatbotLoading,
  handleDeleteInquiry,
  deleteInquiryLoading,
  chatbotId,
}) {
  const handleAddClick = () => setIsModalOpen(true);
  const handleDeleteClick = () => {
    handleDeleteInquiry({ chatbotId, inquiryId: selectedChatbot });
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl shadow-black/20 mt-6">
      {/* Header with glass effect */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-[#10a5b1] to-[#3d4d58] rounded-lg">
            <MessageSquareText className="text-white size-5" />
          </div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#10a5b1] to-[#3d4d58] bg-clip-text text-transparent">
            Main Conversation Script
          </h3>
        </div>
      </div>

      {/* Content area */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-6">
        <ConversationScript
          setSelectedChatbot={setSelectedChatbot}
          selectedChatbot={selectedChatbot}
          chatbot={chatbot}
          getChatbotLoading={getChatbotLoading}
        />
      </div>

      {/* Action Buttons with modern styling */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <button
          onClick={handleAddClick}
          className="relative overflow-hidden group px-5 py-2.5 rounded-xl font-medium text-white shadow-lg bg-gradient-to-br from-[#10a5b1] to-[#3d4d58] hover:from-[#3d4d58] hover:to-[#10a5b1] cursor-pointer transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Plus className="size-5" />
            Add New Line
          </span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>

        {selectedChatbot?.length > 0 && (
          <button
            onClick={handleDeleteClick}
            disabled={deleteInquiryLoading}
            className="relative overflow-hidden group px-5 py-2.5 rounded-xl font-medium text-white shadow-lg bg-gradient-to-br from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 transition-all duration-300 disabled:opacity-70"
          >
            <span className="relative z-10 flex items-center gap-2">
              {deleteInquiryLoading ? (
                <Loader className="size-5 animate-spin" />
              ) : (
                <Trash2 className="size-5" />
              )}
              Delete
            </span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        )}
      </div>
    </div>
  );
}
