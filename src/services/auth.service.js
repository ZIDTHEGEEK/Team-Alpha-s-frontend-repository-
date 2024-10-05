import {
  generateNonce,
  genAddressSeed,
  generateRandomness,
  getZkLoginSignature,
  getExtendedEphemeralPublicKey,
} from "@mysten/zklogin"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { VITE_PROVER_URL } from "../config"
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519"

export class AuthService {
  #getAddressSeed() {
    const jwt = this.#decodeJwt()
    const salt = this.#salt()
    return genAddressSeed(
      BigInt(salt),
      "sub",
      jwt.sub,
      jwt.aud.toString()
    ).toString()
  }

  async getEd25519Keypair() {
    const jwtData = await this.#getJwtData()
    const publicKey = new Uint8Array(
      Object.values(jwtData.ephemeralKeyPair.keypair.publicKey)
    )
    const secretKey = new Uint8Array(
      Object.values(jwtData.ephemeralKeyPair.keypair.secretKey)
    )
    return new Ed25519Keypair({ publicKey, secretKey })
  }

  async getPartialZkLoginSignature() {
    const keypair = await this.getEd25519Keypair()
    const extendedEphemeralPublicKey = getExtendedEphemeralPublicKey(
      keypair.getPublicKey()
    )
    const verificationPayload = {
      jwt: this.getJwtToken(),
      extendedEphemeralPublicKey,
      maxEpoch: this.#getMaxEpoch(),
      jwtRandomness: this.#getRandomness(),
      salt: this.#salt(),
      keyClaimName: "sub",
    }
    return await this.#verifyPartialZkLoginSignature(verificationPayload)
  }

  async #verifyPartialZkLoginSignature(zkpRequestPayload) {
    try {
      const proofResponse = await axios.post(
        VITE_PROVER_URL,
        zkpRequestPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const partialZkLoginSignature = proofResponse.data
      return partialZkLoginSignature
    } catch (error) {
      console.log("failed to reqeust the partial sig: ", error)
      return {}
    }
  }

  async generateZkLoginSignature(userSignature) {
    const partialZkLoginSignature = await this.getPartialZkLoginSignature()
    const addressSeed = this.#getAddressSeed()
    const maxEpoch = await this.#getMaxEpoch()

    return getZkLoginSignature({
      inputs: {
        ...partialZkLoginSignature,
        addressSeed,
      },
      maxEpoch,
      userSignature,
    })
  }

  async #getMaxEpoch() {
    return this.#getJwtData().maxEpoch
  }

  async #getRandomness() {
    return this.#getJwtData().randomness
  }

  walletAddress() {
    return this.#decodeJwt()["walletAddress"]
  }

  #decodeJwt() {
    const jwt = localStorage.getItem("sui_mail_jwt_token")
    return jwtDecode(jwt)
  }

  #salt() {
    const email = this.#claims()["email"]
    console.log("Salt", email)
    return this.#hashcode(email)
  }

  #claims() {
    const token = this.#getJwtData()
    if (token) return JSON.parse(atob(token.split(".")[1]))
  }

  #hashcode(s) {
    const l = s.length
    let h = 0,
      i = 0
    if (l > 0) while (i < l) h = ((h << 5) - h + s.charCodeAt(i++)) | 0
    return h.toString()
  }

  #getJwtData() {
    return JSON.parse(localStorage.getItem("sui_mail_jwt_data"))
  }

  #handleSetJwtDataOnLogin() {
    const maxEpoch = 10
    const ephemeralKeyPair = new Ed25519Keypair()
    const randomness = generateRandomness()
    const nonce = generateNonce(
      ephemeralKeyPair.getPublicKey(),
      maxEpoch,
      randomness
    )
    const jwtData = {
      maxEpoch,
      nonce,
      randomness,
      ephemeralKeyPair,
    }

    window.localStorage.setItem("sui_mail_jwt_data", JSON.stringify(jwtData))
  }

  getJwtToken() {
    return window.localStorage.getItem("sui_mail_jwt_token") ?? ""
  }

  setJwtToken(token) {
    this.#handleSetJwtDataOnLogin()
    return window.localStorage.setItem("sui_mail_jwt_token", token)
  }

  generateNonce() {
    const keypair = new Ed25519Keypair()
    const publicKey = keypair.getPublicKey()
    const maxEpoch = 10
    const randomness = generateRandomness()
    const nonce = generateNonce(publicKey, maxEpoch, randomness)
    return nonce
  }
}
