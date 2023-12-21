import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
// ini yang pake redux
export const reduxGetDataMyEnrollments = async () => {
  return await http.get(`${API_ENDPOINT.MY_ENROLLMENTS}?page=1&limit=100`);
};
