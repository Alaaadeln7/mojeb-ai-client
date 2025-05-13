"use client";
import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { registerValidation } from "@/utils/authValidation";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, loading } = useAuth();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      register(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <div className="form-control">
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label htmlFor="password">password</label>
        <div className="flex justify-center items-center border border-base-300 rounded-md">
          <input
            id="password"
            type={showPassword ? "password" : "text"}
            placeholder="Type password here"
            className="input border-0 w-full max-w-xs outline-0"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />
          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="btn btn-ghost"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}
      </div>
      <button disabled={loading} className="btn btn-primary" type="submit">
        {loading ? <MainLoader /> : "sign up"}
      </button>
      <p className="text-center">
        Already have an account?
        <Link href="/auth/login" className="btn btn-link m-0 p-0">
          login
        </Link>
      </p>
    </form>
  );
}
