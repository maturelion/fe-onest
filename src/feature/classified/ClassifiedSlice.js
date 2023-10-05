import { createSlice } from "@reduxjs/toolkit";
import { getUserClassifieds, createClassifieds } from "./ClassifiedActions";

const initialState = {
  userClassifiedsLoading: false,
  userClassifieds: [],
  userClassifiedsError: null,
  createClassifiedsLoading: false,
  createClassifiedsError: null,
};

const userClassifiedsSlice = createSlice({
  name: "classifieds",
  initialState,
  reducers: {},
  extraReducers: {
    // get user classifieds
    [getUserClassifieds.pending]: (state) => {
      state.userClassifiedsLoading = true;
      state.userClassifiedsError = null;
    },
    [getUserClassifieds.fulfilled]: (state, { payload }) => {
      state.userClassifiedsLoading = false;
      state.userClassifieds = payload.data;
    },
    [getUserClassifieds.rejected]: (state, { payload }) => {
      state.userClassifiedsLoading = false;
      state.userClassifiedsError = payload;
    },
    [createClassifieds.pending]: (state) => {
      state.createClassifiedsLoading = true;
    },
    [createClassifieds.fulfilled]: (state, { payload }) => {
      state.createClassifiedsLoading = false;
    },
    [createClassifieds.rejected]: (state, { payload }) => {
      state.createClassifiedsLoading = false;
      state.createClassifiedsError = payload.error;
    },
  },
});

export default userClassifiedsSlice.reducer;
