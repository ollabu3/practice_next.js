import { createSlice } from "@reduxjs/toolkit";

const cartState = { totalQuantity: 0, cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exisitedItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
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
      const exisitedItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (exisitedItem.quantity === 1) {
        console.log({ id: newItem.id });
        console.log(state.cartItems.filter((item) => item.id !== newItem.id));
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
