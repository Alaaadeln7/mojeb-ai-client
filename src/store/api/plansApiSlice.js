import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const plansApiSlice = createApi({
  reducerPath: "plansApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
        : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    }plans`,
    credentials: "include",
  }),
  tagTypes: ["Plan"],
  endpoints: (builder) => ({
    getPlans: builder.query({
      query: () => "/",
      providesTags: ["Plan"],
    }),
    getPlanById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Plan"],
    }),
    createPlan: builder.mutation({
      query: (planData) => ({
        url: "/",
        method: "POST",
        body: planData,
      }),
      invalidatesTags: ["Plan"],
    }),
    updatePlan: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Plan"],
    }),
    deletePlan: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Plan"],
    }),
  }),
});

export const {
  useGetPlansQuery,
  useGetPlanByIdQuery,
  useCreatePlanMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
} = plansApiSlice;
