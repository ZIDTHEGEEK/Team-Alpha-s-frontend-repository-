import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import {
  SuiClientProvider,
  createNetworkConfig,
  WalletProvider,
} from "@mysten/dapp-kit"
import { Provider } from "react-redux"
import AppRoutes from "./AppRoutes.jsx"
import store from "./app/store/index.js"
import { Toaster } from "react-hot-toast"
import { getFullnodeUrl } from "@mysten/sui/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 0,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
        <WalletProvider>
          <BrowserRouter>
            <Provider store={store}>
              <Routes>
                <Route path="/*" element={<AppRoutes />} />
              </Routes>
              <Toaster />
            </Provider>
          </BrowserRouter>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </StrictMode>
)
