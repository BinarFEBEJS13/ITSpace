import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUsers: [],
};

const getUsersSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.dataUsers = action.payload;
    },
  },
});

export const { setDataUser } = getUsersSlice.actions;

export default getUsersSlice.reducer;
