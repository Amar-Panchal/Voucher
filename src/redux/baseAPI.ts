/** @format */

import axios from "axios";
import { onError, onLoad, onSuccess } from "./slices/loader-slice";
import store from "./index";
import { showError } from "./slices/error-slice";
import { getUser, setUser } from "../utils/storage";
import { toast } from "react-toastify";

// const handleRefresh = async () => {
//   const user = await getUser();
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`auth/refresh-token`, {
//         headers: { Authorization: `Bearer ${user?.refresh_token}` },
//       })
//       .then(async (response) => {
//         setUser(response.data);
//         resolve(response.data?.access_token);
//       })
//       .catch((error) => {});
//   });
// };

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

baseAPI.interceptors.request.use(
  async (config) => {
    const token_id: any = sessionStorage.getItem("token_id");
    const activeIDToken: any = JSON.parse(token_id);
    const noLoader = store.getState().loaderReducer.noLoader;
    // const isTokenRequired = store.getState().loaderReducer.isTokenRequired;

    !noLoader && store.dispatch(onLoad());
    const user = await getUser();
    config.headers.Authorization = "Bearer " + activeIDToken?.idToken;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
baseAPI.interceptors.response.use(
  (response) => {
    store.dispatch(onSuccess());
    if (!response?.data?.isSuccess) {
      const message = response?.data?.message;
      toast.error(message);

      // store.dispatch(
      //   showError({
      //     title: 'Success',
      //     message,
      //     success: true,

      //     singleButtonText: 'Ok',
      //     onPressTryAgain: {},
      //   })
      // );
    }

    return response;
  },
  async function (error) {
    store.dispatch(onError());
    const originalRequest = error.config;
    const message = error.response?.data?.message || error.statusText;
    // To handle refresh token
    if (error.response?.status === 401 && !originalRequest._retry && !message) {
      originalRequest._retry = true;
      //   const accessToken = await handleRefresh();
      // axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
      //  return baseAPI(originalRequest);
    } else {
      //   // To show alert
      // store.dispatch(
      //   showError({
      //     title: "Error",
      //     message,
      //     failure: true,
      //     singleButtonText: "Ok",
      //     onPressTryAgain: () => baseAPI(originalRequest),
      //   })
      // );
      toast.error(message);
    }
    return Promise.reject(error);
  }
);

export default baseAPI;
