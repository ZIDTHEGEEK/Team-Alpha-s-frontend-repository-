import EmailListWrap from "../../../components/EmailListWrap"
import { AuthService } from "../../../services/auth.service"

const DashboardPage = () => {
  const authService = new AuthService()

  return (
    <div className="w-full h-full">
      <EmailListWrap address={authService.walletAddress() ?? ""} />
    </div>
  )
}

export default DashboardPage
