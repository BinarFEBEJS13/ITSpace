import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const ForgotPass = async ({ email }) => {
  return await http.get(`${API_ENDPOINT.RESET_PASSWORD}/${email}`);
};

const useForgotPass = () => {
  return useMutation({
    mutationFn: ForgotPass,
  });
};

export { ForgotPass, useForgotPass };
