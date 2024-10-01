import { axiosInstance } from "./constants"

async function post(url, data) {
  return await axiosInstance.post(url, data)
}

async function get(url) {
  return await new axiosInstance.get(url)
}

async function put(url, data) {
  return await new axiosInstance.put(url, data)
}

async function deleteRequest(url) {
  return await new axiosInstance.delete(url)
}

export { post, get, put, deleteRequest }
