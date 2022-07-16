import { createSlice } from "@reduxjs/toolkit";

const cartState = { price: 0, quantity: 0, totalQuantity: 0, items: [] };
console.log({ cartState });
const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (exisitingItem.quantity === 1) {
        state.items.state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.quantity--;
        // exisitingItem.totalPrice =
        //   exisitingItem.totalPrice - exisitingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
