import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";


const postDataCategory = async (input) => {
  const { postData } = await http.post(API_ENDPOINT.CATEGORIES, input)
  return postData;
};

const usePostCategory = () => {
  return useMutation({
    mutationFn: postDataCategory,
  });
};

export { postDataCategory, usePostCategory };
