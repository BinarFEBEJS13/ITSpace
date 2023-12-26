import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"


const GetDataChaptersID = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(`${_key}/${_params.courseId}/chapters/${_params.chapterId}`);
    console.log(data, 'IDD');
    return data;
  };
  
  const useGetDataChaptersID = (options) => {
    return useQuery({
      queryKey : [API_ENDPOINT.COURSES, options],
      queryFn: GetDataChaptersID,
      
    });
  };

export{useGetDataChaptersID}