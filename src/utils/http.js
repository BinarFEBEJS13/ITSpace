import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  withCredentials: true,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

// http.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`,
//   };
//   return config;
// });
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
    // Do something with the successful response
    return response;
  },
  (error) => {
    // Handle 401 errors
    if (error.response.status === 401) {
      // Perform actions like redirecting to login page or displaying an error message
      window.location.href = "/admin/login";
    }
    // Return the error for further handling
    return Promise.reject(error);
  }
);

export default http;
