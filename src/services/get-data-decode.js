import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
// ini yang pake redux
export const reduxGetDataDecode = async () => {
  return await http.get(API_ENDPOINT.DECODE);
};
