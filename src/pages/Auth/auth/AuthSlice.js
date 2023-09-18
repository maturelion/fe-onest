// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, changePassword } from "./AuthActions";

const initialState = {
  registerLoading: false,
  loginLoading: false,
  changePasswordLoading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.registerLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.registerLoading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.registerLoading = false;
      state.error = payload;
    },
    // login user
    [loginUser.pending]: (state) => {
      state.loginLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loginLoading = false;
      state.userInfo = payload.data.user;
      state.userToken = payload.data.access_token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loginLoading = false;
      state.error = payload;
    },
    // change password
    [changePassword.pending]: (state) => {
      state.changePasswordLoading = true;
      state.error = null;
    },
    [changePassword.fulfilled]: (state, { payload }) => {
      state.changePasswordLoading = false;
    },
    [changePassword.rejected]: (state, { payload }) => {
      state.changePasswordLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
