import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";

const authStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postSlice.reducer,
  },
});

export default authStore;
