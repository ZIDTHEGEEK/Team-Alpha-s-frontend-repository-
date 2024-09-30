import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slices/userSlice"

const store = configureStore({
  reducer: {
    userReduce: userReducer,
  },
})

export default store
