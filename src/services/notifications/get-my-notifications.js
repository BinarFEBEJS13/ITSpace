import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const getMyNotifications = async ({queryKey}) => {
    const [_key] = queryKey;
    const { data } = await http.get(_key);
    return data;
}

const useGetMyNotifications = (options) => {
    return useQuery({
        queryKey: [API_ENDPOINT.MY_NOTIFICATIONS, options],
        queryFn: getMyNotifications
    })
}

export {useGetMyNotifications}