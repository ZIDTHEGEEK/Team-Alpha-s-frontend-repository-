import { suiClient } from "../suiClient"
import { AuthService } from "./auth.service"
import { VITE_SUI_MAIL_PACKAGE_ID } from "../config"
import { Transaction } from "@mysten/sui/transactions"
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519"

export class MailService {
  authService = new AuthService()

  async sendMail(sendMailDto) {
    const { body, subject, recipient, aesKey } = sendMailDto

    const tx = new Transaction()

    tx.moveCall({
      target: `${VITE_SUI_MAIL_PACKAGE_ID}::sui_mail_dev::send_email`,
      arguments: [
        tx.pure.address(recipient),
        tx.pure.string(subject),
        tx.pure.string(body),
        tx.pure.string(aesKey),
      ],
    })

    const addressSecretKey = this.authService.addressSecretKey()

    return await suiClient
      .signAndExecuteTransaction({
        signer: Ed25519Keypair.fromSecretKey(addressSecretKey),
        transaction: tx,
        options: {
          showEffects: true,
        },
      })
      .then((txRes) => {
        const status = txRes.effects?.status?.status
        if (status !== "success") {
          throw new Error(`Could not send mail ${txRes.effects?.status?.error}`)
        }
        return txRes
      })
      .catch((err) => {
        throw new Error(`Error thrown: Could not send mail!: ${err}`)
      })
  }

  async deleteMail(email) {
    const tx = new Transaction()

    tx.moveCall({
      target: `${VITE_SUI_MAIL_PACKAGE_ID}::sui_mail_dev::delete_email`,
      arguments: [tx.object(email)],
    })

    const addressSecretKey = this.authService.addressSecretKey()

    return await suiClient
      .signAndExecuteTransaction({
        signer: Ed25519Keypair.fromSecretKey(addressSecretKey),
        transaction: tx,
        options: {
          showEffects: true,
        },
      })
      .then((txRes) => {
        const status = txRes.effects?.status?.status
        if (status !== "success") {
          throw new Error(
            `Could not delete mail ${txRes.effects?.status?.error}`
          )
        }
        return txRes
      })
      .catch((err) => {
        throw new Error(`Error thrown: Could not delete mail!: ${err}`)
      })
  }
}
