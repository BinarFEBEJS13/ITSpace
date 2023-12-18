import { useQuery } from "@tanstack/react-query"
import http from "../../../utils/http"
import { API_ENDPOINT } from "../../../utils/api-endpoint"

const GetUserss = async({queryKey}) => {
    const [_key, _params] = queryKey
    const {data} = await http.get(`${_key}/${ _params.id}`)
    return data
}

const useGetUsersID = (options) => {
    return useQuery({
        queryKey : [API_ENDPOINT.USERS, options],
        queryFn : GetUserss
    })
}

export {useGetUsersID ,GetUserss}