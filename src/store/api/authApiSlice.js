import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
        : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    }auth`,
    credentials: "include",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/create-user",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    checkAuth: builder.query({
      query: () => ({
        url: "/check-auth",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    forgetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/forget-password",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    verifyOtpForgetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/verify-otp-forget-password",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/reset-password",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    getAllUsers: builder.query({
      query: ({ page }) =>
        `/users/?page=${page}&limit=${process.env.NEXT_PUBLIC_PAGE_LIMIT}`,
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateUserMutation,
  useCheckAuthQuery,
  useLogoutMutation,
  useVerifyOtpMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useVerifyOtpForgetPasswordMutation,
  useGetAllUsersQuery,
} = authApiSlice;
