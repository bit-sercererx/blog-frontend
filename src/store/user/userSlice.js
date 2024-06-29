import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { json } from "react-router";
export const loginUser = createAsyncThunk(
  "User/loginUser",
  async (userData) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/user/singin",
        userData
      );
      const data = res.data;

      localStorage.setItem("token", data.token);
      const decode = jwtDecode(data.token);
      return decode;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);
export const signupUser = createAsyncThunk(
  "USer/signin",
  async (newUserData) => {
    const res = await axios.post(
      "http://localhost:8000/user/singup",
      newUserData
    );
    const data = res.data;
  }
);
const initialState = {
  isloding: false,
  UserData: null,
  error: null,
  isLogged: true,
};
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logout: (state) => {
      state.UserData = [];
      state.isLogged = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isloding = true;
      state.UserDataserData = null;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isloding = false;
      state.UserData = action.payload;
      state.error = null;
      state.isLogged = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isloding = false;
      state.UserData = null;
      state.error = action.error.message;
    });
    builder.addCase(signupUser.pending, (state, action) => {
      state.isloding = true;
      state.UserData = null;
      state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isloding = false;
      state.UserData = action.payload;
      state.error = null;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isloding = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
