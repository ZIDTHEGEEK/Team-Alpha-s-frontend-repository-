import { useState } from "react"
import PropTypes from "prop-types"
import {
  useWallets,
  useConnectWallet,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit"
import { IoCloseOutline } from "react-icons/io5"
import WalletsContainer from "./WalletsContainer"
import WalletConnectedContainer from "./WalletConnectedContainer"
import WalletConnectingContainer from "./WalletConnectingContainer"
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"

const ConnectWalletModal = ({ userIsLoggingIn }) => {
  const wallets = useWallets()
  const account = useCurrentAccount()
  const [isOpen, setIsOpen] = useState(false)
  const [walletName, setWalletName] = useState("")

  const { mutateAsync: connect, isPending } = useConnectWallet()
  const { mutateAsync: disconnect } = useDisconnectWallet()

  const handleConnectWallet = async (wallet) => {
    try {
      setWalletName(wallet.name)
      await connect({ wallet }, { onSuccess: () => console.log("Connected") })
    } catch (error) {
      console.error(error)
    }
  }

  const handleDisconnectWallet = async () => {
    try {
      await disconnect()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button
        type="button"
        disabled={userIsLoggingIn}
        onClick={() => setIsOpen(true)}
        className="w-full md:w-fit group relative py-5 px-10 rounded-md overflow-hidden transition-all duration-300 hover:shadow focus:outline-none"
      >
        <span className="relative underline group-hover:no-underline transition-colors duration-500 bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] bg-clip-text text-transparent group-hover:text-white font-medium z-10">
          Connect wallet
        </span>

        <span className="absolute inset-0 bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className={"relative z-10 focus:outline-none"}
        onClose={setIsOpen}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/80 duration-200">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-t-xl bg-white backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="w-full flex items-center justify-between py-3 px-6 border-b border-zinc-200">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-[#212121]"
                >
                  Connect wallet
                </DialogTitle>

                <button type="button" onClick={() => setIsOpen(false)}>
                  <IoCloseOutline size={22} className="text-[#717171]" />
                </button>
              </div>

              <div className="w-full py-6 px-6">
                {!isPending && wallets && !account && (
                  <WalletsContainer
                    wallets={wallets}
                    handleConnectWallet={handleConnectWallet}
                  />
                )}

                {isPending && (
                  <WalletConnectingContainer walletName={walletName} />
                )}

                {account && (
                  <WalletConnectedContainer
                    icon={account.icon}
                    walletName={walletName}
                    address={account.address}
                    handleDisconnectWallet={handleDisconnectWallet}
                  />
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

ConnectWalletModal.propTypes = {
  userIsLoggingIn: PropTypes.bool.isRequired,
}

export default ConnectWalletModal
