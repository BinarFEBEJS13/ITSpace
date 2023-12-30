import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataCheckEnrollment = async ({ query }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.AUTH_CHECK_ENROLLMENT}/${query}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataCheckEnrollment = (options) => {
  return useQuery({
    queryKey: ["dataCheckEnrollment", options],
    queryFn: () => getDataCheckEnrollment(options),
  });
};

export { getDataCheckEnrollment, useGetDataCheckEnrollment };
