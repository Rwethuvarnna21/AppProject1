import { createSlice } from "@reduxjs/toolkit";
const InDe=createSlice({
    name:'count',
    initialState:0,
    reducers:{
        increment:(state)=>state+1,
        decrement:(state)=>state-1,
        reset:()=>0,

    },
});
export const {increment,decrement,reset}=InDe.actions
export default InDe.reducer;