import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataFilterKursus = async ({ ispremium, category, level, se, order, page, limit }) => {
  const sanitizedCategory = category.map((cat) => cat.replace("/", "%2F"));
  const categoryParam = sanitizedCategory.join("%2C");
  const levelParam = level.join("%2C");
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}?ispremium=${ispremium}&category=${categoryParam}&level=${levelParam}&se=${se}&order=${order}&page=${page}&limit=${limit}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataFilterKursus = (options) => {
  return useQuery({
    queryKey: ["dataFilterKursus", options],
    queryFn: () => getDataFilterKursus(options),
  });
};

export { getDataFilterKursus, useGetDataFilterKursus };
