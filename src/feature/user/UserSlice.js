// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getUser, getTotalDownline } from "./UserActions";

const initialState = {
  loading: false,
  user: {},
  error: null,
  tatal_downline: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // get user
    [getUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getTotalDownline.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getTotalDownline.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tatal_downline = payload;
    },
    [getTotalDownline.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
