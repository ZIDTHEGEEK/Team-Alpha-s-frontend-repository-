import forge from "node-forge"
import { VITE_SUI_MAIL_PRIVATE_KEY, VITE_SUI_MAIL_PUBLIC_KEY } from "../config"

export async function encryptData(data, key) {
  const cipher = forge.cipher.createCipher("AES-CBC", key)
  cipher.start({ iv: forge.random.getBytesSync(16) })
  cipher.update(forge.util.createBuffer(data))
  cipher.finish()
  return cipher.output.toHex()
}

export async function decryptData(encryptedData, key) {
  const decipher = forge.cipher.createDecipher("AES-CBC", key)
  decipher.start({ iv: forge.random.getBytesSync(16) })
  decipher.update(forge.util.createBuffer(forge.util.hexToBytes(encryptedData)))
  decipher.finish()
  return decipher.output.toString()
}

export function encryptAESKeyWithPublicKey(aesKey) {
  const publicKey = forge.pki.publicKeyFromPem(VITE_SUI_MAIL_PUBLIC_KEY)

  const encryptedAesKey = publicKey.encrypt(aesKey, "RSA-OAEP", {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf.mgf1.create(forge.md.sha256.create()),
  })

  return forge.util.encode64(encryptedAesKey)
}

export function decryptAESKeyWithPrivateKey(encryptedAesKeyBase64) {
  const privateKey = forge.pki.privateKeyFromPem(VITE_SUI_MAIL_PRIVATE_KEY)

  const encryptedAesKey = forge.util.decode64(encryptedAesKeyBase64)

  const decryptedAesKey = privateKey.decrypt(encryptedAesKey, "RSA-OAEP", {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf.mgf1.create(forge.md.sha256.create()),
  })

  return decryptedAesKey
}
