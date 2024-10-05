import { suiClient } from "../suiClient"
import { AuthService } from "./auth.service"
import { VITE_SUI_MAIL_PACKAGE_ID } from "../config"
import { Transaction } from "@mysten/sui/transactions"

export class MailService {
  authService = new AuthService()

  async sendMail(sendMailDto) {
    const { body, recipient } = sendMailDto
    const walletAddress = this.authService.walletAddress()

    const coins = await suiClient.getCoins({
      owner: walletAddress,
    })

    const validCoin = coins.data.find((coin) => coin.balance >= 100000000)
    if (!validCoin) {
      throw new Error("No valid coins with enough balance for gas payment.")
    }

    const tx = new Transaction()

    // const [coin] = tx.splitCoins(validCoin.coinObjectId, [100])
    // tx.transferObjects([coin], walletAddress)

    tx.moveCall({
      target: `${VITE_SUI_MAIL_PACKAGE_ID}::sui_mail::send_mail`,
      arguments: [tx.pure.string(recipient), tx.pure.string(body)],
    })
    console.log(validCoin)
    tx.setGasPayment([validCoin.coinObjectId])
    tx.setGasBudget(100000000)
    const keypair = await this.authService.getEd25519Keypair()

    return await suiClient
      .signAndExecuteTransaction({
        signer: keypair,
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
}
