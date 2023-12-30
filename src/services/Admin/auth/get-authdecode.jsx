import { useQuery } from "@tanstack/react-query"
import http from "../../../utils/http"
import { API_ENDPOINT } from "../../../utils/api-endpoint"

const GetAuthDecode = async({queryKey}) => {
    const [_key, _params] = queryKey
    const {data} = await http.get(_key, {params: _params})
    return data
}


const useGetDecode = (options) => {
    return useQuery({
        queryKey : [API_ENDPOINT.USERS, options],
        queryFn : GetAuthDecode
    })
}

export {useGetDecode}