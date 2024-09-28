import { useEffect, useState } from "react"
import "./Modal.css" // Importing a CSS file for styles
import { FaTimes } from "react-icons/fa"
import { FaRegCopy } from "react-icons/fa6"
import { CgNotes } from "react-icons/cg"
import sui from "./images/sui.svg"
import coinbase from "./images/coinbase.png"
import metamask from "./images/Wallet.png"
import Walletconnect from "./images/walletConnect.png"
import Walletimg from "./images/walletConnect.png"

const ConnectWalletModal = ({ setOnClick }) => {
  const [status, setStatus] = useState("clicked")
  const [address] = useState("0xgeeg63gwg72191dt4gr45hgg5gh4hy456ye76")

  const handleProcess = () => {
    setStatus("processing")

    // Simulate processing by changing the status after a timeout
    setTimeout(() => {
      setStatus("processed")
    }, 2000)
  }

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3) // Cycle between 0, 1, and 2
    }, 500) // Change every 500ms

    return () => clearInterval(interval) // Clean up interval on component unmount
  }, [])
  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="modal-heading">
          <h2>Connect Wallet</h2>
          <FaTimes onClick={() => setOnClick(false)} />
        </div>
        <div className="modal-body">
          {status === "clicked" && (
            <div className="wallets">
              <div className="wallet" onClick={handleProcess}>
                <div className="img">
                  <img src={sui} alt="wallet" />
                </div>
                <p>Sui</p>
              </div>
              <div className="wallet" onClick={handleProcess}>
                <div className="img">
                  <img src={metamask} alt="wallet" />
                </div>
                <p>Meta mask</p>
              </div>
              <div className="wallet" onClick={handleProcess}>
                <div className="img">
                  <img src={coinbase} alt="wallet" />
                </div>
                <p>Coin Base</p>
              </div>
              <div className="wallet" onClick={handleProcess}>
                <div className="img">
                  <img src={Walletconnect} alt="wallet" />
                </div>
                <p>Walletconnect</p>
              </div>
            </div>
          )}

          {status === "processing" && (
            <div className="loading">
              <div className="loading-dot">
                <div
                  className={`dot ${activeIndex === 0 ? "active" : ""}`}
                ></div>
                <div
                  className={`dot ${activeIndex === 1 ? "active" : ""}`}
                ></div>
                <div
                  className={`dot ${activeIndex === 2 ? "active" : ""}`}
                ></div>
              </div>
              <div className="loading-body">
                <h2>Connecting Wallet</h2>
                <p>Please connect metamask & approve transaction </p>
              </div>
            </div>
          )}
        </div>

        {status === "processed" && (
          <div className="connected">
            <div className="connected-body">
              <div className="address">
                <img src={Walletimg} alt="" className="wallet-img" />
                <p>
                  {address.substring(0, 10)}.....
                  {address.substring(address.length - 5)}
                </p>
              </div>
              <div className="view-token">
                <div className="copy">
                  <FaRegCopy color="gray" />
                  <p>Copy Address</p>
                </div>
                <div className="copy">
                  <CgNotes color="gray" />
                  <p>View On Explorer</p>
                </div>
              </div>
            </div>
            <div className="connected-footer">
              <p>Connected with Meta mask</p>
              <button
                className="disconnected"
                onClick={() => setStatus("clicked")}
              >
                Disconnect
              </button>
            </div>
          </div>
        )}
        {status === "failed" && (
          <div className="failed">
            <h2>Wallet connection failed</h2>
            <p onClick={() => setStatus("clicked")}>retry</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConnectWalletModal
