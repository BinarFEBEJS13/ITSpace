import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const getDataCourses = createSlice({
  name: "getDataCourses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = getDataCourses.actions;

export default getDataCourses.reducer;
