import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
// ini gak pake redux
const fetchGETDataCategories = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params }).then((result) => {
    return result;
  });
  return data;
};

const useGETDataCategories = (options) => {
  return useQuery({
    queryKey: [API_ENDPOINT.CATEGORIES, options],
    queryFn: fetchGETDataCategories,
  });
};

export { fetchGETDataCategories, useGETDataCategories };
