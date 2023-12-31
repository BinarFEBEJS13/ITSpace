import { useQuery } from "@tanstack/react-query"
import http from "../../../utils/http"
import { API_ENDPOINT } from "../../../utils/api-endpoint"

const GetUser = async({queryKey}) => {
    const [_key, _params] = queryKey
    const {data} = await http.get(_key, {params : _params})
    return data
}

const useGetUsers = (options) => {
    return useQuery({
        queryKey : [API_ENDPOINT.USERS, options],
        queryFn : GetUser
    })
}

export {useGetUsers}