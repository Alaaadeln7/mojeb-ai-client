import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // Default theme can be "light" or "dark"
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
