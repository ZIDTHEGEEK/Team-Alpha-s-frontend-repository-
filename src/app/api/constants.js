import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10 * 1000,
})

export const suiIntegrationPublicKey =
  "5XgZ9nF3urFtSM7u3dkf8t5ndsvdlcp0n4OPZaYvoW8="
