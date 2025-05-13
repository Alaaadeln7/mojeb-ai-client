"use client";
import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { verifyOtpValidation } from "@/utils/authValidation";
import { useFormik } from "formik";
import { MoveLeft } from "lucide-react";
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
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="shadow-lg rounded-2xl p-6">
        <h1 className="text-xl font-bold mb-4 flex items-center">
          <button
            className="btn btn-ghost mr-2"
            onClick={() => {
              router.back();
            }}
          >
            <MoveLeft className="size-5" />
          </button>
          Enter OTP
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control mb-4">
            <label htmlFor="otp" className="block text-sm font-medium mb-1">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`input input-bordered ${
                formik.touched.otp && formik.errors.otp ? "input-error" : ""
              }`}
            />
            {formik.touched.otp && formik.errors.otp && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.otp}</p>
            )}
          </div>
          <button
            className={`btn btn-primary w-full ${
              loading ? "btn-disabled" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? <MainLoader /> : "verify otp"}
          </button>
        </form>
      </div>
    </div>
  );
}
