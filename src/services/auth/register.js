import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const Registrasi = async (input) => {
    return await http.post(API_ENDPOINT.REGISTER, input)
}

const UseRegister = () => {
    return useMutation({
        mutationFn: Registrasi
    });
}

export {Registrasi, UseRegister}