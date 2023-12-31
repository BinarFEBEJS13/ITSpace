import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";


const postDataCourse = async (input) => {
  const { postData } = await http.post(API_ENDPOINT.COURSES, input, {
    headers : {
      "Content-Type" : "multipart/form-data"
    }
  })
  return postData;
};

const usePostDataQuery = ({ onSuccess }) => {
  return useMutation({
    mutationFn: postDataCourse,
    onSuccess,
  });
};

export { postDataCourse, usePostDataQuery };
