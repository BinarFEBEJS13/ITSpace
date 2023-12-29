import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataMyEnrollments = async ({ category, level, se, order, page, limit }) => {
  const sanitizedCategory = category.map((cat) => cat.replace("/", "%2F"));
  const categoryParam = sanitizedCategory.join("%2C");
  const levelParam = level.join("%2C");
  const { data } = await http
    .get(`${API_ENDPOINT.MY_ENROLLMENTS}?category=${categoryParam}&level=${levelParam}&se=${se}&order=${order}&page=${page}&limit=${limit}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataMyEnrollments = (options) => {
  return useQuery({
    queryKey: ["dataData", options],
    queryFn: () => getDataMyEnrollments(options),
  });
};

export { getDataMyEnrollments, useGetDataMyEnrollments };
