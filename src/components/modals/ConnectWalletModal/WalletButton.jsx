import PropTypes from "prop-types"

const WalletButton = ({ wallet, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-1"
    >
      <img
        src={wallet.icon}
        alt={`${wallet.name}-${wallet.version}`}
        className="w-[40px]"
      />
      <span>{wallet.name}</span>
    </button>
  )
}

WalletButton.propTypes = {
  wallet: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default WalletButton
