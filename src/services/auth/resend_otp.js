import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const resendOtp = async (input) => {
    return await http.post(`${API_ENDPOINT.RESEND_OTP}/${input.email}`)
}

const UseResendOtp = () => {
    return useMutation({
        mutationFn: resendOtp
    });
}

export {resendOtp, UseResendOtp};