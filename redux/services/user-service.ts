import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";
import Toast from "react-native-toast-message";
import { API_URL } from "../../global";

interface UpdateUserData {
  id: string;
  name: string;
  email: string;
  newPassword: string;
  phoneNumber: string;
  profilePic: File | null;
}

export const updateUserProfile = createAsyncThunk<User, UpdateUserData>(
  "auth/updateUserProfile",
  async (
    { id, name, email, newPassword, phoneNumber, profilePic },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.patch<User>(
        `${API_URL}/user/${id}`,
        {
          id,
          name,
          email,
          newPassword,
          phoneNumber,
          image: profilePic ?? undefined,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return data;
    } catch (error: any) {
      let errorMessage = 'An error occurred while updating the profile.';
      if (error.response && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  },
);