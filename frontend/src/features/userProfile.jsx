import { createSlice } from "@reduxjs/toolkit";

const userProfile = createSlice({
  name: "user",
  initialState: {
    user: [],
    name: "",
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserName: (state, action) => {
      state.user.userName = action.payload;
    },
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setUserName, setLoginStatus } = userProfile.actions;

export default userProfile.reducer;
