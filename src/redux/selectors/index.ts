/** @format */

import { RootState } from "..";
export const loaderSelector = (state: RootState) => state.loaderReducer;
export const themeConfig = (state: RootState) => state.themeConfig;
export const fontConfig = (state: RootState) => state.fontConfig;

export const getDashboardSelector = (state: RootState) =>
  state.getDashboardReducer;
