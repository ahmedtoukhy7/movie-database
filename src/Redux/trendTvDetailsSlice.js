import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export let getTrendingTvDetails =createAsyncThunk('trendTvDetails/getTrendingTvDetails', async(id)=>{
    const options = {
        
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
        }
      };
let {data}= await  axios.get(`https://api.themoviedb.org/3/tv/${id}`,options)
return data
})

let trendingTvDetailsSlice = createSlice({
    name:'trendTvDetails',
    initialState:{
        trendTvDetailsList:null,
        loading:false,
        error:false,
    },

    extraReducers:(build)=>{
        build.addCase(getTrendingTvDetails.fulfilled ,(state,action)=>{
            state.trendTvDetailsList=action.payload
            state.loading = false
        })

        build.addCase(getTrendingTvDetails.pending , (state,action)=>{
            state.loading = true
        })
    }

})

 export let trendTvDetailsRedducer=trendingTvDetailsSlice.reducer