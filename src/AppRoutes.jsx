import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import IndexPage from "./views/index"
import LoginPage from "./views/auth/login"
import EmailList from "./views/Email-list"
import AuthLayout from "./components/layout/AuthLayout"
import CreateAccountPage from "./views/auth/createAccount"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<IndexPage />} />
        <Route path="email" element={<EmailList />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="create-account" element={<CreateAccountPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>

      {/* Not found screen */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )
}
