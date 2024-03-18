import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types";
import { API_URL } from "../../global";
import axios from "axios";

interface LoginInput {
  email: string;
  password: string;
}

interface LoginResult {
  token: string;
  user: User;
}

export const login = createAsyncThunk<LoginResult, LoginInput>(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<LoginResult>(`${API_URL}/auth/login`, {
        email,
        password,
      });

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
