import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";
import { useToast } from "react-toastify";

const editDataCourse = async ({ id, input }) => {
  console.log(input, "INPUTEEE IDDD");
  const { data } = await http.put(`${API_ENDPOINT.COURSES}/${id}`, input, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((result) => {
    console.log(result, "result");
    return result
  }).catch((err) => {
    
    return err
  });
  return data;
};

const useEditCourse = () => {
  return useMutation({
    mutationFn: editDataCourse,
  });
};

export { editDataCourse, useEditCourse };
