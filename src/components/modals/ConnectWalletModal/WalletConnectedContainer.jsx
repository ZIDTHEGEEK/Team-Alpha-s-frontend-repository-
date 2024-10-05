import PropTypes from "prop-types"
import { formatWalletAddress } from "../../../utils"

const WalletConnectedContainer = ({ icon, address, walletName }) => {
  // const handleCopyAddressToClipboard = () => {
  //   navigator.clipboard.writeText(address)
  // }

  // const handleViewOnExplorer = () => {
  //   window.open(
  //     `https://suiexplorer.com/address/${address}?network=mainnet`,
  //     "_blank"
  //   )
  // }

  return (
    <div className="min-w-[75%] w-fit mx-auto">
      <div className="w-full border border-black/5 p-4 flex flex-col rounded-lg gap-4">
        <div className="flex items-center justify-start gap-2">
          <img
            src={icon ?? "/svg/user-wallet-icon.svg"}
            alt={walletName}
            className="w-[40px]"
          />
          <p>{formatWalletAddress(address)}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-emerald-500 font-medium">
            Wallet connected successfully
          </p>
          <span className="text-xs text-[#9A9A9A]">
            redirecting to dashboard...
          </span>
        </div>
      </div>

      <div className="mt-5 w-full flex items-center justify-between"></div>
    </div>
  )
}

WalletConnectedContainer.propTypes = {
  icon: PropTypes.string,
  address: PropTypes.string,
  walletName: PropTypes.string,
}

export default WalletConnectedContainer
