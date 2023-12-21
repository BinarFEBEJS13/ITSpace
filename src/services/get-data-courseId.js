import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
// ini yang pake redux
export const reduxGetDataCoursesId = async (courseId) => {
  return await http.get(`${API_ENDPOINT.COURSES}/${courseId}`);
};
