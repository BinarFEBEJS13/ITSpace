import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const postDataTransactions = async (input) => {
  return await http.post(API_ENDPOINT.TRANSACTIONS, input);
};

const useDataTransactions = () => {
  return useMutation({
    mutationFn: postDataTransactions,
  });
};

export { postDataTransactions, useDataTransactions };
