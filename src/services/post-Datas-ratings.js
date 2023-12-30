import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const postDataRatings = async (input) => {
  return await http.post(API_ENDPOINT.RATINGS, input);
};

const useDataRatings = () => {
  return useMutation({
    mutationFn: postDataRatings,
  });
};

export { postDataRatings, useDataRatings };
