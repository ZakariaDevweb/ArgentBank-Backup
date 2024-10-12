import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "./slice";

export default configureStore({
  reducer: {
    user: userProfileReducer,
  },
});
