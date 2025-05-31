"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { useState } from "react";
import usePlans from "@/hooks/usePlans";
import FormField from "./FormField";

import * as Yup from "yup";
import { intervalOptions } from "@/constants";

const initialValues = {
  title: "",
  description: "",
  size: "",
  price: "",
  interval: "",
  features: [""], // Start with one empty feature
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
  size: Yup.number(),
  interval: Yup.string()
    .required("Interval is required")
    .oneOf(["monthly", "yearly"], "Interval must be either monthly or yearly"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be positive"),
  features: Yup.array()
    .of(Yup.string().required("Feature is required"))
    .min(1, "At least one feature is required")
    .required("Features are required"),
});

export default function CreatePlanModal({ setIsModalOpen }) {
  const { handleCreatePlan, createPlanLoading } = usePlans();
  const [featureInput, setFeatureInput] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Filter out empty features before submission
        const filteredFeatures = values.features.filter((feature) =>
          feature.trim()
        );
        await handleCreatePlan({
          ...values,
          features: filteredFeatures,
        });
        resetForm();
        onClose();
      } catch (error) {
        console.error("Failed to create plan:", error);
        if (error.status === "PARSING_ERROR") {
          toast.error("Failed to create plan. Please check the form values.");
        } else {
          toast.error(error.message || "Failed to create plan");
        }
      }
    },
  });
  // to add a new feature
  const handleAddFeature = () => {
    if (featureInput.trim()) {
      formik.setFieldValue("features", [
        ...formik.values.features,
        featureInput,
      ]);
      setFeatureInput("");
    }
  };
  // to remove a item of features
  const handleRemoveFeature = (index) => {
    const newFeatures = [...formik.values.features];
    newFeatures.splice(index, 1);
    formik.setFieldValue("features", newFeatures);
  };

  // to close the modal
  const onClose = () => {
    setIsModalOpen(false);
    formik.resetForm();
  };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-base-100 rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Create New Plan</h2>
            <button
              onClick={onClose}
              className="btn btn-error btn-circle text-base-300 btn-sm"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Plan Title"
                name="title"
                type="text"
                placeholder="Plan title"
                formik={formik}
              />

              <FormField
                label="Size"
                name="size"
                type="text"
                placeholder="Enter size"
                formik={formik}
              />

              <FormField
                label="Price"
                name="price"
                type="number"
                placeholder="0.00"
                formik={formik}
              />
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text">Interval</span>
                </label>
                <select
                  name="interval"
                  className="select select-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.interval}
                >
                  <option value="">Select interval</option>
                  {intervalOptions.map((interval) => (
                    <option key={interval} value={interval}>
                      {interval}
                    </option>
                  ))}
                </select>
                {formik.touched.interval && formik.errors.interval && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.interval}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Plan description"
                  className="textarea textarea-bordered w-full"
                  rows={3}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.description}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text">Features</span>
                </label>
                <div className="space-y-2">
                  {formik.values.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1"
                        value={feature}
                        onChange={(e) => {
                          const newFeatures = [...formik.values.features];
                          newFeatures[index] = e.target.value;
                          formik.setFieldValue("features", newFeatures);
                        }}
                        placeholder={`Feature ${index + 1}`}
                      />
                      <button
                        type="button"
                        className="btn btn-error btn-square btn-sm"
                        onClick={() => handleRemoveFeature(index)}
                        aria-label="Remove feature"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}

                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      placeholder="Add new feature"
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAddFeature}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button type="button" className="btn btn-error" onClick={onClose}>
                Cancel
              </button>
              <button
                type="submit"
                className={`btn btn-primary ${
                  createPlanLoading && "cursor-progress"
                }`}
                disabled={createPlanLoading}
              >
                {createPlanLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Create Plan"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Reusable form field component
