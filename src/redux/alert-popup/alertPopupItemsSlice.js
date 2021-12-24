import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const alertPopupItemsSlice = createSlice({
  name: "alertPopupItems",
  initialState,
  reducers: {
    addAlertItem: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeAlertItem: state => {
      state.value.shift();
      state.value = [...state.value];
    }
  }
});

export const { addAlertItem, removeAlertItem } = alertPopupItemsSlice.actions;

export default alertPopupItemsSlice.reducer;
