import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalPrice: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //   when item is in cart
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempPrduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempPrduct);
      }

      const tempPrduct = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(tempPrduct);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
