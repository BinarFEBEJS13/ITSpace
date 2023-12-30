import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const postDataProgress = async (input) => {
  return await http.post(API_ENDPOINT.PROGRESS, input);
};

const useDataProgress = () => {
  return useMutation({
    mutationFn: postDataProgress,
  });
};

export { postDataProgress, useDataProgress };
