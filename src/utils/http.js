import axios from "axios";
// import { CookieKeys, CookieStorage } from "./cookies";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  withCredentials: true,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    // Authorization: `Bearer ${
    //   CookieStorage.get(CookieKeys.AuthToken)
    //     ? CookieStorage.get(CookieKeys.AuthToken)
    //     : ""
    // }`,
  };
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;
