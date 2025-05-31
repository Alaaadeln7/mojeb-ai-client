import { Bot, Check, MessageSquareText, Plus, Trash2 } from "lucide-react";

export default function MainConversationScript({ setIsModalOpen }) {
  return (
    <div className="bg-base-100 p-6 rounded-2xl mt-5 shadow-lg border border-base-200">
      <h3 className="font-bold text-2xl mb-4 text-primary flex items-center gap-2">
        <MessageSquareText className="size-6" />
        Main Conversation Script
      </h3>

      <div className="bg-base-200/50 p-4 rounded-xl border border-base-300 space-y-4">
        {/* Customer Message */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-gradient-to-br from-primary to-primary-focus flex justify-center items-center text-center text-base-100 font-bold">
              C
            </div>
          </div>
          <div className="chat-header text-sm font-semibold flex items-center gap-2">
            Customer
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble bg-primary text-primary-content before:bg-primary">
            Hello, I'm looking to understand the performance metrics of my
            customer service over the last week. Can you help me with that?
          </div>
          <div className="chat-footer text-xs opacity-50">Seen at 12:46</div>
        </div>

        {/* AI Message */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div
              className="w-10 rounded-full bg-gradient-to-br from-secondary to-secondary-focus"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Bot className="size-5 text-secondary-content" />
            </div>
          </div>
          <div className="chat-header text-sm font-semibold flex items-center gap-2">
            Mojeeb AI
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble bg-secondary text-secondary-content before:bg-secondary">
            Absolutely! I can generate a dashboard that highlights the key
            metrics, such as response rates, escalation to human agents, and
            overall improvements compared to the previous week. Would you like
            it in a visual format?
          </div>
          <div className="chat-footer text-xs opacity-50">Delivered</div>
        </div>

        {/* Customer Reply */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="w-10 rounded-full bg-gradient-to-br from-primary to-primary-focus flex justify-center items-center text-center text-base-100 font-bold"
            >
              C
            </div>
          </div>
          <div className="chat-header text-sm font-semibold flex items-center gap-2">
            Customer
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble bg-primary text-primary-content before:bg-primary">
            Yes, a visual format would be great. Can I see both the improvement
            percentage and the times where we get the most activity?
          </div>
          <div className="chat-footer text-xs opacity-50">Seen at 12:46</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6 flex-wrap gap-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary btn-md rounded-xl gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <Plus className="size-5" />
          Add new Line
        </button>
        <div className="flex gap-3">
          <button className="btn btn-success btn-sm rounded-xl shadow hover:shadow-md transition-all">
            <Check className="size-4" />
            Confirm
          </button>
          <button className="btn btn-error btn-sm rounded-xl shadow hover:shadow-md transition-all">
            <Trash2 className="size-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
