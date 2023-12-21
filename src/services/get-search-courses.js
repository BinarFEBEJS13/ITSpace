import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getSearchCourses = async ({ query }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}?se=${query}&page=1&limit=100`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetSearchCourses = (options) => {
  return useQuery({
    queryKey: ["dataSearch", options],
    queryFn: () => getSearchCourses(options),
  });
};

export { getSearchCourses, useGetSearchCourses };
