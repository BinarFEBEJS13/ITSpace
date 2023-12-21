import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
};

const getDataVideos = createSlice({
  name: "getDataVideos",
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { setVideos } = getDataVideos.actions;

export default getDataVideos.reducer;
