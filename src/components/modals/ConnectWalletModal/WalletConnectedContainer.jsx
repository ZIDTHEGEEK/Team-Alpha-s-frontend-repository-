import PropTypes from "prop-types"
import { formatWalletAddress } from "../../../utils"

const WalletConnectedContainer = ({
  walletName,
  icon,
  address,
  handleDisconnectWallet,
}) => {
  const handleCopyAddressToClipboard = () => {
    navigator.clipboard.writeText(address)
  }

  const handleViewOnExplorer = () => {
    window.open(
      `https://suiexplorer.com/address/${address}?network=mainnet`,
      "_blank"
    )
  }

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

        <div className="flex items-center gap-10">
          <button
            type="button"
            className="flex items-center gap-2"
            onClick={handleCopyAddressToClipboard}
          >
            <img
              src="/svg/copy-line-icon.svg"
              alt="Copy icon"
              className="w-[14px]"
            />
            <span className="text-sm text-[#616161]">Copy address</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2"
            onClick={handleViewOnExplorer}
          >
            <img
              src="/svg/view-on-explorer-icon.svg"
              alt="Copy icon"
              className="w-[14px]"
            />
            <span className="text-sm text-[#616161]">View on explorer</span>
          </button>
        </div>
      </div>

      <div className="mt-5 w-full flex items-center justify-between">
        <p className="text-xs">Connected with {walletName}</p>

        <button
          type="button"
          className="bg-[#F7F9FF] border border-[#4BA2FF] px-5 py-3 rounded-lg"
          onClick={handleDisconnectWallet}
        >
          Disconnect
        </button>
      </div>
    </div>
  )
}

WalletConnectedContainer.propTypes = {
  icon: PropTypes.string,
  address: PropTypes.string,
  walletName: PropTypes.string,
  handleDisconnectWallet: PropTypes.func.isRequired,
}

export default WalletConnectedContainer
