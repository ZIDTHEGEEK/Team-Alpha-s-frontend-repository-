import PropTypes from "prop-types"
import moment from "moment/moment"
import { useGetUserDetailsByEmailQuery } from "../../api/hooks/user"

const MailDetailView = ({ mail }) => {
  const {
    data: senderDetails,
    isFetching,
    error,
    refetch,
  } = useGetUserDetailsByEmailQuery(mail.sender.email)

  if (isFetching) {
    return (
      <div className="w-full p-6">
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full p-6">
        <p>Error occured</p>
        <button
          type="button"
          onClick={() => refetch()}
          className="py-2 px-6 rounded-sm"
        >
          Try again
        </button>
      </div>
    )
  }

  if (senderDetails.data) {
    const sender = senderDetails.data

    return (
      <div className="w-full h-full p-6 flex flex-col">
        {/* mail Subject */}
        <div className="w-full border-b pb-4 flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img
              src="/svg/face-avatar-icon.svg"
              alt="Face avatar"
              className="w-[45px] h-auto"
            />

            <div className="flex flex-col gap-1">
              <p className="text-base md:text-xl capitalize font-bold leading-none">
                {sender.fullname}
              </p>
              <p className="text-xs md:text-base font-normal leading-none">
                {sender.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex flex-row items-center justify-end gap-3.5">
              <img
                src={
                  mail.starred
                    ? "/svg/star-on-icon.svg"
                    : "/svg/star-off-icon.svg"
                }
                alt="Star mail"
                className="w-[14px] md:w-[17px] h-auto"
              />
              <img
                src={"/svg/trash-icon.svg"}
                alt="Trash mail"
                className="w-[14px] md:w-[17px] h-auto"
              />
            </div>

            <p className="hidden md:block text-xs">
              {moment(new Date(Number(mail.timestamp))).calendar()}
            </p>
          </div>
        </div>

        <div className="py-4 overflow-y-auto flex flex-col gap-6">
          <p className="break-words text-xl font-semibold">{mail.subject}</p>

          <p className="text-gray-700 text-sm">{mail.message}</p>
        </div>

        {/* Reply Section at the bottom */}
        <div className="mt-auto"></div>
      </div>
    )
  }
}

MailDetailView.propTypes = {
  mail: PropTypes.any.isRequired,
}

export default MailDetailView
