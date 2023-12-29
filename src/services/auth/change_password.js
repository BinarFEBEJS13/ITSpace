import http from '../../utils/http'
import { API_ENDPOINT } from '../../utils/api-endpoint'
import { useMutation } from '@tanstack/react-query'

const ChangePassword = async (input) => {
  return await http.put(API_ENDPOINT.CHANGE_PASSWORD, input)
}

const useChangePassword = () => {
  return useMutation({
    mutationFn: ChangePassword
  })
}

export {ChangePassword, useChangePassword}