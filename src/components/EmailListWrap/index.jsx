import { useCallback, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-hot-toast"
import { suiClient } from "../../suiClient"
import { VITE_SUI_MAIL_PACKAGE_ID } from "../../config"
import EmailListWrapComponent from "./EmailListWrapComponent"
import useTransformEmails from "../../hooks/useTransformEmails"

const EmailListWrap = ({ address }) => {
  const [emails, setEmails] = useState([])
  const { transformEmails } = useTransformEmails()
  const [error, setError] = useState(null)

  const handleGetOwnedObject = useCallback(async () => {
    const data = await suiClient.getOwnedObjects({
      owner: address,
      filter: {
        MatchAll: [
          {
            StructType: `${VITE_SUI_MAIL_PACKAGE_ID}::sui_mail_dev::Inbox`,
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
    ;(async () => {
      try {
        const result = await handleGetOwnedObject()
        const responsiveEmails = await transformEmails(result.data)
        setEmails(responsiveEmails)
      } catch (error) {
        setError(error);
        toast.error("Error fetching emails")
      }
    })()
  }, [handleGetOwnedObject, transformEmails])

  if (error) {
    return (
      <div className="w-full">
        <p>Error fetching your emails</p>
      </div>
    )
  }

  return (
    <EmailListWrapComponent
      mails={emails}
      handleSetStarredCallback={() => {}}
    />
  )
}

EmailListWrap.propTypes = {
  address: PropTypes.string.isRequired,
}

export default EmailListWrap
