import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatbotApiSlice = createApi({
  reducerPath: "chatbotApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
        : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    }chatbot`,
    credentials: "include",
  }),
  tagTypes: ["Chatbot"],
  endpoints: (builder) => ({
    getChatbot: builder.query({
      query: () => "/",
      providesTags: ["Chatbot"],
    }),
    updateChatbot: builder.mutation({
      query: ({ id, ...chatbotData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: chatbotData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Chatbot", id }],
    }),
    deleteChatbot: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chatbot"],
    }),
    trainChatbot: builder.mutation({
      query: (id) => ({
        url: `/${id}/train`,
        method: "POST",
      }),
    }),
    addInquiry: builder.mutation({
      query: ({ inquiry, chatbotId }) => ({
        url: `/${chatbotId}/create`,
        method: "POST",
        body: inquiry,
      }),
    }),
  }),
});

export const {
  useGetChatbotQuery,
  useUpdateChatbotMutation,
  useDeleteChatbotMutation,
  useTrainChatbotMutation,
  useAddInquiryMutation,
} = chatbotApiSlice;
