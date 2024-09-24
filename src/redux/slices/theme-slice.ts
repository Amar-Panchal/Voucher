/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { IFont, ThemeMode } from "../../types/common";

const themeState: ThemeMode = {
  themeMode: "light",
};

const fontInit: IFont = {
  font: "",
  error: false,
  isFontLoading: false,
};

const themeSlice = createSlice({
  name: "theme-slice",
  initialState: themeState,
  reducers: {
    changeTheme: (state, action) => {
      state.themeMode = action.payload || "light";
    },
  },
});

const fontSlice = createSlice({
  name: "font-slice",
  initialState: fontInit,
  reducers: {
    fontLoad: (state) => {
      state.isFontLoading = true;
    },
    setFont: (state, action) => {
      state.font = action.payload;
      state.isFontLoading = false;
    },
  },
});

export { fontSlice };
export { themeSlice };
export const { changeTheme } = themeSlice.actions;
export const { fontLoad, setFont } = fontSlice.actions;
