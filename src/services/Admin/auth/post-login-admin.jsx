import { useMutation } from "@tanstack/react-query";
import http from "../../../utils/http";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

const adminLogin = async (input) => {
  return await http.post(API_ENDPOINT.LOGIN, input).then((result) => {
    console.log(result, "RESULTT");
    return result
  }).catch((err) => {
    return err
  });;
};

const useLoginAdmin = () => {
  return useMutation({
    mutationFn: adminLogin,
  });
};

export { adminLogin, useLoginAdmin };
