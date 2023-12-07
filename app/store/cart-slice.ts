import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type CartItem = {
  id: string;
  title: string;
  price: number;
  quantitiy: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCard(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantitiy++;
      } else {
        state.items.push({ ...action.payload, quantitiy: 1 });
      }
    },
    removeFromCard(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[itemIndex].quantitiy === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantitiy--;
      }
    },
  },
});

export const { addToCard, removeFromCard } = cartSlice.actions;
