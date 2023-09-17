import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endPoint = process.env.REACT_APP_API_URL;

export const getAds = createAsyncThunk(
  "getAds",
  async ({ country, state, city }, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${endPoint}/classifieds/?country__name=${
          country ? country : ""
        }&state__name=${state ? state : ""}&city__name=${city ? city : ""}`,
        config
      );
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkApi.rejectWithValue(await error.json());
    }
  }
);
