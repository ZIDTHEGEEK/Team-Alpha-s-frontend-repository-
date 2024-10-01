import PropTypes from "prop-types"
import WalletButton from "./WalletButton"

const WalletsContainer = ({ wallets, handleConnectWallet }) => {
  return (
    <div className="w-full flex items-center justify-start">
      {wallets.map((wallet) => (
        <WalletButton
          key={wallet.name}
          wallet={wallet}
          onClick={() => handleConnectWallet(wallet)}
        />
      ))}
    </div>
  )
}

WalletsContainer.propTypes = {
  wallets: PropTypes.array.isRequired,
  handleConnectWallet: PropTypes.func.isRequired,
}

export default WalletsContainer
