import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getDataVideos = async ({ courseId, chaptersId, videoId }) => {
  const { data } = await http
    .get(`${API_ENDPOINT.COURSES}/${courseId}/chapters/${chaptersId}/videos/${videoId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetDataVideos = (options) => {
  return useQuery({
    queryKey: ["dataChaptersId", options],
    queryFn: () => getDataVideos(options),
  });
};

export { getDataVideos, useGetDataVideos };
