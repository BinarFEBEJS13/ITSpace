import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataChaptersId = async ({ query }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}/${query}/chapters/${query}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataChaptersId = (options) => {
  return useQuery({
    queryKey: ["dataChaptersId", options],
    queryFn: () => getDataChaptersId(options),
  });
};

export { getDataChaptersId, useGetDataChaptersId };
