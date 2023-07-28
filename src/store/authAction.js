import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:3004";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      await axios.post(`${backendURL}/api/register`, {
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        username: user.username,
        password: user.password,
        user_type: user.user_type,
      });
    } catch (error) {
      // return custom error message from backend
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log(password, email);
      const { data } = await axios.post(`${backendURL}/api/login`, {
        usernameEmail: email,
        password: password,
      });
      // store user's token in local storage
      localStorage.setItem("userToken", data.data.auth_token);
      return data.data;
    } catch (error) {
      // return custom error message from API
      // if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.message);
      // }
    }
  }
);
