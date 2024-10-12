import { createSlice } from "@reduxjs/toolkit";

const userProfile = createSlice({
  name: "user",
  initialState: {
    user: [],
    name: "",
    bIsLogin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setName: (state, action) => {
      state.user.userName = action.payload;
    },
    setLogin: (state, action) => {
      state.bIsLogin = action.payload;
    },
  },
});

export const { setUser, setName, setLogin } = userProfile.actions;

export default userProfile.reducer;
