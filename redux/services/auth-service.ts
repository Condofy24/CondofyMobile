import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserInfo } from "../../types";

const API_URL = "10.0.0.11:4000/api"; // ipv4

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
      // console.log("send request", email, password, `${API_URL}`);
      // const response = await axios.post<LoginResult>(`${API_URL}`, {
      //   email,
      //   password,
      // });
      // // store user's token in local storage
      // // localStorage.setItem("token", data.token);
      // console.log(response, response.data);
      // return response.data;
      // return data;
      try {
        console.log("send to ", API_URL);
        const response = await fetch(API_URL);
        const json = await response.json();
        console.log("json", json);
        return json;
      } catch (error) {
        console.error(error);
      }
    } catch (error: any) {
      // return custom error message from API if any
      console.log("error", error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
