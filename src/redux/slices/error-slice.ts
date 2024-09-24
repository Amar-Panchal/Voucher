/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDialog: false,
  message: "",
  title: "",
  singleButtonText: "",
  success: false,
  warning: false,
  failure: false,
  buttonText: "Ok",
  noButton: false,
};

export const errorSlice = createSlice({
  name: "error-slice",
  initialState: initialState,
  reducers: {
    showError(state, action) {
      state.openDialog = true;
      const {
        title,
        message,
        singleButtonText,
        success,
        warning,
        failure,
        buttonText,
        noButton,
      } = action.payload;
      state.message = message;
      state.title = title;
    },
    clearError(state) {
      state.openDialog = false;
      state.message = "";
      state.title = "";
      state.singleButtonText = "";
      state.success = false;
      state.warning = false;
      state.failure = false;
      state.buttonText = "Ok";
      state.noButton = false;
    },
  },
});

export const { showError, clearError } = errorSlice.actions;
