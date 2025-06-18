"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { createClientValidation } from "@/utils/clientValidation";
import { industryOptions } from "@/constants/index.js";
import useClient from "@/hooks/useClient";
import usePlans from "@/hooks/usePlans";

export default function CreateNewClientModal({ setIsModalOpen }) {
  const { handleCreateClient, createClientLoading } = useClient();
  const { plans } = usePlans();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      website: "",
      description: "",
      size: "",
      industry: "",
      commercialRegister: "",
      taxId: "",
      planId: "",
    },
    validationSchema: createClientValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleCreateClient(values);
      resetForm();
      setIsModalOpen(false);
    },
  });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsModalOpen(false)}
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
            <h2 className="text-xl font-bold">Create New Client</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn btn-error btn-circle text-base-300 btn-sm"
            >
              <X className="size-4" />
            </button>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Client Name*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Company Name"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="contact@company.com"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type="Password"
                  name="password"
                  placeholder="Company password"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="label">
                  <span className="label-text">Phone*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1234567890"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="label">
                  <span className="label-text">Address*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="123 Business St, City"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.address}
                  </p>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="label">
                  <span className="label-text">Website</span>
                </label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://company.com"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                />
                {formik.touched.website && formik.errors.website && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.website}
                  </p>
                )}
              </div>

              {/* Industry */}
              <div>
                <label className="label">
                  <span className="label-text">Industry*</span>
                </label>
                <select
                  name="industry"
                  className="select select-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.industry}
                >
                  <option value="">Select Industry</option>
                  {industryOptions.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {formik.touched.industry && formik.errors.industry && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.industry}
                  </p>
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text">plan*</span>
                </label>
                <select
                  name="planId"
                  className="select select-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.planId}
                >
                  <option value="">Select plan</option>
                  {plans?.map((plan) => (
                    <option key={plan?._id} value={plan?._id}>
                      {plan?.title}
                    </option>
                  ))}
                </select>
                {formik.touched.planId && formik.errors.planId && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.planId}
                  </p>
                )}
              </div>

              {/* Company Size */}
              <div>
                <label className="label">
                  <span className="label-text">Company Size</span>
                </label>
                <select
                  name="size"
                  className="select select-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.size}
                >
                  <option value="">Select Size</option>
                  <option value="small">Small (1-50)</option>
                  <option value="medium">Medium (51-200)</option>
                  <option value="large">Large (201-1000)</option>
                  <option value="enterprise">Enterprise (1000+)</option>
                </select>
                {formik.touched.size && formik.errors.size && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.size}
                  </p>
                )}
              </div>

              {/* Commercial Register */}
              <div>
                <label className="label">
                  <span className="label-text">Commercial Register*</span>
                </label>
                <input
                  type="text"
                  name="commercialRegister"
                  placeholder="CR-123456"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.commercialRegister}
                />
                {formik.touched.commercialRegister &&
                  formik.errors.commercialRegister && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.commercialRegister}
                    </p>
                  )}
              </div>

              {/* Tax ID */}
              <div>
                <label className="label">
                  <span className="label-text">Tax ID*</span>
                </label>
                <input
                  type="text"
                  name="taxId"
                  placeholder="TAX-123-456"
                  className="input input-bordered w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.taxId}
                />
                {formik.touched.taxId && formik.errors.taxId && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.taxId}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text">Description*</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Brief description of the client"
                  className="textarea textarea-bordered w-full"
                  rows={3}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                ></textarea>
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                className="btn btn-error"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={createClientLoading}
              >
                {createClientLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Update Client"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
