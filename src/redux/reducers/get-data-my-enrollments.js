import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myEnrollments: [],
};

const getDataMyEnrollments = createSlice({
  name: "getDataMyEnrollments",
  initialState,
  reducers: {
    setMyEnrollments: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setMyEnrollments } = getDataMyEnrollments.actions;

export default getDataMyEnrollments.reducer;
