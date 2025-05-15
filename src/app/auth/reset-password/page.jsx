"use client";
import useAuth from "@/hooks/useAuth";
import { useFormik } from "formik";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import MainLoader from "@/components/MainLoader";
import { resetPasswordValidation } from "@/utils/authValidation";
import { useState } from "react";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { resetPassword, loading } = useAuth();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidation,
    onSubmit: (values, { resetForm }) => {
      resetPassword(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">New Password</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 z-50 flex items-center pointer-events-none">
            <Lock className="size-5 text-base-content/40" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            className="input input-bordered w-full pl-10 focus:outline-0 focus:border-base-content/40"
            placeholder="**********"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center z-50"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="size-5 text-base-content/40" />
            ) : (
              <Eye className="size-5 text-base-content/40" />
            )}
          </button>
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Confirm Password</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 z-50 flex items-center pointer-events-none">
            <Lock className="size-5 text-base-content/40" />
          </div>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="input input-bordered w-full pl-10 focus:outline-0 focus:border-base-content/40"
            placeholder="Type confirm password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center z-50"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="size-5 text-base-content/40" />
            ) : (
              <Eye className="size-5 text-base-content/40" />
            )}
          </button>
        </div>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p className="text-red-500 text-sm">
            {formik.errors.confirmPassword}
          </p>
        )}
      </div>

      <button
        className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""}`}
        type="submit"
        disabled={loading}
      >
        {loading && <MainLoader />}
        {loading ? "Reset..." : "Reset Password"}
      </button>
    </form>
  );
}
