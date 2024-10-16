import forge from "node-forge"
import { VITE_SUI_MAIL_PRIVATE_KEY, VITE_SUI_MAIL_PUBLIC_KEY } from "../config"

export class CipherService {
  #generateAesKeyAndIV() {
    const key = forge.random.getBytesSync(16)
    const iv = forge.random.getBytesSync(16)
    return { key, iv }
  }

  async encryptData(data) {
    const { key, iv } = this.#generateAesKeyAndIV()

    const cipher = forge.cipher.createCipher("AES-CBC", key)
    cipher.start({ iv })
    cipher.update(forge.util.createBuffer(data))
    cipher.finish()

    const encryptedAesKey = this.#encryptWithPublicKey(key)
    const encryptedIV = this.#encryptWithPublicKey(iv)

    return {
      encryptedData: cipher.output,
      secure: { aesKey: encryptedAesKey, iv: encryptedIV },
    }
  }

  async decryptData(encryptedData, secure) {
    const encryptedDataBuffer = this.#hexToByeStringBuffer(encryptedData)
    const decryptedAesKey = this.#decryptWithPrivateKey(secure.aesKey)
    const decryptedIV = this.#decryptWithPrivateKey(secure.iv)

    const decipher = forge.cipher.createDecipher("AES-CBC", decryptedAesKey)
    decipher.start({ iv: decryptedIV })
    decipher.update(encryptedDataBuffer)
    decipher.finish()
    return decipher.output.toString()
  }

  #hexToByeStringBuffer(hexString) {
    const encryptedDataBytes = forge.util.hexToBytes(hexString)
    return forge.util.createBuffer(encryptedDataBytes)
  }

  parseEmailPayload(decryptedData) {
    return JSON.parse(decryptedData)
  }

  #encryptWithPublicKey(data) {
    const publicKey = forge.pki.publicKeyFromPem(VITE_SUI_MAIL_PUBLIC_KEY)
    const encrypted = publicKey.encrypt(data, "RSA-OAEP", {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf.mgf1.create(forge.md.sha256.create()),
    })
    return forge.util.encode64(encrypted)
  }

  #decryptWithPrivateKey(data) {
    const privateKey = forge.pki.privateKeyFromPem(VITE_SUI_MAIL_PRIVATE_KEY)

    const encrypted = forge.util.decode64(data)

    const decrypted = privateKey.decrypt(encrypted, "RSA-OAEP", {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf.mgf1.create(forge.md.sha256.create()),
    })

    return decrypted
  }
}
