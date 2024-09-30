import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: {
      reducer: (state, action) => {
        state.user = action.payload
      },
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
