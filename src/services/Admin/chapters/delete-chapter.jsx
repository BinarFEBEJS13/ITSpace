import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../../utils/api-endpoint"
import http from "../../../utils/http"


const deleteChapter = async ({courseId, chapterId}) => {
    console.log(chapterId, "ID CHAPTER");
    console.log(courseId, "courseId");
    return await http.delete(`${API_ENDPOINT.COURSES}/${courseId}/chapters/${chapterId}`)
}

const useDeleteChapter = () => {
    return useMutation({
        mutationFn : deleteChapter
    })
}

export {useDeleteChapter}