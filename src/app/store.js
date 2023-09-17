import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "../pages/AdListings/AdListingsSlice";

export const store = configureStore({
  reducer: {
    adListings: adsReducer,
  },
});
