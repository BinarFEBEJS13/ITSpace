import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";

const fetchDataCourse = async ({queryKey}) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useGetCourse = (options) => {
  return useQuery({
    queryKey : [API_ENDPOINT.COURSES, options],
    queryFn: fetchDataCourse,
    
  });
};

export { fetchDataCourse, useGetCourse };
