import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import IndexPage from "./views/index"
import LoginPage from "./views/login"
import SignUpPage from "./views/signup"
import ProfilePage from "./views/profile"
import EmailList from "./views/Email-list"
import EmailState from "./views/state"
import AuthLayout from "./components/layout/AuthLayout"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<IndexPage />} />
        <Route path="email" element={<EmailList/>} />
        <Route path="active" element={<EmailState/>} />
        <Route path="profile" element={<ProfilePage/> }/>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="create-account" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
          
      </Route>

      {/* Not found screen */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )
}
