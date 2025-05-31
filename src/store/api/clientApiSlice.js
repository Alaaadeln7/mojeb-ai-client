import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientApiSlice = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
        : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    }clients`,
    credentials: "include",
  }),
  tagTypes: ["Client"],
  endpoints: (builder) => ({
    createClient: builder.mutation({
      query: (clientData) => ({
        url: "/create",
        method: "POST",
        body: clientData,
      }),
      invalidatesTags: ["Client"],
    }),
    getClients: builder.query({
      query: () => "/",
      providesTags: ["Client"],
    }),
    getClientById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Client"],
    }),
    updateClient: builder.mutation({
      query: ({ id, ...clientData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: clientData,
      }),
      invalidatesTags: ["Client"],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Client"],
    }),
  }),
});

export const {
  useCreateClientMutation,
  useGetClientsQuery,
  useGetClientByIdQuery,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = clientApiSlice;
