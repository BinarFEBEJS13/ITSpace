// import { useMutation } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const verifyOtp = async (input) => {
  return await http.put(API_ENDPOINT.VERIFY_OTP, input);
}

const UseVerifyOtp = () => {
  return useMutation({
      mutationFn: verifyOtp
  });
}

export {verifyOtp, UseVerifyOtp}

// const verifyOtp = async (input) => {
//   try {
//   const response = await http.put(API_ENDPOINT.VERIFY_OTP, input);
//   if (response.data.success) {
//     return response.data;
//   } else {
//     throw new Error(response.data.message);
//   }
// } catch (error) {
//   throw new Error("Terjadi kesalahan");
//   }
// };

// // const UseVerifyOtp = () => {
// //   return useMutation({
// //     mutationFn: verifyOtp,
// //   });
// // };

// export { verifyOtp };
