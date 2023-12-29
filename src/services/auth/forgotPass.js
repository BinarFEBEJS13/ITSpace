// import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const ForgotPass = async ({ email }) => {
  try {
    console.log(email);
    const response = await http.get(`${API_ENDPOINT.RESET_PASSWORD}/${email}`);
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw new Error("Terjadi kesalahan");
  }
};

export { ForgotPass };
