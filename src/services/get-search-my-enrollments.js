import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getSearchMyEnrollments = async ({ query }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.MY_ENROLLMENTS}?se=${query}&page=1&limit=100`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetSearchMyEnrollments = (options) => {
  return useQuery({
    queryKey: ["dataSearch", options],
    queryFn: () => getSearchMyEnrollments(options),
  });
};

export { getSearchMyEnrollments, useGetSearchMyEnrollments };
