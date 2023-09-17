import { createSlice } from "@reduxjs/toolkit";
import { getAds } from "./AdListingsActions";

const initialState = {
  ads: [],
  isLoadingAds: false,
  getAdsError: null,
};

const AdsSlice = createSlice({
  name: "AdsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getAds.fulfilled]: (state, { payload }) => {
      state.isLoadingAds = false;
      state.ads = payload.data;
    },
    [getAds.pending]: (state, { payload }) => {
      state.isLoadingAds = true;
    },
    [getAds.rejected]: (state, { payload }) => {
      state.isLoadingAds = false;
      state.getAdsError = payload;
    },
  },
});

export default AdsSlice.reducer;
