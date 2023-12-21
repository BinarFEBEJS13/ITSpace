import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const ResetPass = async ({email}) => {
    console.log (email)
    return await http.get(`${API_ENDPOINT.RESET_PASSWORD}/${email}`)
  }

const UseResetPass = () => {
    return useMutation({
        mutationFn: ResetPass
    });
}

export {ResetPass, UseResetPass};