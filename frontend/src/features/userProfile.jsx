import { createSlice } from "@reduxjs/toolkit";

const userProfile = createSlice({
  name: "user",
  initialState: {
    user: [],
    name: "",
    isLoggedIn: false,
  },
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setUserName, setLoginStatus } = userProfile.actions;

export default userProfile.reducer;
