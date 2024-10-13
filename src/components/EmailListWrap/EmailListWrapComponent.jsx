import { FiRefreshCcw } from "react-icons/fi"
import { formatMessageText, formatWalletAddress } from "../../utils"
import PropTypes from "prop-types"
import moment from "moment/moment"

const EmailListWrapComponent = ({ mails, handleSetStarredCallback }) => {
  return (
    <div className="py-6 px-6 h-full">
      <div className="flex pl-4 items-center gap-3">
        <div className="mt-1.5">
          <input
            type="checkbox"
            name="select"
            id={`mail-item-select-all`}
            className="custom-checkbox"
          />
        </div>

        <button
          className="text-black/60"
          onClick={() => window.location.reload()}
        >
          <FiRefreshCcw size={18} />
        </button>
      </div>

      {/* Email List Section */}
      <div className="mt-6 divide-y divide-gray-200 overflow-y-scroll flex-grow max-h-[720px] md:h-full">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className="w-full flex items-center justify-start py-4 px-2 gap-x-4 hover:bg-gray-50 cursor-pointer"
          >
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
                onClick={handleSetStarredCallback}
              >
                <img
                  src={
                    mail.starred
                      ? "/svg/star-on-icon.svg"
                      : "/svg/star-off-icon.svg"
                  }
                  alt="Mail Star"
                  className="relative w-[18px] h-auto"
                />
              </button>
            </div>

            <div className="w-[80%] sm:w-[90%] md:w-[85%] flex items-center justify-between gap-x-6">
              <div className="w-[30%] md:w-[25%]">
                <p className="text-sm font-semibold break-words">
                  <span className="hidden md:block">
                    {formatWalletAddress(mail.sender)}
                  </span>
                  <span className="block md:hidden">{`${mail.sender.substring(0, 7)}...`}</span>
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

            <div className="hidden md:block w-[9%]">
              {/* <p>{moment(mail).format('LLL')}</p> */}
              <p className="text-xs font-medium">
                {moment(mail.date.$date).format("MMM Do, h:mm")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

EmailListWrapComponent.propTypes = {
  mails: PropTypes.array.isRequired,
  handleSetStarredCallback: PropTypes.func.isRequired,
}

export default EmailListWrapComponent
