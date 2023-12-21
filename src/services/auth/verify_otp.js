import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const verifyOtp = async (input) => {
  try {
      const response = await http.put(API_ENDPOINT.VERIFY_OTP, input);
      console.log('Response from verifyOtp:', response);

      if (response && response.data && response.data.success) {
          return { success: true };
      } else {
          return { success: false, message: "Verifikasi gagal" };
      }
  } catch (error) {
      console.error("Error during verification:", error);
      throw error;
  }
};

const UseVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};

export { verifyOtp, UseVerifyOtp };
