import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const items =
  localStorage.getItem("cardItems") !== null
    ? JSON.parse(localStorage.getItem("cardItems"))
    : [];

const initialState = { value: items };

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItems = action.payload;

      const duplicate = findItem(state.value, newItems);

      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItems);

        state.value = [
          ...state.value,
          {
            ...newItems,
            id: duplicate[0].id,
            quantity: newItems.quantity + duplicate[0].quantity
          }
        ];
      } else {
        state.value = [...state.value, { ...newItems, id: uuidv4() }];
      }

      localStorage.setItem("cardItems", JSON.stringify(state.value));
    },
    updateItem: (state, action) => {
      const itemUpdate = action.payload;

      const item = findItem(state.value, itemUpdate);
      const index = state.value.findIndex(e => e.id === item[0].id);
      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value.splice(index, 0, itemUpdate);
        localStorage.setItem("cardItems", JSON.stringify(state.value));
      }
    },
    removeItem: (state, action) => {
      console.log(state.value);
      const item = action.payload;
      state.value = delItem(state.value, item);

      localStorage.setItem("cardItems", JSON.stringify(state.value));
    }
  }
});

const findItem = (arr, item) =>
  arr.filter(
    e => e.slug === item.slug && e.color === item.color && e.size === item.size
  );

const delItem = (arr, item) =>
  arr.filter(
    e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size
  );

export const { addItem, updateItem, removeItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
