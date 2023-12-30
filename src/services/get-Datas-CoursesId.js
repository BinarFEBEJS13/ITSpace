import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataCoursesId = async ({ query }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}/${query}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataCoursesId = (options) => {
  return useQuery({
    queryKey: ["dataCoursesId", options],
    queryFn: () => getDataCoursesId(options),
  });
};

export { getDataCoursesId, useGetDataCoursesId };
