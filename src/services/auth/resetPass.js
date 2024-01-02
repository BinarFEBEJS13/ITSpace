import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const resetPassword = async ({ token, ...newPassword }) => {
  return await http.put(`${API_ENDPOINT.RESET_PASSWORD}/${token}`, newPassword);
};

const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};

export { resetPassword, useResetPassword };
