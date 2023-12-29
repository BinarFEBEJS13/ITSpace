import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataTransactionsId = async ({ query }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.TRANSACTIONS}/${query}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataTransactionsId = (options) => {
  return useQuery({
    queryKey: ["dataDataTransactionsId", options],
    queryFn: () => getDataTransactionsId(options),
  });
};

export { getDataTransactionsId, useGetDataTransactionsId };
