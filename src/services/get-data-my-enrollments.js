import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const fetchDataMyEnrollments = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http
    .get(_key, { params: _params })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetMyEnrollments = (options) => {
  return useQuery({
    queryKey: [API_ENDPOINT.MY_ENROLLMENTS, options],
    queryFn: fetchDataMyEnrollments,
  });
};

export { fetchDataMyEnrollments, useGetMyEnrollments };
