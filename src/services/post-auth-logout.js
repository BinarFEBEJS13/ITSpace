import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const postAuthLogout = async (input) => {
  return await http.post(API_ENDPOINT.LOGOUT, input);
};

const useAuthLogout = () => {
  return useMutation({
    mutationFn: postAuthLogout,
  });
};

export { postAuthLogout, useAuthLogout };
