import { createSlice } from "@reduxjs/toolkit"

const mailSlice = createSlice({
  name: "mailSlice",
  initialState: {
    activeMail: null,
  },
  reducers: {
    setActiveMail: (state, action) => {
      state.activeMail = action.payload
    },
  },
})

export const { setActiveMail } = mailSlice.actions
export default mailSlice.reducer
