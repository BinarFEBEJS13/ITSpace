import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const putDataTransactions = async (input) => {
  const { data } = await http
    .put(`${API_ENDPOINT.TRANSACTIONS}/${input}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const usePutTransactions = () => {
  return useMutation({
    mutationFn: putDataTransactions,
  });
};

export { putDataTransactions, usePutTransactions };
