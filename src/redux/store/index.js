import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slices/userSlice"
import appUIReducer from "../slices/appUISlice"
import mailReducer from "../slices/mailSlice"

const store = configureStore({
  reducer: {
    userReduce: userReducer,
    appUIReduce: appUIReducer,
    mailReduce: mailReducer,
  },
})

export default store
