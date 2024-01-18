import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getCategories = async () => {
  const { data } = await http
    .get(API_ENDPOINT.CATEGORIES)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetCategories = (options) => {
  return useQuery({
    queryKey: ["dataCategories", options],
    queryFn: () => getCategories(options),
  });
};

export { getCategories, useGetCategories };
