"use client";
import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { verifyOtpValidation } from "@/utils/authValidation";
import { useFormik } from "formik";
import { Lock, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerifyOtp() {
  const router = useRouter();
  const { verifyOtp, loading } = useAuth();

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: verifyOtpValidation,
    onSubmit: (values) => {
      verifyOtp(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">OTP</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 z-50 flex items-center pointer-events-none">
            <Lock className="size-5 text-base-content/40" />
          </div>
          <input
            type="number"
            className="input input-bordered w-full pl-10 focus:outline-0 focus:border-base-content/40"
            placeholder="type otp"
            name="otp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.otp}
          />
        </div>
        {formik.errors.otp && formik.touched.otp && (
          <p className="text-red-500 text-sm">{formik.errors.otp}</p>
        )}
      </div>
      <button
        className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""}`}
        type="submit"
        disabled={loading}
      >
        {loading && <MainLoader />}
        {loading ? "verify..." : "verify otp"}
      </button>
    </form>
  );
}


