import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesId: [],
};

const getDataCoursesId = createSlice({
  name: "getDataCoursesId",
  initialState,
  reducers: {
    setCoursesId: (state, action) => {
      state.coursesId = action.payload;
    },
  },
});

export const { setCoursesId } = getDataCoursesId.actions;

export default getDataCoursesId.reducer;
