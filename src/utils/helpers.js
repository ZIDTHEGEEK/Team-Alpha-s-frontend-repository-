import { jwtDecode } from "jwt-decode"
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519"
import { generateNonce, generateRandomness } from "@mysten/zklogin"

export const handleGenerateNonce = () => {
  const keypair = new Ed25519Keypair()
  const publicKey = keypair.getPublicKey()
  const maxEpoch = 10
  const randomness = generateRandomness()
  const nonce = generateNonce(publicKey, maxEpoch, randomness)
  return { publicKey: publicKey.toBase64(), nonce }
}

export const getAuthToken = () => {
  const token = window.localStorage.getItem("auth")
  if (token && token.length !== 0) {
    return token
  }
  return ""
}

export const decodeJwt = (token) => {
  return jwtDecode(token)
}

export const setAuthToken = (token) => {
  window.localStorage.setItem("auth", token)
}
