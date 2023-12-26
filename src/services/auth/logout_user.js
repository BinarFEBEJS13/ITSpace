import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const LogoutUser = async () => {
    return await http.post(API_ENDPOINT.LOGOUT)
}

const useLogoutUser = () => {
    return useMutation({
        mutationFn: LogoutUser
    })
}

export {useLogoutUser}