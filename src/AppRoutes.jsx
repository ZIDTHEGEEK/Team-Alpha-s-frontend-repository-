import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import IndexPage from "./views/index"
import SignUp from "./views/signup"
import AuthLayout from "./components/layout/AuthLayout"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<IndexPage />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Route>

      {/* Not found screen */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )
}
