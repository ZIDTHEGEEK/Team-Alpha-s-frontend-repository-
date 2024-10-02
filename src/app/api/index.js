import { getAuthToken } from "../../utils/helpers"
import { axiosInstance } from "./constants"

async function post(url, data) {
  const token = getAuthToken()
  return await axiosInstance.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

async function get(url) {
  const token = getAuthToken()
  return await new axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

async function put(url, data) {
  const token = getAuthToken()
  return await new axiosInstance.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

async function deleteRequest(url) {
  return await new axiosInstance.delete(url)
}

export { post, get, put, deleteRequest }
