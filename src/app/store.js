import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "../pages/AdListings/AdListingsSlice";
import authReducer from "../pages/Auth/auth/AuthSlice";
import userReducer from "../feature/user/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    adListings: adsReducer,
  },
});
