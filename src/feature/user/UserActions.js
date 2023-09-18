import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import slugify from '../../utils/slugify'

const endPoint = process.env.REACT_APP_API_URL

export const getUser = createAsyncThunk(
  'auth/getUser',
  async ({empty},{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
          
        },
      }
      const authUser = JSON.parse(localStorage.getItem("user"))
      const res = await axios.get(
        `${endPoint}/users/${slugify(authUser.username)}/`,
        config
      )
      return res
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserReferrals = createAsyncThunk(
  'auth/getUserReferrals',
  async ({ref_code},{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
          
        },
      }
      const res = await axios.get(
        `${endPoint}/users/?referral=${ref_code}`,
        config
      )
      return res
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getTotalDownline = createAsyncThunk(
  'getTotalDownline',
  async ({ empty },{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
          
        },
      }
      const res = await axios.get(
        `${endPoint}/total-downline`,
        config
      )
      return res.data.tatal_downline
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)