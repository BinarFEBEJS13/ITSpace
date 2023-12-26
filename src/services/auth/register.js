import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const Register = async (input) => {
    return await http.post(API_ENDPOINT.REGISTER, input)
}

const UseRegister = () => {
    return useMutation({
        mutationFn: Register
    });
}

export {Register, UseRegister}