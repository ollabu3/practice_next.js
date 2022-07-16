import { createSlice } from "@reduxjs/toolkit";

const uiState = { isToggled: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    toggle(state) {
      state.isToggled = !state.isToggled;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
