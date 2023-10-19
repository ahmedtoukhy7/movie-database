import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


let tokSlice=createSlice({
    name:'tok',
    initialState:{
        tok:''
    },
    reducers:{
        gettok:(state,action)=>{
            state.tok=action.payload
            state.tok=localStorage.getItem('userToken')
        }

    }
})

export let tokReducer=tokSlice.reducer
export let {gettok}=tokSlice.actions