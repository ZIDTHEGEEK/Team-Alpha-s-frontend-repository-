import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import AppRoutes from "./AppRoutes.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
