import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

const PutDataUser = async (id, input) => {
    return await http.put(`${API_ENDPOINT.PUT_USER}/${id}`, input)
}

const usePutDataUser = () => {
    return useMutation({
        mutationFn: (input) => PutDataUser(input.id, input.data), // Modify this line
    });
};

export {PutDataUser, usePutDataUser}