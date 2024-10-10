import { useCallback, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-hot-toast"
import { suiClient } from "../../suiClient"
import { FiRefreshCcw } from "react-icons/fi"
// import { useNavigate } from "react-router-dom"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { VITE_SUI_MAIL_PACKAGE_ID } from "../../config"
import { useNavigate } from "react-router-dom"

const EmailListWrap = ({ address }) => {
  const navigate = useNavigate()
  const [emails, setEmails] = useState([])

  const handleGetOwnedObject = useCallback(async () => {
    const data = await suiClient.getOwnedObjects({
      owner: address,
      filter: {
        MatchAll: [
          {
            StructType: `${VITE_SUI_MAIL_PACKAGE_ID}::sui_mail_dev::Email`,
          },
        ],
      },
      options: {
        showContent: true,
        showOwner: true,
      },
    })
    return data
  }, [address])

  useEffect(() => {
    handleGetOwnedObject()
      .then((result) => {
        if (result.data.length > 0) {
          const mappedEmails = result.data
            .filter((mail) => {
              const fields = mail.data.content.fields
              return (
                fields.aesKey &&
                fields.body &&
                fields.body.trim() !== "" &&
                fields.sender &&
                fields.sender.trim() !== "" &&
                fields.id?.id &&
                fields.id.id.trim() !== "" &&
                fields.is_read !== null &&
                fields.timestamp !== "63"
              )
            })
            .map((mail) => {
              return {
                id: mail.data.content.fields?.id.id,
                body: mail.data.content.fields.body,
                sender: mail.data.content.fields.sender,
                is_read: mail.data.content.fields.is_read,
                main: mail,
                subject: mail.data.content.fields.subject,
              }
            })
          setEmails(mappedEmails)
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error("Error fetching emails")
      })
  }, [handleGetOwnedObject])

  // const [selectedEmails, setSelectedEmails] = useState([])
  // const [selectAll, setSelectAll] = useState(false)

  // Toggle selection for individual email
  // const toggleSelectEmail = (id) => {
  //   if (selectedEmails.includes(id)) {
  //     setSelectedEmails(selectedEmails.filter((emailId) => emailId !== id))
  //   } else {
  //     setSelectedEmails([...selectedEmails, id])
  //   }
  // }

  // Toggle select all emails
  // const toggleSelectAll = () => {
  //   if (selectAll) {
  //     setSelectedEmails([])
  //   } else {
  //     setSelectedEmails(emails.map((email) => email.id))
  //   }
  //   setSelectAll(!selectAll)
  // }

  // Toggle starred status
  // const toggleStarred = (id) => {
  //   setEmails(
  //     emails.map((email) =>
  //       email.id === id ? { ...email, starred: !email.starred } : email
  //     )
  //   )
  // }

  // Shorten message preview
  // const getMessagePreview = (message) => {
  //   if (message.length > 50) {
  //     return message.substring(0, 50) + "..." // Limit message preview to 50 characters
  //   }
  //   return message
  // }

  // const goToSelectedEmail = (emailId) => {
  //   navigate(`/app/inbox/${emailId}`)
  // }

  const goToSelectedEmail = (emailId) => {
    navigate(`/app/inbox/${emailId}`)
  }

  return (
    <div className="p-6">
      {/* Select All and Reload Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={false}
            // onChange={toggleSelectAll}
            className="cursor-pointer"
          />
          <button
            onClick={() => window.location.reload()}
            className="text-gray-600"
          >
            <FiRefreshCcw size={24} />
          </button>
        </div>
      </div>

      {/* Email List Section */}
      <div className="divide-y divide-gray-200 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => goToSelectedEmail(email.main)}
            className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              {/* Select Box */}
              {/* <input
                type="checkbox"
                checked={selectedEmails.includes(email.id)}
                onChange={() => toggleSelectEmail(email.id)}
                className="cursor-pointer"
              /> */}

              {/* Starred Icon */}
              <div
                // onClick={() => toggleStarred(email.id)}
                className="cursor-pointer"
              >
                {email ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaStarHalfAlt className="text-gray-400" />
                )}
              </div>

              {/* Email Details */}
              <div className="flex flex-col">
                <span className="font-semibold">{email.subject}</span>
                <span className="text-sm text-gray-600">{email.body}</span>
                {/* Message Preview */}
                <span className="text-sm text-gray-500">
                  {/* {getMessagePreview(email.message)} */}
                </span>
              </div>
            </div>

            {/* Date at the End */}
            <div className="text-sm text-gray-600">{""}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

EmailListWrap.propTypes = {
  address: PropTypes.string.isRequired,
}

export default EmailListWrap
