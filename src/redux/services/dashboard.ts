/** @format */

import { Dispatch } from "@reduxjs/toolkit";
import baseAPI from "../baseAPI";
import { toast } from "react-toastify";
import { dashboardLoad, dashboardSuccess } from "../slices/dashboard-slice";

export const getDashboardService =
  (payload: any) => async (dispatch: Dispatch) => {
    dispatch(dashboardLoad());
    await baseAPI
      .get(`/dashboard`)
      .then((response) => {
        dispatch(dashboardSuccess(response.data.result));
      })
      .catch((error) => {});
  };
