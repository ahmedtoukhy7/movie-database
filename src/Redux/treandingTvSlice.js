import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let gettrendingTv= createAsyncThunk('trendtv/gettrendingTv',async(type='day')=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
        }
      };
let {data}=await axios.get(`https://api.themoviedb.org/3/trending/tv/${type}`,options)
return data.results
})



let treandingtv=createSlice({
    name:'trendtv',
    initialState:{
        trendTv:[],
        isloading:false,
        iserror:false
    },
    extraReducers:(build)=>{
        build.addCase(gettrendingTv.fulfilled,(state,action)=>{
            state.trendTv=action.payload
            state.isloading=false
        })
        build.addCase(gettrendingTv.pending,(state,action)=>{
            
            state.isloading=true
        })
    }

})

export let trendTvReducer= treandingtv.reducer