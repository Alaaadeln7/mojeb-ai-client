import { Bot, X, Plus, MessageSquareText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { AddConversationValidation } from "@/utils/addConversations";
import useChatbot from "@/hooks/useChatbot";

export default function AddConversationScriptModal({ setIsModalOpen }) {
  const { handleAddInquiry, addInquiryLoading } = useChatbot();
  // const {client} = useChatbot
  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
    },
    validationSchema: AddConversationValidation,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      await handleAddInquiry(values);
      resetForm();
      setIsModalOpen(false);
    },
  });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div
          className="bg-base-100 rounded-xl shadow-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto border border-base-300"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <MessageSquareText className="size-5 text-primary" />
              <h2 className="text-xl font-bold text-primary">
                Add Conversation Item
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn btn-ghost btn-circle btn-sm hover:bg-base-300 transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-6">
              {/* Customer Message */}
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full bg-gradient-to-br from-primary to-primary-focus flex justify-center items-center text-center text-base-100 font-bold">
                    C
                  </div>
                </div>
                <div className="chat-header text-sm font-semibold flex items-center gap-2">
                  Customer
                </div>
                <div className="chat-bubble bg-primary text-primary-content before:bg-primary">
                  <textarea
                    name="question"
                    placeholder="Type customer message here..."
                    className="textarea textarea-ghost w-full bg-primary/20 focus:bg-transparent text-primary-content placeholder-primary-content/70 focus:outline-none resize-none"
                    rows={3}
                    value={formik.values.question}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.question && formik.errors.question && (
                  <div className="chat-footer text-error text-xs pr-14 text-right">
                    {formik.errors.question}
                  </div>
                )}
              </div>
              {/* AI Message */}
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full bg-gradient-to-br from-secondary to-secondary-focus flex justify-center items-center">
                    <Bot className="size-5 text-secondary-content" />
                  </div>
                </div>
                <div className="chat-header text-sm font-semibold flex items-center gap-2">
                  Mojeeb AI
                  <time className="text-xs opacity-50">Now</time>
                </div>
                <div className="chat-bubble bg-secondary text-secondary-content before:bg-secondary">
                  <textarea
                    name="answer"
                    placeholder="Type AI response here..."
                    className="textarea textarea-ghost w-full bg-secondary/20 focus:bg-transparent text-secondary-content placeholder-secondary-content/70 focus:outline-none resize-none"
                    rows={3}
                    value={formik.values.answer}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.answer && formik.errors.answer && (
                  <div className="chat-footer text-error text-xs pl-14">
                    {formik.errors.answer}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="btn btn-ghost hover:bg-base-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary gap-2"
                disabled={addInquiryLoading}
              >
                {addInquiryLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    <Plus className="size-4" />
                    <span> Add Conversation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
