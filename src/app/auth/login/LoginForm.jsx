"use client";
import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { loginValidation } from "@/utils/authValidation";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import AuthImagePattern from "@/components/AuthImagePattern";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      login(values);
      resetForm();
    },
  });
  return (
    <div>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
              className="input w-full pl-10 focus:outline-0 focus:border-base-content/40"
              placeholder="example@gmail.com"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
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
              className="absolute inset-y-0 right-0 pr-3 z-50 flex items-center outline-none"
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

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Loading...
            </>
          ) : (
            "Login"
          )}
        </button>
        <Link href={"/auth/forget-password"} className="link link-primary">forget password</Link>
      </form>

      <div className="text-center mt-5">
        <p className="text-base-content/60">
          Create account{" "}
          <Link href={"/auth/register"} className="link link-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
