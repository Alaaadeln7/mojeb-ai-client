export default function ConversationScriptSkeleton() {
  return (
    <div className="bg-base-200/50 p-4 rounded-xl border border-base-300 space-y-4 animate-pulse">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index}>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 h-10 rounded-full bg-base-300"></div>
            </div>
            <div className="chat-header flex items-center gap-2">
              <div className="h-4 w-20 bg-base-300 rounded"></div>
              <div className="h-3 w-12 bg-base-300 rounded"></div>
            </div>
            <div className="chat-bubble bg-base-300 space-y-2">
              <div className="h-3 w-full bg-base-200 rounded"></div>
              <div className="h-3 w-4/5 bg-base-200 rounded"></div>
              <div className="h-3 w-3/4 bg-base-200 rounded"></div>
            </div>
            <div className="chat-footer">
              <div className="h-3 w-16 bg-base-300 rounded"></div>
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 h-10 rounded-full bg-base-300"></div>
            </div>
            <div className="chat-header flex items-center gap-2">
              <div className="h-4 w-16 bg-base-300 rounded"></div>
              <div className="h-3 w-12 bg-base-300 rounded"></div>
            </div>
            <div className="chat-bubble bg-base-300 space-y-2">
              <div className="h-3 w-full bg-base-200 rounded"></div>
              <div className="h-3 w-5/6 bg-base-200 rounded"></div>
              <div className="h-3 w-2/3 bg-base-200 rounded"></div>
              <div className="h-3 w-3/4 bg-base-200 rounded"></div>
            </div>
            <div className="chat-footer">
              <div className="h-3 w-20 bg-base-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
