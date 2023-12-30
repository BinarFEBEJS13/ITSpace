import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"



const GetDataChapters = async ({queryKey}) => {

    const [_key, _params] = queryKey;
    const { data } = await http.get(`${_key}/${_params.courseId}/chapters`);
    return data;
  };
  
  const useGetDataChapters = (options) => {
    return useQuery({
      queryKey : [API_ENDPOINT.COURSES, options],
      queryFn: GetDataChapters,
      
    });
  };

export{useGetDataChapters}