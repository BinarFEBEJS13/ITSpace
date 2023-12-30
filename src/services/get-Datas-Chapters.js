import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataChapters = async ({ query }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}/${query}/chapters`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataChapters = (options) => {
  return useQuery({
    queryKey: ["dataChaptersId", options],
    queryFn: () => getDataChapters(options),
  });
};

export { getDataChapters, useGetDataChapters };
