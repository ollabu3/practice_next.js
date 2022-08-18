import { createSlice } from "@reduxjs/toolkit";

const uiState = { isToggled: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    toggle(state) {
      state.isToggled = !state.isToggled;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = { status: status, title: title, message: message };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
