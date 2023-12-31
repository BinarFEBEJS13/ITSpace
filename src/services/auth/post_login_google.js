import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const postLoginGoogle = async (input) => {
  return await http.post(API_ENDPOINT.GOOGLE, input);
};

const usePostLoginGoogle = () => {
  return useMutation({
    mutationFn: postLoginGoogle,
  });
};

export { postLoginGoogle, usePostLoginGoogle };
