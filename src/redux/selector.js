import { createSelector } from "react-redux";

export const productSlugSelector = state => state.productModal.value;

export const cartItemsSelector = state => state.cartItems.value;

export const wishListItemsSelector = state => state.wishListItems.value;
