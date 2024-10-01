import { BigNumber } from "bignumber.js"
import { useSuiClientQuery } from "@mysten/dapp-kit"
import { MIST_PER_SUI } from "@mysten/sui/utils"

const DashboardPage = () => {
  return (
    <div>
      <div></div>
    </div>
  )
}

const SuiBalanceDiv = (zkUserAddress) => {
  const { data: addressBalance } = useSuiClientQuery(
    "getBalance",
    {
      owner: zkUserAddress,
    },
    {
      enabled: Boolean(zkUserAddress),
      refetchInterval: 1500,
    }
  )

  return (
    <div>
      <p>
        Balance:{" "}
        {BigNumber(addressBalance.totalBalance)
          .div(MIST_PER_SUI.toString())
          .toFixed(6)}{" "}
        SUI
      </p>
    </div>
  )
}

export default DashboardPage
