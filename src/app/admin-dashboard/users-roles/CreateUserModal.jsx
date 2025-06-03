"use client";

import { Eye, EyeOff, Loader2, Lock, Mail, User, Users, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { createUserSchema } from "@/utils/authValidation";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
export default function CreateUserModal({ setIsModalOpen }) {
  const [showPassword, setShowPassword] = useState(false);
  const { handleCreateUser, isCreateUserLoading } = useAuth();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: createUserSchema,
    onSubmit: async (values) => {
      try {
        console.log("User created:", values);
        handleCreateUser(values);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  });

  const handleClose = () => {
    if (!isCreateUserLoading) {
      setIsModalOpen(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
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
              onClick={handleClose}
              className="btn btn-ghost btn-circle btn-sm"
              disabled={isCreateUserLoading}
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div className="form-control">
              <label htmlFor="fullName" className="label">
                <span className="label-text font-medium">Full name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 z-50 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10 ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "input-error"
                      : ""
                  }`}
                  placeholder="Your full name"
                  id="fullName"
                  name="fullName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  disabled={isCreateUserLoading}
                />
              </div>
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="mt-1 text-sm text-error">
                  {formik.errors.fullName}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 z-50 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10 ${
                    formik.touched.email && formik.errors.email
                      ? "input-error"
                      : ""
                  }`}
                  placeholder="example@gmail.com"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  disabled={isCreateUserLoading}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-error">{formik.errors.email}</p>
              )}
            </div>

            {/* Role Field */}
            <div className="form-control">
              <label htmlFor="role" className="label">
                <span className="label-text font-medium">Role</span>
              </label>
              <select
                className={`select select-bordered w-full ${
                  formik.touched.role && formik.errors.role
                    ? "select-error"
                    : ""
                }`}
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isCreateUserLoading}
              >
                <option value="" disabled>
                  Choose role
                </option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
              </select>
              {formik.touched.role && formik.errors.role && (
                <p className="mt-1 text-sm text-error">{formik.errors.role}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 z-50 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10 ${
                    formik.touched.password && formik.errors.password
                      ? "input-error"
                      : ""
                  }`}
                  placeholder="********"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  disabled={isCreateUserLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isCreateUserLoading}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-error">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isCreateUserLoading || !formik.isValid}
              >
                {isCreateUserLoading ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    <span>Creating...</span>
                  </>
                ) : (
                  "Create User"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
