import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getTrendPeople=createAsyncThunk('people/getTrendPeople',async()=>{
    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
            }
          }
        let {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/day`,options)
        return data.results
        
    } catch (error) {
        //return error
    }
})


let trendPeopleSlice= createSlice({
    name:'people',
    initialState:{
        peopleList:[],
        loading:false,
        error:false
    },
    extraReducers:(build)=>{
        build.addCase(getTrendPeople.fulfilled,(state,action)=>{
            state.peopleList=action.payload
            state.loading=false
        })
        build.addCase(getTrendPeople.pending,(state,action)=>{
            
            state.loading=true
        })
        build.addCase(getTrendPeople.rejected,(state,action)=>{
            
            state.error=true
        })
    }
})

export let trendPeopleReducer=trendPeopleSlice.reducer