import React from 'react'
import http from '../../utils/http'
import { API_ENDPOINT } from '../../utils/api-endpoint'

export const reduxLoginUser = async (input) => {
  return await http.post(API_ENDPOINT.LOGIN, input)
}
