import { createSlice } from "@reduxjs/toolkit";
import { getWallet } from "./WalletActions";

const initialState = {
  getWalletLoading: false,
  wallet: {},
  error: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: {
    // get wallet
    [getWallet.pending]: (state) => {
      state.getWalletLoading = true;
    },
    [getWallet.fulfilled]: (state, { payload }) => {
      state.getWalletLoading = false;
      state.wallet = payload;
    },
    [getWallet.rejected]: (state, { payload }) => {
      state.getWalletLoading = false;
      state.error = payload;
    },
  },
});

export default walletSlice.reducer;
