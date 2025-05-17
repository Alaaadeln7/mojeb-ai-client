import { Check, Plus, Trash2 } from "lucide-react";

export default function MainConversationScript() {
  return (
    <div className="shadow-sm bg-base-100 p-5 rounded-2xl mt-5">
      <h3 className="font-bold text-2xl my-3">Main Conversation Script</h3>
      <div className="border border-base-300 p-5 rounded-2xl">
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-primary flex justify-center items-center text-center text-base-100">
              C
            </div>
          </div>
          <div className="chat-header">
            customer
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">
            Hello, I'm looking to understand the performance metrics of my
            customer service over the last week. Can you help me with that?
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-header">
            mojeeb ai
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">
            Absolutely! I can generate a dashboard that highlights the key
            metrics, such as response rates, escalation to human agents, and
            overall improvements compared to the previous week. Would you like
            it in a visual format?
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-primary flex justify-center items-center text-center text-base-100">
              C
            </div>
          </div>
          <div className="chat-header">
            customer
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">
            Yes, a visual format would be great. Can I see both the improvement
            percentage and the times where we get the most activity?
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <button className="btn btn-primary">
          <Plus />
          Add new Line
        </button>
        <div className="flex gap-5">
          <button className="btn btn-soft">
            <Check className="size-5" />
          </button>
          <button className="btn btn-soft">
            <Trash2 className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
