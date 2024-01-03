import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"

const GetDataVideo = async ({ queryKey }) => {
  const [_key, _params] = queryKey
  const { data } = await http.get(`${_key}/${_params.courseId}/chapters/${_params.chapterId}/videos`);
  return data;
};

const GetDataVideoDirect = async ({queryKey}) => {
    const [_params] = queryKey;
    const { data } = await http.get(`${API_ENDPOINT.COURSES}/${_params.courseId}/chapters/${_params.chapterId}/videos`);
    return data;
  };

const useGetDataVideo = (options) => {
    return useQuery({
      queryKey: [API_ENDPOINT.COURSES, options],
      queryFn: GetDataVideo,
    });
  };
export{useGetDataVideo,GetDataVideoDirect}