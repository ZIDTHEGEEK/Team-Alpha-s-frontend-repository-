import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import IndexPage from "./views/index"
import LoginPage from "./views/login"
import SignUpPage from "./views/signup"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<IndexPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* Not found screen */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )
}
