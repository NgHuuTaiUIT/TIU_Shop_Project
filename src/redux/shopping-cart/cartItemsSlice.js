import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = { value: items };

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItems = action.payload;

      const duplicates = findItem(state, newItems);

      if (duplicates.length > 0) {
        state.value = delItem(state, newItems);

        state.value = [...state.value,{
            ...newItems,
                id:duplicates[0].id
        }]
      }
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
