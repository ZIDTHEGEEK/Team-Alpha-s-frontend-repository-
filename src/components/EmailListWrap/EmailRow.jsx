import moment from "moment/moment"
import PropTypes from "prop-types"
import { formatMessageText, formatWalletAddress } from "../../utils"

const EmailRow = ({
  mail,
  handleSetStarredCallback,
  handleRowClickedCallback,
}) => {
  return (
    <div className="w-full flex items-center justify-start py-4 px-2 gap-x-4 hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center gap-1 justify-evenly min-w-[10%] sm:min-w-[15%] md:min-w-[6%]">
        <div className="mt-[9px]">
          <input
            type="checkbox"
            name="select"
            id={`mail-item-${mail.id}`}
            className="custom-checkbox"
          />
        </div>

        <button
          type="button"
          className="w-fit"
          onClick={() => handleSetStarredCallback(mail.id)}
        >
          <img
            src={
              mail.starred ? "/svg/star-on-icon.svg" : "/svg/star-off-icon.svg"
            }
            alt="Mail Star"
            className="relative w-[18px] h-auto"
          />
        </button>
      </div>

      <div
        onClick={() => handleRowClickedCallback(mail.id)}
        className="w-[80%] sm:w-[90%] md:w-[82%] flex items-center justify-between gap-x-6"
      >
        <div className="w-[30%] md:w-[25%]">
          <p className="text-sm font-semibold break-words">
            <span className="hidden md:block">
              {formatWalletAddress(mail.sender.walletAddress)}
            </span>
            <span className="block md:hidden">{`${mail.sender.walletAddress.substring(0, 7)}...`}</span>
          </p>
        </div>

        {/* Email Details */}
        <div className="w-[70%] md:w-[75%] flex flex-col md:flex-row gap-x-4">
          <div className="w-full md:w-[30%]">
            <p className="text-sm font-semibold">
              {mail.subject.split(" ").slice(0, 2).join(" ")}
            </p>
          </div>
          <div className="hidden md:block w-[70%]">
            <p className="text-xs text-gray-600">
              {formatMessageText(mail.message)}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-[11%]">
        <p className="text-xs font-medium">
          {moment(new Date(Number(mail.timestamp))).format("MMM Do, h:mm")}
        </p>
      </div>
    </div>
  )
}

EmailRow.propTypes = {
  mail: PropTypes.any.isRequired,
  handleSetStarredCallback: PropTypes.func.isRequired,
  handleRowClickedCallback: PropTypes.func.isRequired,
}

export default EmailRow
