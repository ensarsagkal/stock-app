import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  loading:false,
  error:false,
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    firmsSuccess:(state,{payload})=>{
      state.loading=false
      state.firms=payload.data
    },
    // addFirmSucces:(state,{payload})=>{}
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
})

export const {fetchStart,fetchFail,firmsSuccess} = stockSlice.actions

export default stockSlice.reducer