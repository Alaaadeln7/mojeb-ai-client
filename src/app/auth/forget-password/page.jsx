"use client";
import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { forgetPasswordValidation } from "@/utils/authValidation";
import { useFormik } from "formik";
import { Mail } from "lucide-react";

export default function forgetPassword() {
  const {forgetPassword,loading} = useAuth()
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetPasswordValidation,
    onSubmit: (values, { resetForm }) => {
      forgetPassword(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 z-50 flex items-center pointer-events-none">
            <Mail className="size-5 text-base-content/40" />
          </div>
          <input
            type="email"
            className="input input-bordered w-full pl-10 focus:outline-0 focus:border-base-content/40"
            placeholder="type email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>
      <button
        className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""}`}
        type="submit"
        disabled={loading}
      >
        {loading && <MainLoader />}
        {loading ? "verify..." : "verify email"}
      </button>
    </form>
  );
}
