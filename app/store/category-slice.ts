import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type categoryState = {
  items: string;
};

const initialState: categoryState = {
  items: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    categorySelector(state, action: PayloadAction<string>) {
      state.items = action.payload;
    },
  },
});

export const { categorySelector } = categorySlice.actions;
