import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
// ini yang pake redux
export const reduxGetDataCourses = async () => {
  return await http.get(`${API_ENDPOINT.COURSES}?page=1&limit=100`);
};
