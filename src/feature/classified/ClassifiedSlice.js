import { createSlice } from "@reduxjs/toolkit";
import { getUserClassifieds } from "./ClassifiedActions";

const initialState = {
  userClassifiedsLoading: false,
  userClassifieds: [],
  userClassifiedsError: null,
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
  },
});

export default userClassifiedsSlice.reducer;
