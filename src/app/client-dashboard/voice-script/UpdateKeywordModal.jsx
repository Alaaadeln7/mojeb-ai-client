import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import useChatbot from "@/hooks/useChatbot";
import FormField from "@/components/ui/FormField";
import SubmitButton from "@/components/ui/SubmitButton";
import ModalHeader from "./ModalHeader";
import { VALIDATION_UPDATE_KEYWORD_SCHEMA } from "@/utils/voiceScriptValidation";

export default function UpdateKeywordModal({
  setOpenUpdateKeyword,
  chatbotId,
  selectInquiry,
}) {
  const { handleUpdateInquiry, updateInquiryLoading } = useChatbot();

  const formik = useFormik({
    initialValues: {
      question: selectInquiry?.question || "",
      answer: selectInquiry?.answer || "",
      keyword: selectInquiry?.keyword || "",
    },
    validationSchema: VALIDATION_UPDATE_KEYWORD_SCHEMA,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await handleUpdateInquiry({
          chatbotId,
          inquiryId: selectInquiry?._id,
          question: values.question,
          answer: values.answer,
          keyword: values.keyword,
        });
        resetForm();
        setOpenUpdateKeyword(false);
      } catch (error) {
        console.error("Error updating keyword:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenUpdateKeyword(false)}
      >
        <motion.div
          className="bg-gradient-to-br from-base-100 to-base-200 rounded-xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto border border-base-300/30"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader
            title="Update Keyword"
            subtitle="Edit your question, answer, and associated keyword"
            onClose={() => setOpenUpdateKeyword(false)}
          />

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <FormField
              id="question"
              label="Question"
              formik={formik}
              isTextarea={true}
            />

            <FormField
              id="answer"
              label="Answer"
              formik={formik}
              isTextarea={true}
            />

            <FormField
              id="keyword"
              label="Keyword"
              formik={formik}
              isTextarea={false}
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setOpenUpdateKeyword(false)}
                className="btn btn-neutral"
                disabled={formik.isSubmitting}
              >
                Cancel
              </button>
              <SubmitButton
                isLoading={updateInquiryLoading}
                loadingText="Updating..."
                defaultText="Update"
              />
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
