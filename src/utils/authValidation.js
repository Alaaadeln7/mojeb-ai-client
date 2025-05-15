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

export const verifyOtpValidation = Yup.object({
  otp: Yup.string().required("otp is required").max(6),
});

export const forgetPasswordValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const resetPasswordValidation = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
