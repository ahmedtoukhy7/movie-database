
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export let getTrending =createAsyncThunk('trend/getTrending', async(type='day')=>{
    const options = {
        
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
        }
      };
let {data}= await  axios.get(`https://api.themoviedb.org/3/trending/movie/${type}`,options)
return data.results
})





let trendingSlice = createSlice({
    name:'trend',
    initialState:{
        trendList:[],
        loading:false,
        error:false,
    },

    extraReducers:(build)=>{
        build.addCase(getTrending.fulfilled ,(state,action)=>{
            state.trendList=action.payload
            state.loading = false
        })

        build.addCase(getTrending.pending , (state,action)=>{
            state.loading = true
        })
    }

})

 export let trendRedducer=trendingSlice.reducer