import { API_LINK } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_LINK}/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    checkAuth: builder.query({
      query: () => ({
        url: "/check-auth",
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/forget-password",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyOtpForgetPassword: builder.mutation({
      query: (credentials) => ({
        url:"/verify-otp-forget-password",
        method:"POST",
        body:credentials
      })
    }),
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/reset-password",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useCheckAuthQuery,
  useLogoutMutation,
  useVerifyOtpMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useVerifyOtpForgetPasswordMutation
} = authApiSlice;
