import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  loading: false,
  error: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading=true
    },
    loginSucces: (state,{payload}) => {
      state.loading= false
      state.user=payload.user.username
      state.token=payload.token
    },
    registerSuccess:(state,{payload})=>{

    },
    fetchFail: (state) => {
      state.loading=false
      state.error=true
    },
  },
});

export const {fetchStart,fetchFail,loginSucces,registerSuccess} = authSlice.actions;
export default authSlice.reducer;
