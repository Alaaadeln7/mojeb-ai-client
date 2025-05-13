import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { registerValidation } from "@/utils/authValidation";
import { useFormik } from "formik";
import Link from "next/link";

export default function RegisterForm() {
  const {register , loading} = useAuth()
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
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button disabled={loading} className="btn btn-primary" type="submit">
        {loading ? <MainLoader/> : "sign up"}
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
