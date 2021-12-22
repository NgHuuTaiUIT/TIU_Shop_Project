import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const items =
  localStorage.getItem("wishListItems") !== null
    ? JSON.parse(localStorage.getItem("wishListItems"))
    : [];

const initialState = { value: items };

export const wishListItemsSlice = createSlice({
  name: "wishListItems",
  initialState,
  reducers: {
    addWishListItem: (state, action) => {
      const newItems = action.payload;

      const duplicate = findItem(state.value, newItems);
      console.log(duplicate);
      if (duplicate.length <= 0) {
        state.value = [...state.value, { ...newItems, id: uuidv4() }];
        localStorage.setItem("wishListItems", JSON.stringify(state.value));
      }
    },
    removeWishListItem: (state, action) => {
      const item = action.payload;
      state.value = delItem(state.value, item);

      localStorage.setItem("wishListItems", JSON.stringify(state.value));
    }
  }
});

const findItem = (arr, item) => arr.filter(e => e.slug === item.slug);

const delItem = (arr, item) => arr.filter(e => e.slug !== item.slug);

export const { addWishListItem, removeWishListItem } =
  wishListItemsSlice.actions;

export default wishListItemsSlice.reducer;
