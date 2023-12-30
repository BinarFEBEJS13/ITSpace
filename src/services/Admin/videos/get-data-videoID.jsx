import { useQuery } from "@tanstack/react-query"
import http from "../../../utils/http"
import { API_ENDPOINT } from "../../../utils/api-endpoint"


const dataVideoId = async ({queryKey}) => {
    const [_key, _params] = queryKey
    return await http.get(`${_key}/${_params.courseId}/chapters/${_params.chapterId}/videos/${_params.videoId}`)
}

const useGetDataVideoId = (options) =>{
    return useQuery({
        queryKey : [API_ENDPOINT.COURSES, options],
        queryFn : dataVideoId
    })
}

export {useGetDataVideoId}