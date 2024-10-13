import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slices/userSlice"
import appUIReducer from "../slices/appUISlice"

const store = configureStore({
  reducer: {
    userReduce: userReducer,
    appUIReduce: appUIReducer,
  },
})

export default store
