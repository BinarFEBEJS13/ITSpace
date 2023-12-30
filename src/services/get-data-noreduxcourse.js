import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataCourses = async () => {
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}?page=1&limit=100`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataCourses = (options) => {
  return useQuery({
    queryKey: ["dataCourses", options],
    queryFn: () => getDataCourses(options),
  });
};

export { getDataCourses, useGetDataCourses };
