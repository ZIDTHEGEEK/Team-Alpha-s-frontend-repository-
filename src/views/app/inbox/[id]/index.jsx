import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import MailDetailView from "../../../../components/MailDetailView"

const InboxDetailPage = () => {
  const activeMail = useSelector((state) => state.mailReduce.activeMail)

  if (!activeMail) {
    return <Navigate to={"/app/inbox"} replace />
  }

  return <MailDetailView mail={activeMail} />
}

export default InboxDetailPage
