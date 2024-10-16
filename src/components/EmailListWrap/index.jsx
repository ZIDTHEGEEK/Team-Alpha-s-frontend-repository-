import { useCallback, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-hot-toast"
import { suiClient } from "../../suiClient"
import { useNavigate } from "react-router-dom"
import { VITE_SUI_MAIL_PACKAGE_ID } from "../../config"
import EmailListWrapComponent from "./EmailListWrapComponent"
import useTransformEmails from "../../hooks/useTransformEmails"
import { useDispatch } from "react-redux"
import { setActiveMail } from "../../redux/slices/mailSlice"

const EmailListWrap = ({ address }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [emailIsFetching, setEmailIsFetching] = useState(true)
  const [emails, setEmails] = useState([])
  const [refetch, setRefetch] = useState(false)
  const [error, setError] = useState(null)
  const { transformEmails } = useTransformEmails()

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
        setError(error)
        toast.error("Error fetching emails")
      } finally {
        setEmailIsFetching(false)
      }
    })()
  }, [handleGetOwnedObject, transformEmails, refetch])

  if (error) {
    return (
      <div className="w-full">
        <p>Error fetching your emails</p>
      </div>
    )
  }

  const findMail = (id) => {
    return emails.find((mail) => mail.id === id)
  }

  const handleGoToClickedMail = (id) => {
    const mail = findMail(id)
    if (!mail) return

    dispatch(setActiveMail(mail))
    navigate(`/app/inbox/${id}`)
  }

  const handleSetMailStarred = (id) => {
    return id
  }

  const triggerRefetch = () => setRefetch((prev) => !prev)

  return (
    <EmailListWrapComponent
      mails={emails}
      triggerRefetch={triggerRefetch}
      mailIsFetching={emailIsFetching}
      handleSetStarredCallback={(id) => handleSetMailStarred(id)}
      handleRowClickedCallback={(id) => handleGoToClickedMail(id)}
    />
  )
}

EmailListWrap.propTypes = {
  address: PropTypes.string.isRequired,
}

export default EmailListWrap
