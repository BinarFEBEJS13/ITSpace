import { useQuery } from "@tanstack/react-query"
import http from "../../../utils/http"
import { API_ENDPOINT } from "../../../utils/api-endpoint"

const GetUserDecode = async({queryKey}) => {
    const [_key ] = queryKey
    const {data} = await http.get(_key)
    return data
}

const useGetUserDecode = (options) => {
    return useQuery({
        queryKey : [API_ENDPOINT.AUTH_DECODE, options],
        queryFn : GetUserDecode
    })
}

export {useGetUserDecode}