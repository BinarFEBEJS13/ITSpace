import { useMutation } from "@tanstack/react-query"
import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint"

const putNotif = async (id) => {
    console.log(id, "id notif")
  return await http.put(`${API_ENDPOINT.PUT_NOTIFICATIONS}/${id}`)
}

const usePutNotif = () => {
  return useMutation({
    mutationFn: putNotif
  })
}

export {putNotif, usePutNotif}