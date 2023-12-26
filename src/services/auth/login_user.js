import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const LoginUser = async (input) => {
    return await http.post(API_ENDPOINT.LOGIN, input)
}

const UseLoginUser = () => {
    return useMutation({
        mutationFn: LoginUser
    });
}

export {LoginUser, UseLoginUser}
