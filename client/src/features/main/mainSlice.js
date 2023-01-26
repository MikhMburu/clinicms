import {createSlice} from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState:{
    user: null
  },
  reducers:{
    loginUser: (state, action)=>{
      state.user= action.payload;
    },
    logoutUser: (state)=>{
      state.user = null
    }
  }
})

export const {loginUser, logoutUser} = mainSlice.actions;
export default mainSlice.reducer;