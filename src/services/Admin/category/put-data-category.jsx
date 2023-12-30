import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";


const editDataCategory = async ({ categoryId, ...input}) => {
  const { data } = await http.put(`${API_ENDPOINT.CATEGORIES}/${categoryId}`, input)
  return data
};

const useEditCourse = () => {
  return useMutation({
    mutationFn: editDataCategory,
  });
};

export { editDataCategory, useEditCourse };
