import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import IndexPage from "./views/index"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<IndexPage />} />
      </Route>

      {/* Not found screen */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )
}
