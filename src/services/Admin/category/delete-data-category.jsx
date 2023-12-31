import { useMutation } from "@tanstack/react-query";
import http from "../../../utils/http";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

const deleteDataCategory = async ({categoryId}) => {
  const { data } = await http.delete(`${API_ENDPOINT.CATEGORIES}/${categoryId}`);
  return data;
};

const useDeleteCategory = ({ onSuccess }) => {
  return useMutation({
    mutationFn: deleteDataCategory,
    onSuccess,
  });
};

export { deleteDataCategory, useDeleteCategory };
