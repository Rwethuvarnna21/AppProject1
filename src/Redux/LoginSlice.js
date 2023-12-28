import { createSlice } from "@reduxjs/toolkit";
const LoginSlice=createSlice({
    name:'login',
    initialState:{
        isLoggedIn:false,
        user:null,
    },
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true;
            state.user=action.payload;
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.user=null
        },

    },
    })
    export const {login,logout}=LoginSlice.actions;
    export default LoginSlice.reducer;
