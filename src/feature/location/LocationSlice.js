import { createSlice } from "@reduxjs/toolkit";
import { getCountries, getStates, getCities } from "./LocationActions";

const initialState = {
  getCountriesLoading: false,
  countries: [],
  getCountriesError: null,
  getStatesLoading: false,
  states: [],
  getStatesError: null,
  getCitiesLoading: false,
  cities: [],
  getCitiesError: null,
};

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.getCountriesLoading = true;
    },
    [getCountries.fulfilled]: (state, { payload }) => {
      state.getCountriesLoading = false;
      state.countries = payload;
    },
    [getCountries.rejected]: (state, { payload }) => {
      state.getCountriesLoading = false;
      state.getCountriesError = payload;
    },
    [getStates.pending]: (state) => {
      state.getStatesLoading = true;
    },
    [getStates.fulfilled]: (state, { payload }) => {
      state.getStatesLoading = false;
      state.states = payload;
    },
    [getStates.rejected]: (state, { payload }) => {
      state.getStatesLoading = false;
      state.getStatesError = payload;
    },
    [getCities.pending]: (state) => {
      state.getCitiesLoading = true;
    },
    [getCities.fulfilled]: (state, { payload }) => {
      state.getCitiesLoading = false;
      state.cities = payload;
    },
    [getCities.rejected]: (state, { payload }) => {
      state.getCitiesLoading = false;
      state.getCitiesError = payload;
    },
  },
});

export default locationSlice.reducer;
