import { SuiClient } from "@mysten/sui/client"
import { VITE_FULLNODE_URL } from "./config"

export const suiClient = new SuiClient({ url: VITE_FULLNODE_URL })
