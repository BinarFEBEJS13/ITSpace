import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const getMyTransactions = async ({queryKey}) => {
    const [_key] = queryKey;
    const { data } = await http.get(_key);
    return data;
}

const useGetMyTransactions = (options) => {
    return useQuery({
        queryKey: [API_ENDPOINT.MY_TRANSACTIONS, options],
        queryFn: getMyTransactions
    })
}

export {useGetMyTransactions}