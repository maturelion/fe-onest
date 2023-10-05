import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "../pages/AdListings/AdListingsSlice";
import authReducer from "../pages/Auth/auth/AuthSlice";
import locationReducer from "../feature/location/LocationSlice";
import userReducer from "../feature/user/UserSlice";
import userClassifiedsReducer from "../feature/classified/ClassifiedSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    userClassified: userClassifiedsReducer,
    adListings: adsReducer,
    location: locationReducer,
  },
});
