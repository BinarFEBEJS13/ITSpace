import { useQuery } from "@tanstack/react-query"
import http from "../../../utils/http"
import { API_ENDPOINT } from "../../../utils/api-endpoint"


const GetDataPembayaran  = async({queryKey}) => {
    const [_key, _params] = queryKey
    const { data } = await http.get(_key, {params : _params})
    return data
}

const useGetPembayaran = (options) => {
    return useQuery({
        queryKey : [API_ENDPOINT.TRANSACTION, options],
        queryFn : GetDataPembayaran
    })
}

export {useGetPembayaran}