import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const getDataUser = async ({ query }) => {
  const { data } = await http.get(`${API_ENDPOINT.USERS_ID}/${query}`).then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataUser = (options) => {
  return useQuery({
    queryKey: ["getDataUser", options],
    queryFn: () => getDataUser(options),
  });
};

export { getDataUser, useGetDataUser };