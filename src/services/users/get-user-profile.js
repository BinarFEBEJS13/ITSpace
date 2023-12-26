import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const GetUsersProfile = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http.get(_key);
  return data;
};

const GetUsersProfileCheck = async () => {
  const { data } = await http.get(API_ENDPOINT.USERS_PROFILE);
  return data;
};

const useGetUsersProfile = (options) => {
  return useQuery({
    queryKey: [API_ENDPOINT.USERS_PROFILE, options],
    queryFn: GetUsersProfile,
  });
};

export { GetUsersProfileCheck, useGetUsersProfile };
