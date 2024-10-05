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
        className="w-[40px]"
        alt={`${wallet.name}-${wallet.version}`}
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
