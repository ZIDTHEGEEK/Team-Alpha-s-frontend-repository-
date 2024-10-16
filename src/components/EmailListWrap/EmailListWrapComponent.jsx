import PropTypes from "prop-types"
import EmailRow from "./EmailRow"
import { FiRefreshCcw } from "react-icons/fi"

const EmailListWrapComponent = ({
  mails,
  triggerRefetch,
  mailIsFetching,
  handleSetStarredCallback,
  handleRowClickedCallback,
}) => {
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

        <button className="text-black/60" onClick={triggerRefetch}>
          <FiRefreshCcw size={18} />
        </button>
      </div>

      {/* Email List Section */}
      <div className="mt-6 divide-y divide-gray-200 overflow-y-scroll flex-grow max-h-[720px] md:h-full">
        {mails.map((mail, index) => (
          <EmailRow
            key={index}
            mail={mail}
            handleRowClickedCallback={handleRowClickedCallback}
            handleSetStarredCallback={handleSetStarredCallback}
          />
        ))}

        {!mailIsFetching && mails.length === 0 && (
          <p className="mt-5 text-center text-base font-medium">
            You have no messages in your inbox
          </p>
        )}

        {mailIsFetching && (
          <p className="mt-5 text-center text-base font-medium">
            Email is loading...
          </p>
        )}
      </div>
    </div>
  )
}

EmailListWrapComponent.propTypes = {
  mails: PropTypes.array.isRequired,
  mailIsFetching: PropTypes.bool.isRequired,
  triggerRefetch: PropTypes.func.isRequired,
  handleSetStarredCallback: PropTypes.func.isRequired,
  handleRowClickedCallback: PropTypes.func.isRequired,
}

export default EmailListWrapComponent
