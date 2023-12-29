import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDecode = async () => {
  const { data } = await http
    .get(API_ENDPOINT.DECODE)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDecode = (options) => {
  return useQuery({
    queryKey: ["dataDecode", options],
    queryFn: () => getDecode(options),
  });
};

export { getDecode, useGetDecode };
