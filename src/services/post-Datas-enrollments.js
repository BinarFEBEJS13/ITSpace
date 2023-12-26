import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const postDataEnrollments = async (input) => {
  return await http.post(API_ENDPOINT.ENROLLMENTS, input);
};

const useDataEnrollments = () => {
  return useMutation({
    mutationFn: postDataEnrollments,
  });
};

export { postDataEnrollments, useDataEnrollments };
