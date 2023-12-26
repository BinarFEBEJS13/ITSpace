import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"

const postDataChapter = async ({courseId , ...input }) => {
    return await http.post(`${API_ENDPOINT.COURSES}/${courseId}/chapters`, input)
}

const usePostDataChapters = () => {
    return useMutation({
        mutationFn: postDataChapter,
    
    })
}

export {usePostDataChapters}