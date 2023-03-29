import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (!selectedProduct) {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      } else {
        selectedProduct.quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
