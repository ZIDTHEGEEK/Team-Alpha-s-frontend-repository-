import { useCallback, useMemo } from "react"
import { CipherService } from "../utils/encryption"

const useTransformEmails = () => {
  const cipherService = useMemo(() => new CipherService(), [])

  const transformEmails = useCallback(
    async (rawEmails) => {
      if (rawEmails.length === 0) return []

      try {
        const transformedEmails = await Promise.all(
          rawEmails
            .filter((mail) => {
              const { aesKey, iv, body } = mail.data.content.fields
              return aesKey && iv && body?.trim()
            })
            .map(async (mail) => {
              const {
                aesKey,
                iv,
                body,
                timestamp,
                is_read,
                starred,
                id,
                sender,
              } = mail.data.content.fields

              const decryptedAesKey =
                cipherService.decryptWithPrivateKey(aesKey)
              const decryptedIV = cipherService.decryptWithPrivateKey(iv)
              const decryptedPayload = await cipherService.decryptData(body, {
                key: decryptedAesKey,
                iv: decryptedIV,
              })

              const { subject, message } =
                cipherService.parseEmailPayload(decryptedPayload)

              return {
                id: id.id,
                subject: subject,
                message: message,
                is_read,
                starred,
                sender,
                timestamp,
              }
            })
        )
        return transformedEmails
      } catch (error) {
        throw new Error("Failed to transform emails:", error)
      }
    },
    [cipherService]
  )

  return { transformEmails }
}

export default useTransformEmails
