import { useMutation } from "@tanstack/react-query";
import http from "../../../utils/http";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

const deleteDataCourse = async (id) => {
  const { data } = await http.delete(`${API_ENDPOINT.COURSES}/${id}`);
  return data;
};

const useDeleteCourse = ({ onSuccess }) => {
  return useMutation({
    mutationFn: deleteDataCourse,
    onSuccess,
  });
};

export { deleteDataCourse, useDeleteCourse };
