import { Outlet, Route, Routes, useLocation, Navigate } from "react-router-dom"
import Layout from "./components/layout/Layout"
import IndexPage from "./views/index"
import LoginPage from "./views/auth/login"
import ProfilePage from "./views/profile"
import AuthLayout from "./components/layout/AuthLayout"
import CreateAccountPage from "./views/auth/createAccount"
import DashboardLayout from "./components/layout/DashboardLayout"
import InboxPage from "./views/app/inbox"
import InboxEmailDetailPage from "./views/app/inbox/[id]"
import ComingSoonPage from "./views/coming-soon"
import SetProfilePage from "./views/set-profile"

export default function AppRoutes() {
  const pathname = useLocation().pathname
  const plainLayoutRoutes = ["/app/set-profile"]
  const isPlainLayoutRoute = plainLayoutRoutes.includes(pathname)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<IndexPage />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="create-account" element={<CreateAccountPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route
          path="app"
          element={isPlainLayoutRoute ? <Outlet /> : <DashboardLayout />}
        >
          <Route path="" element={<Navigate to="inbox" replace />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="inbox/:id" element={<InboxEmailDetailPage />} />
          <Route path="set-profile" element={<SetProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="starred" element={<ComingSoonPage page={"Starred"} />} />
          <Route path="starred/:id" element={<ComingSoonPage />} />
          <Route path="snoozed" element={<ComingSoonPage page="Snoozed" />} />
          <Route path="snoozed/:id" element={<ComingSoonPage />} />
          <Route path="sent" element={<ComingSoonPage page="Sent" />} />
          <Route path="sent/:id" element={<ComingSoonPage />} />
          <Route path="drafts" element={<ComingSoonPage page="Drafts" />} />
          <Route path="drafts/:id" element={<ComingSoonPage />} />
          <Route path="spam" element={<ComingSoonPage page="Spam" />} />
          <Route path="spam/:id" element={<ComingSoonPage />} />
          <Route path="trash" element={<ComingSoonPage page="Trash" />} />
        </Route>
      </Route>

      {/* Not found screen */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )
}
