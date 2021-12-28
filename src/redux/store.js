import { configureStore } from "@reduxjs/toolkit";
import alertPopupItemsSlice from "./alert-popup/alertPopupItemsSlice";

import productModalSlice from "./product-modal/productModalSlice";
import cartItemsSlice from "./shopping-cart/cartItemsSlice";
import wishlistItemsSlice from "./wish-list/wishlistItemsSlice";
import loginPopupSlice from "./login-popup/loginPopupSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlice,
    wishListItems: wishlistItemsSlice,
    alertPopupItems: alertPopupItemsSlice,
    loginPopup: loginPopupSlice
  }
});
