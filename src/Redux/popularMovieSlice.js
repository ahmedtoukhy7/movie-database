import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getPopular=createAsyncThunk('popular/getPopular', async()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
        }
      };

      let {data}=await axios.get(`https://api.themoviedb.org/3/movie/top_rated`,options)
      return data.results
})

let popularSlice= createSlice({
    name:'popular',
    initialState:{
        popularList:[],
        loading:false
    },

    extraReducers:(build)=>{
build.addCase(getPopular.fulfilled,(state,action)=>{
    state.popularList=action.payload
    state.loading=false
})
build.addCase(getPopular.pending,(state,action)=>{
    
    state.loading=true
})
    }

})

export let popularReducer= popularSlice.reducer