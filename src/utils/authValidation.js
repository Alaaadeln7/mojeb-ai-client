import * as Yup from "yup";
export const loginValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const registerValidation = Yup.object({
  fullName: Yup.string()
    .trim()
    .required("full name is required")
    .min(2)
    .max(100),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
