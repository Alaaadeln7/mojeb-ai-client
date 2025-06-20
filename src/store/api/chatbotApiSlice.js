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
      query: ({ chatbotId }) => `/${chatbotId}`,
      providesTags: ["Chatbot"],
    }),
    updateChatbot: builder.mutation({
      query: ({ id, ...chatbotData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: chatbotData,
      }),
      invalidatesTags: ["Chatbot"],
    }),
    deleteChatbot: builder.mutation({
      query: (data) => ({
        url: "/delete",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Chatbot"],
    }),
    addInquiry: builder.mutation({
      query: (inquiryData) => ({
        url: `/create`,
        method: "POST",
        body: inquiryData,
      }),
      invalidatesTags: ["Chatbot"],
    }),
    updateInquiry: builder.mutation({
      query: (inquiryData) => ({
        url: `/update`,
        method: "PUT",
        body: inquiryData,
      }),
      invalidatesTags: ["Chatbot"],
    }),
    deleteInquiry: builder.mutation({
      query: (data) => ({
        url: `/delete`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Chatbot"],
    }),
    speak: builder.mutation({
      query: (body) => ({
        url: "/speak",
        method: "POST",
        body,
        responseHandler: async (response) => {
          const blob = await response.blob();
          return blob;
        },
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
  useSpeakMutation,
  useUpdateInquiryMutation,
  useDeleteInquiryMutation,
} = chatbotApiSlice;
