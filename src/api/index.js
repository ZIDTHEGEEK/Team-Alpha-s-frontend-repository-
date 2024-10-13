import axios from "axios"
import { VITE_API_URL } from "../config"
import { AuthService } from "../services/auth.service"

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 10 * 1000,
})

async function post(url, data) {
  const authService = new AuthService()

  return await axiosInstance.post(url, data, {
    headers: {
      Authorization: `Bearer ${authService.getJwtToken()}`,
    },
  })
}

async function get(url) {
  const authService = new AuthService()

  return await new axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${authService.getJwtToken()}`,
    },
  })
}

async function put(url, data) {
  const authService = new AuthService()

  return await new axiosInstance.put(url, data, {
    headers: {
      Authorization: `Bearer ${authService.getJwtToken()}`,
    },
  })
}

async function deleteRequest(url) {
  return await new axiosInstance.delete(url)
}

export { post, get, put, deleteRequest }
