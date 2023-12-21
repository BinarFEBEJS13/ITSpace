import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const LoginUser = async (input) => {
  try {
    const response = await http.post(API_ENDPOINT.LOGIN, input);

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw new Error("Terjadi kesalahan dalam melakukan login.");
  }
};

export { LoginUser };
