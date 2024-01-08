import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  firstName: "",
  lastName: "",
  loading: false,
  error: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSucces: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user.username;
      state.token = payload.token;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data.username;
      state.firstName = payload.data.firstName;
      state.lastName = payload.data.lastName;
      state.token = payload.token;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.user = "";
      state.firstName = "";
      state.lastName = "";
      state.token = "";
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, loginSucces, registerSuccess,logoutSuccess } =
  authSlice.actions;
export default authSlice.reducer;
