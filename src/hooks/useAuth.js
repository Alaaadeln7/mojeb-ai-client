"use client";
import {
  useCheckAuthQuery,
  useCreateUserMutation,
  useForgetPasswordMutation,
  useGetAllUsersQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useResetPasswordMutation,
  useVerifyOtpForgetPasswordMutation,
  useVerifyOtpMutation,
} from "@/store/api/authApiSlice";
// import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useAuth() {
  const [currentPage, setCurrentPage] = useState(1);
  const [createUser, { isLoading: isCreateUserLoading }] =
    useCreateUserMutation();
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const { data: user, isLoading: isCheckingAuth } = useCheckAuthQuery();
  const [verifyOtp, { isLoading: verifyLoading }] = useVerifyOtpMutation();
  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();
  const [forgetPassword, { isLoading: forgetPasswordLoading }] =
    useForgetPasswordMutation();
  const [resetPassword, { isLoading: resetPasswordLoading }] =
    useResetPasswordMutation();
  const [
    verifyOtpForgetPassword,
    { isLoading: verifyOtpForgetPasswordLoading },
  ] = useVerifyOtpForgetPasswordMutation();

  const { data: users, isLoading: getUsersLoading } = useGetAllUsersQuery({
    page: currentPage,
  });

  const router = useRouter();
  const handleCreateUser = async (userData) => {
    try {
      const response = await createUser(userData).unwrap();
      toast.success("create user successful");
    } catch (error) {
      toast.error(
        error?.data?.message || "create user failed. Please try again."
      );
      console.log("Registration error:", error);
      throw error;
    }
  };
  // const
  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials).unwrap();
      console.log("Login successful:", response);
      toast.success("Login Successfully");
      router.push("/");
    } catch (error) {
      toast.error(error?.data?.message || "Login failed. Please try again.");
    }
  };
  const handleVerifyOtp = async (credentials) => {
    const res = await verifyOtp(credentials);
    console.log(res);
    if (res?.data) {
      toast.success("register is successfully");
    }
  };
  const handleForgetPassword = async (credentials) => {
    const res = await forgetPassword(credentials);
    if (res?.data) {
      toast.success("OTP Sended To Your Email");
      router.push("/auth/reset-password");
    }
  };
  const handleVerifyOtpForgetPassword = async (credentials) => {
    let res = await verifyOtpForgetPassword(credentials);
    if (res?.data) {
      toast.success("verifying successfully");
    }
  };
  const handleResetPassword = async (credentials) => {
    let res = await resetPassword(credentials);
    if (res?.data) {
      toast.success("reset password successfully");
      router.push("/auth/login");
    }
  };
  const handleLogout = async () => {
    const res = await logout();
    toast.success("logout successfully");
    router.push("/");
    // await cookies().delete("token");
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return {
    handleCreateUser,
    login: handleLogin,
    user: user?.data,
    logout: handleLogout,
    verifyOtp: handleVerifyOtp,
    forgetPassword: handleForgetPassword,
    resetPassword: handleResetPassword,
    verifyOtpForgetPassword: handleVerifyOtpForgetPassword,
    loading:
      isCreateUserLoading ||
      isLoggingIn ||
      logoutLoading ||
      verifyLoading ||
      forgetPasswordLoading ||
      resetPasswordLoading,
    isCheckingAuth,
    users: users?.data?.users,
    currentPage,
    handlePageChange,
    totalPages: users?.data?.totalPages,
    getUsersLoading,
  };
}
