import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";

const editDataCourse = async (id ,input) => {
  console.log(input, "INPUTEEE IDDD");
  const { data } = await http.put(`${API_ENDPOINT.COURSES}/${id}`,input);
  return data;
};

const useEditCourse = () => {
  return useMutation({
    mutationFn: ({id,input}) => editDataCourse(id, input),
  });
};

export { editDataCourse, useEditCourse };
