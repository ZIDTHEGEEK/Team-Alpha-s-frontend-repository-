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

              const decryptedPayload = await cipherService.decryptData(body, {
                aesKey,
                iv,
              })

              const emailPayload =
                cipherService.parseEmailPayload(decryptedPayload)

              return {
                id: id.id,
                subject: emailPayload.subject,
                message: emailPayload.body,
                is_read,
                starred,
                sender: {
                  walletAddress: sender,
                  email: emailPayload.recipient,
                },
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
