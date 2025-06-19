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
      query: ({ page }) =>
        `/?page=${page}&limit=${process.env.NEXT_PUBLIC_PAGE_LIMIT}`,
      providesTags: ["Client"],
    }),
    getClientById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Client"],
    }),
    updateClient: builder.mutation({
      query: ({ id, clientData }) => ({
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
    searchClient: builder.query({
      query: (query) => `search/${query}`,
    }),
    emailNotification: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}/email-notification`,
        method: "POST",
      }),
      invalidatesTags: ["Client"],
    }),
    planUsageAlert: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}/plan-usage-alert`,
        method: "POST",
      }),
      invalidatesTags: ["Client"],
    }),
    performanceReports: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}/performance-reports`,
        method: "POST",
      }),
      invalidatesTags: ["Client"],
    }),
    ticketEscalationAlert: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}/ticket-escalation-alert`,
        method: "POST",
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
  useSearchClientQuery,
  useEmailNotificationMutation,
  usePlanUsageAlertMutation,
  usePerformanceReportsMutation,
  useTicketEscalationAlertMutation,
} = clientApiSlice;
