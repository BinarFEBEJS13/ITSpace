import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"


const EditVideos = async ({courseId, chapterId, videoId, ...input}) => {
    return await http.put(`${API_ENDPOINT.COURSES}/${courseId}/chapters/${chapterId}/videos/${videoId}`,input)
}

const useEditVideo = () => {
    return useMutation({
        mutationFn : EditVideos
    })
}

export {useEditVideo, EditVideos}