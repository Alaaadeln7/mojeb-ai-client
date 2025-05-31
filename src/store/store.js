import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./api/authApiSlice";
import themeSlice from "./themeSlice";
import { clientApiSlice } from "./api/clientApiSlice";
import { plansApiSlice } from "./api/plansApiSlice";
import { chatbotApiSlice } from "./api/chatbotApiSlice";
const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [clientApiSlice.reducerPath]: clientApiSlice.reducer,
    [plansApiSlice.reducerPath]: plansApiSlice.reducer,
    [chatbotApiSlice.reducerPath]: chatbotApiSlice.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      clientApiSlice.middleware,
      plansApiSlice.middleware,
      chatbotApiSlice.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
