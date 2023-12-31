import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"


const updateChapter = async ({courseId, chapterId, ...input}) => {
    return await http.put(`${API_ENDPOINT.COURSES}/${courseId}/chapters/${chapterId}`,input)
}

const useUpdateChapter = () => {
    return useMutation({
        mutationFn : updateChapter
    })
}

export {useUpdateChapter,updateChapter}