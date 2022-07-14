import { createSlice } from "@reduxjs/toolkit";

const counterState = { counter: 0, isVisible: true };

const counterSlice = createSlice({
  name: "counter", // 식별자가 꼭 필요함
  initialState: counterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    five(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const countActions = counterSlice.actions;

export default counterSlice.reducer;
