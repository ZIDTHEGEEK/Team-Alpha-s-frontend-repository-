import { useEffect, useState } from "react"
import PropTypes from "prop-types"

const WalletConnectingContainer = ({ walletName }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3) // Cycle between 0, 1, and 2
    }, 500) // Change every 500ms

    return () => clearInterval(interval) // Clean up interval on component unmount
  }, [])

  return (
    <div>
      <div className="w-full flex items-center justify-center gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? "bg-[#2D2D2D]" : "bg-[#D9D9D9]"
            }`}
          ></div>
        ))}
      </div>

      <div className="mt-5 flex flex-col items-center justify-center gap-1">
        <p className="text-[#212121] text-center">Connecting Wallet</p>
        <p className="text-[#212121] text-center text-sm">
          Please connect {walletName} <br /> & approve transaction
        </p>
      </div>
    </div>
  )
}

WalletConnectingContainer.propTypes = {
  walletName: PropTypes.string,
}

export default WalletConnectingContainer
