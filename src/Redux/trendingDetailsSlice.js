import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export let getTrendingDetails =createAsyncThunk('trendDetails/getTrendingDetails', async(id)=>{
    const options = {
        
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
        }
      };
let {data}= await  axios.get(`https://api.themoviedb.org/3/movie/${id}`,options)
return data
})

let trendingDetailsSlice = createSlice({
    name:'trendDetails',
    initialState:{
        trendDetailsList:null,
        loading:false,
        error:false,
    },

    extraReducers:(build)=>{
        build.addCase(getTrendingDetails.fulfilled ,(state,action)=>{
            state.trendDetailsList=action.payload
            state.loading = false
        })

        build.addCase(getTrendingDetails.pending , (state,action)=>{
            state.loading = true
        })
    }

})

 export let trendDetailsRedducer=trendingDetailsSlice.reducer


