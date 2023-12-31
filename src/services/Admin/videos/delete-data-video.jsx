import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"


const deleteVideo = async ({courseId, chapterId, videoId}) => {
    const {data} =  await http.delete(`${API_ENDPOINT.COURSES}/${courseId}/chapters/${chapterId}/videos/${videoId}`).then((result) => {
        console.log(result, "ress");
       return result 
    }).catch((err) => {
        return err
    });
    return data
}

const useDeleteVideo = () => {
    return useMutation({
        mutationFn : deleteVideo
    })
}

export {useDeleteVideo}