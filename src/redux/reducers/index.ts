/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import { loaderSlice } from "../slices/loader-slice";
import { fontSlice, themeSlice } from "../slices/theme-slice";
import { errorSlice } from "../slices/error-slice";
import { getDashboardSlice } from "../slices/dashboard-slice";

export const rootReducer = combineReducers({
  loaderReducer: loaderSlice.reducer,
  themeConfig: themeSlice.reducer,
  fontConfig: fontSlice.reducer,
  errorReducer: errorSlice.reducer,

  getDashboardReducer: getDashboardSlice.reducer,
});
