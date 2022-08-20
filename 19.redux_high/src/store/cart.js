import { createSlice } from "@reduxjs/toolkit";
import { sendCartData } from "./actions/cart";
/*
{
    title: newItem.title,
          id: newItem.id,
          total: newItem.price,
          quantity: 1,
          price: newItem.price,
}
*/
const cartState = { totalQuantity: 0, cartItems: [], changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const exisitedItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (exisitedItem) {
        exisitedItem.quantity++;
        exisitedItem.total = exisitedItem.total + exisitedItem.price;
      } else {
        state.cartItems.push({
          title: newItem.title,
          id: newItem.id,
          total: newItem.price,
          quantity: 1,
          price: newItem.price,
        });
      }
    },
    removeToCart(state, action) {
      console.log({ action });
      const newItem = action.payload;

      state.totalQuantity--;
      state.changed = true;
      const exisitedItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (exisitedItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== newItem.id
        );
      } else {
        exisitedItem.quantity--;
        exisitedItem.total = exisitedItem.total - exisitedItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
