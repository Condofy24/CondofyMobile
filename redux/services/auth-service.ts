import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "../../types";

const API_URL = "172.20.10.4:4000/api"; // ipv4

interface LoginInput {
  email: string;
  password: string;
}

interface LoginResult {
  token: string;
  userInfo: UserInfo;
}

export const login = createAsyncThunk<LoginResult, LoginInput>(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("here");
      let response = await fetch(`http://${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      let data = await response.json();
      console.log(data);
      return data;
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
