import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endPoint = process.env.REACT_APP_API_URL;

export const createClassifieds = createAsyncThunk(
  "createClassifieds",
  async (data, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("owner", data.owner);
      formData.append("country", data.country);
      formData.append("state", data.state);
      formData.append("city", data.city);
      formData.append("title", data.title);
      formData.append("description", data.description);
      for (let i = 0; i < data.photos.length; i++) {
        formData.append("photos", data.photos[i]);
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(`${endPoint}/classifieds/`, formData, config);
      return res;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserClassifieds = createAsyncThunk(
  "getUserClassifieds",
  async ({ user }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${endPoint}/classifieds/?owner=${user.id}`,
        config
      );
      return res;
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
