
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxGetUsers = async (id) => {
    console.log(id, "ini id")
    return await http.get(`${API_ENDPOINT.USERS_ID}/${id}`)
}