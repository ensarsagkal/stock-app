import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  first_name: "",
  last_name: "",
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
      state.user = payload.user.username;
      state.first_name = payload.user.firstName;
      state.last_name = payload.user.lastName;
      state.token = payload.token;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, loginSucces, registerSuccess } =
  authSlice.actions;
export default authSlice.reducer;
