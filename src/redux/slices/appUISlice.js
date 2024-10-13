import { createSlice } from "@reduxjs/toolkit"

const appUISlice = createSlice({
  name: "appUISlice",
  initialState: {
    composeEmailFormDisplayState: false,
  },
  reducers: {
    setComposeEmailFormDisplayState: (state, action) => {
      state.composeEmailFormDisplayState = action.payload
    },
  },
})

export const { setComposeEmailFormDisplayState } = appUISlice.actions
export default appUISlice.reducer
