import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endPoint = process.env.REACT_APP_API_URL;

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password1, password2, referral }, thunkApi) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${endPoint}/rest-auth/registration/`,
        { username, email, password1, password2, referral },
        config
      );
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(await error.json());
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkApi) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${endPoint}/rest-auth/login/`,
        { username, password },
        config
      );
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(await error.json());
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ old_password, new_password1, new_password2 }, thunkApi) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${endPoint}/rest-auth/password/change/`,
        { old_password, new_password1, new_password2 },
        config
      );
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(await error.json());
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async ({ empty }, { rejectWithValue }) => {
    try {
      const allThemes = localStorage.getItem("all-themes");
      localStorage.clear();
      localStorage.setItem("all-themes", allThemes);
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
