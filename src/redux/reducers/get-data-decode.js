import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  decode: [],
};

const getDataDecode = createSlice({
  name: "getDataDecode",
  initialState,
  reducers: {
    setDecode: (state, action) => {
      state.decode = action.payload;
    },
  },
});

export const { setDecode } = getDataDecode.actions;

export default getDataDecode.reducer;
