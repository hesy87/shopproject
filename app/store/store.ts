import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { categorySlice } from "./category-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    category: categorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
