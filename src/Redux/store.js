import { configureStore } from '@reduxjs/toolkit'
import { trendRedducer } from './trendingSlice'
import { trendDetailsRedducer } from './trendingDetailsSlice'
import { trendTvReducer } from './treandingTvSlice'
import { trendPeopleReducer } from './trendingPeopleSlice'
import { trendTvDetailsRedducer } from './trendTvDetailsSlice'
import { popularReducer } from './popularMovieSlice'
import { popularTvReducer } from './popularTvSlice'
import { tokReducer } from './tokSlice'
export const store = configureStore({
    reducer: {
        trending:trendRedducer,
        trendingDetails:trendDetailsRedducer,
        trendTv:trendTvReducer,
        trendpeople:trendPeopleReducer,
        trendTvDetails:trendTvDetailsRedducer,
        popularMovie:popularReducer,
        popularTv:popularTvReducer,
        tok:tokReducer
    },
  })