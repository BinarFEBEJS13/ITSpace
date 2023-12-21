import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const changePassword = async ({ token }) => {
  console.log(token);
  return await http.put(`${API_ENDPOINT.RESET_PASSWORD}/${token}`);
};

const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
  });
};

export { changePassword, useChangePassword };
