import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const loginPopupSlice = createSlice({
  name: "alertPopupItems",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.value = !state.value;
    }
  }
});

export const { setActive } = loginPopupSlice.actions;

export default loginPopupSlice.reducer;
