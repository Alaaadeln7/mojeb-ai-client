"use client";
import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { loginValidation } from "@/utils/authValidation";
import { useFormik } from "formik";
import Link from "next/link";

export default function LoginForm() {
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
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 mt-4">
      <div className="form-control w-full max-w-xs">
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="text"
          placeholder="Type email here"
          className="input input-bordered w-full max-w-xs"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>
      <div className="form-control w-full max-w-xs">
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          placeholder="Type password here"
          className="input input-bordered w-full max-w-xs"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}
      </div>
      <button disabled={loading} className="btn btn-primary">
        {loading ? <MainLoader /> : "Login"}
      </button>
      <p className="text-center">
        create account ?
        <Link href={"/auth/register"} className="btn btn-link m-0 p-0">
          sign up
        </Link>
      </p>
    </form>
  );
}
