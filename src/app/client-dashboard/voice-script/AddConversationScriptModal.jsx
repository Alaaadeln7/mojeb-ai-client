import {
  Bot,
  X,
  Plus,
  MessageSquareText,
  CircleAlert,
  Loader,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { AddConversationValidation } from "@/utils/addConversations";
import useChatbot from "@/hooks/useChatbot";

// Glassmorphic Modal Container
const GlassModal = ({ children, onClose }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

// Modern Card Component
const ModernCard = ({ children }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl w-full max-w-md p-6 border border-white/20"
    initial={{ y: -20, opacity: 0, scale: 0.98 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    exit={{ y: 20, opacity: 0, scale: 0.98 }}
    transition={{ type: "spring", damping: 20, stiffness: 300 }}
    onClick={(e) => e.stopPropagation()}
  >
    {children}
  </motion.div>
);

// Sleek Header Component
const ModalHeader = ({ title, onClose }) => (
  <div className="flex justify-between items-center mb-6">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-gradient-to-br from-[#10a5b1] to-[#3d4d58] text-white">
        <MessageSquareText className="text-base-100 size-5" />
      </div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
    <button
      onClick={onClose}
      className="p-1 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
    >
      <X className="size-5" />
    </button>
  </div>
);

// Modern Chat Bubble Component
const ChatBubble = ({ role = "customer", children, error }) => {
  const isAI = role === "ai";

  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`max-w-[85%] rounded-2xl p-4 ${
          isAI
            ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
            : "bg-gradient-to-br from-[#10a5b1] to-[#3d4d58] text-white"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isAI ? "bg-gray-600" : "bg-blue-400"
            }`}
          >
            {isAI ? (
              <Bot className="size-3 text-white" />
            ) : (
              <span className="text-xs font-bold text-white">U</span>
            )}
          </div>
          <span className="text-xs font-medium">
            {isAI ? "Mojeeb AI" : "Customer"}
          </span>
        </div>
        {children}
        {error && (
          <div
            className={`text-xs text-red-300 mt-1 ${
              isAI ? "text-left" : "text-right"
            }`}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

// Floating Input Component
const FloatingInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  textarea = false,
}) => (
  <div className="relative mb-4">
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full bg-white/5 border border-white/10 rounded-xl p-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 resize-none ${
          error ? "border-red-400/50" : ""
        }`}
        rows={3}
        placeholder=" "
      />
    ) : (
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full bg-white/5 border border-white/10 rounded-xl p-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
          error ? "border-red-400/50" : ""
        }`}
        placeholder=" "
      />
    )}
    <label
      className={`absolute left-3 -top-2 px-1 text-xs bg-gray-900/80 rounded ${
        error ? "text-red-300" : "text-white/70"
      }`}
    >
      {label}
    </label>
    {error && (
      <div className="absolute right-3 top-3 text-red-400">
        <CircleAlert className="size-4" />
      </div>
    )}
  </div>
);

// Gradient Button Component
const GradientButton = ({ children, onClick, loading, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={loading}
    className={`relative overflow-hidden px-5 py-2.5 rounded-xl font-medium text-white shadow-lg transition-colors cursor-pointer ${
      loading
        ? "bg-gray-600"
        : "bg-gradient-to-br from-[#10a5b1] to-[#3d4d58] hover:from-[#3d4d58] hover:to-[#10a5b1]"
    } transition-all duration-300`}
  >
    {loading ? (
      <span className="flex items-center justify-center gap-2">
        <Loader className="size-4 animate-spin" />
        Processing...
      </span>
    ) : (
      children
    )}
    <span className="absolute top-0 right-0 flex h-full w-6 translate-x-full transform items-center justify-center bg-white/30 transition-all duration-300 group-hover:translate-x-0"></span>
  </button>
);

// Main Component
export default function AddConversationScriptModal({ setIsModalOpen }) {
  const { handleAddInquiry, addInquiryLoading } = useChatbot();

  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
      keyword: "",
    },
    validationSchema: AddConversationValidation,
    onSubmit: async (values, { resetForm }) => {
      await handleAddInquiry(values);
      resetForm();
      setIsModalOpen(false);
    },
  });

  return (
    <GlassModal onClose={() => setIsModalOpen(false)}>
      <ModernCard>
        <ModalHeader
          title="Add Conversation Script"
          onClose={() => setIsModalOpen(false)}
        />

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <ChatBubble
            role="customer"
            error={formik.touched.question && formik.errors.question}
          >
            <FloatingInput
              name="question"
              label="Customer Message"
              value={formik.values.question}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.question && formik.errors.question}
              textarea
            />
          </ChatBubble>

          <ChatBubble
            role="ai"
            error={formik.touched.answer && formik.errors.answer}
          >
            <FloatingInput
              name="answer"
              label="AI Response"
              value={formik.values.answer}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.answer && formik.errors.answer}
              textarea
            />
          </ChatBubble>

          <FloatingInput
            name="keyword"
            label="Keyword"
            value={formik.values.keyword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.keyword && formik.errors.keyword}
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2.5 rounded-xl font-medium text-white/80 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <GradientButton type="submit" loading={addInquiryLoading}>
              <div className="flex items-center gap-2">
                <Plus className="size-4" />
                Add Conversation
              </div>
            </GradientButton>
          </div>
        </form>
      </ModernCard>
    </GlassModal>
  );
}
