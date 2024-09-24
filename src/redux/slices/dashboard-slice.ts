/** @format */

import { createSlice } from "@reduxjs/toolkit";

const dashboardInit: any = {
  dashboardList: [],
  errorDashboard: false,
  isLoadingDashboard: false,
};

const getDashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardInit,
  reducers: {
    dashboardLoad: (state) => {
      state.isLoadingDashboard = true;
    },
    dashboardSuccess: (state, action) => {
      state.dashboardList = action.payload;
      state.isLoadingDashboard = false;
    },
    dashboardFailed: (state, action) => {
      state.errorDashboard = action.payload;
      state.isLoadingDashboard = false;
    },
  },
});
export const { dashboardLoad, dashboardSuccess, dashboardFailed } =
  getDashboardSlice.actions;

export { getDashboardSlice };
