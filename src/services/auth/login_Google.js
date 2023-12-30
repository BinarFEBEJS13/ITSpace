import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const LoginGoogle = async () => {
  return await http.get(API_ENDPOINT.GOOGLE);
}

const useLoginGoogle = () => {
  return useMutation({
      mutationFn: LoginGoogle
  });
}

export {LoginGoogle, useLoginGoogle};
