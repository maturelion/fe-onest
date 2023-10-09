import { createSlice } from "@reduxjs/toolkit";
import { createDeposit, getDeposit, getUserDeposits } from "./DepositActions";

const initialState = {
  depositLoading: false,
  getDepositLoading: false,
  getUserDepositsLoading: false,
  deposit: {},
  deposits: [],
  depositError: null,
  getDepositError: null,
  getUserDepositsError: null,
};

const depositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {},
  extraReducers: {
    [createDeposit.pending]: (state) => {
      state.depositLoading = true;
      state.depositError = null;
    },
    [createDeposit.fulfilled]: (state, { payload }) => {
      state.depositLoading = false;
      state.deposit = payload.data;
    },
    [createDeposit.rejected]: (state, { payload }) => {
      state.depositLoading = false;
      state.depositError = payload;
    },
    [getDeposit.pending]: (state) => {
      state.getDepositLoading = true;
    },
    [getDeposit.fulfilled]: (state, { payload }) => {
      state.getDepositLoading = false;
      state.deposit = payload;
    },
    [getDeposit.rejected]: (state, { payload }) => {
      state.getDepositLoading = false;
      state.getDepositError = payload;
    },
    [getUserDeposits.pending]: (state) => {
      state.getUserDepositsLoading = true;
    },
    [getUserDeposits.fulfilled]: (state, { payload }) => {
      state.getUserDepositsLoading = false;
      state.deposits = payload;
    },
    [getUserDeposits.rejected]: (state, { payload }) => {
      state.getUserDepositsLoading = false;
      state.getUserDepositsError = payload;
    },
  },
});

export default depositSlice.reducer;
