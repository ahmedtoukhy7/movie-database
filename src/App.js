import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { store } from './Redux/store';
import { Provider, useDispatch } from 'react-redux'
import TreandingMovie from './components/TreandingMovie/TreandingMovie';
import TreandingDetails from './components/TreandingDetails/TreandingDetails';
import TreandingTV from './components/TreandingTV/TreandingTV';
import TrendingPeople from './components/TrendingPeople/TrendingPeople';
import TrendTvDetails from './components/TrendTvDetails/TrendTvDetails';
import Movie from './components/Movie/Movie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Details from './components/Details/Details';
import PopularMovie from './components/PopularMovie/PopularMovie';
import PopularTv from './components/PopularTv/PopularTv';
import Tv from './components/Tv/Tv';
import ProtectedRouting from './components/ProtectedRouting/ProtectedRouting';
import { useEffect } from 'react';
import { gettok } from './Redux/tokSlice';
import NotFound from './components/NotFound/NotFound';

function App() {
  
 

  let routes= createHashRouter([
    {path:'',element: <ProtectedRouting> <Layout/> </ProtectedRouting> ,children:[
      {index:true,element:<Home/>},
      {path:'/treandingmovie',element:<ProtectedRouting><TreandingMovie/></ProtectedRouting>},
      {path:'/treandingmovie/:id',element:<ProtectedRouting><TreandingDetails/></ProtectedRouting>},
      {path:'/treandingtv',element:<ProtectedRouting><TreandingTV/></ProtectedRouting>},
      {path:'/treandingpeople',element:<ProtectedRouting><TrendingPeople/></ProtectedRouting>},
      {path:'/movie',element:<ProtectedRouting><Movie/></ProtectedRouting>},
      {path:'/movie/:id',element:<ProtectedRouting><MovieDetails/></ProtectedRouting>},
      {path:'/treandingtv/:id',element:<ProtectedRouting><TrendTvDetails/></ProtectedRouting>},
      {path:'/details/:id/:type',element:<ProtectedRouting><Details/></ProtectedRouting>},
      {path:'/popularmovie',element: <ProtectedRouting><PopularMovie/></ProtectedRouting>},
      {path:'/populartv',element: <ProtectedRouting><PopularTv/></ProtectedRouting>},
      {path:'/tv',element: <ProtectedRouting><Tv/></ProtectedRouting>},
      
    ]}
    ,{path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>},
    {path:'*',element:<NotFound/>},
  ])

  




  return <>
  

  <Provider store={store}>
  <RouterProvider router={routes}/>

  </Provider>
  
  
  
  </>
    
}

export default App;
