import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
// ini yang pake redux
export const reduxGetDataVideos = async (courseId, chaptersId, videosId) => {
  return await http.get(`${API_ENDPOINT.COURSES}/${courseId}/chapters/${chaptersId}/videos/${videosId}`);
};
