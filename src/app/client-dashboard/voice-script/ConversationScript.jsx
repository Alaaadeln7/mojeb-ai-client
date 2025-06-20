import ConversationScriptSkeleton from "@/components/skeletons/ConversationScriptSkeleton";
import { Bot } from "lucide-react";

export default function ConversationScript({
  selectedChatbot,
  setSelectedChatbot,
  chatbot,
  getChatbotLoading,
}) {
  if (getChatbotLoading) return <ConversationScriptSkeleton />;
  if (!chatbot) return null;
  if (chatbot.length === 0) {
    return (
      <div className="text-center bg-base-200 p-8 rounded-xl shadow-sm">
        <p className="text-base-content/70">
          No conversation scripts available
        </p>
      </div>
    );
  }

  const isSelected = (id) => {
    if (Array.isArray(selectedChatbot)) {
      return selectedChatbot.includes(id);
    }
    return selectedChatbot === id;
  };
  return (
    <div className="space-y-3">
      {chatbot.map((item) => (
        <div
          key={item._id}
          onClick={() => setSelectedChatbot(item._id)}
          className={`bg-base-100 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:border-primary/30 ${
            isSelected(item._id)
              ? "border-primary shadow-md bg-primary/5"
              : "border-base-300"
          }`}
        >
          {/* Customer Message */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-focus flex items-center justify-center text-white font-bold"
              >
                C
              </div>
            </div>
            <div className="chat-header text-sm font-medium text-base-content">
              Customer
            </div>
            <div className="chat-bubble bg-primary text-primary-content">
              {item.question}
            </div>
          </div>

          {/* AI Response */}
          <div className="chat chat-start mt-3">
            <div className="chat-image avatar">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary-focus flex items-center justify-center"
              >
                <Bot className="size-5 text-secondary-content" />
              </div>
            </div>
            <div className="chat-header text-sm font-medium text-base-content">
              Mojeeb AI
            </div>
            <div className="chat-bubble bg-secondary text-secondary-content">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
