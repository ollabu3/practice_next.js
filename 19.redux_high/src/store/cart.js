import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

/*
{
    title: newItem.title,
          id: newItem.id,
          total: newItem.price,
          quantity: 1,
          price: newItem.price,
}
*/
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pendging",
        title: "Pendging...",
        message: "Send cart data Pendging!!!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://next-df601-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Send cart data succrssfully!!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!...",
          message: "Send cart data failed!!!!",
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
