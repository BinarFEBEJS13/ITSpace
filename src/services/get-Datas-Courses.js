import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataKursus = async ({ category, order, page, limit }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}?category=${category}&order=${order}&page=${page}&limit=${limit}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataKursus = (options) => {
  return useQuery({
    queryKey: ["dataKursus", options],
    queryFn: () => getDataKursus(options),
  });
};

export { getDataKursus, useGetDataKursus };
