import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";

const logoutAdmin = async () => {
  return await http.post(API_ENDPOINT.LOGOUT);
};

const useLogoutAdmin = () => {
  return useMutation({
    mutationFn: logoutAdmin,
  });
};

export { useLogoutAdmin };
