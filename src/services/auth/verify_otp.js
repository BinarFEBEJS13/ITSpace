import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const verifyOtp = async (input) => {
    return await http.put(API_ENDPOINT.VERIFY_OTP, input)
}

const UseVerifyOtp = () => {
    return useMutation({
        mutationFn: verifyOtp
    });
}

export {verifyOtp, UseVerifyOtp}