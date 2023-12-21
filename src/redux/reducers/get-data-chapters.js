import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapters: [],
};

const getDataChapters = createSlice({
  name: "getDataChapters",
  initialState,
  reducers: {
    setChapters: (state, action) => {
      state.chapters = action.payload;
    },
  },
});

export const { setChapters } = getDataChapters.actions;

export default getDataChapters.reducer;
