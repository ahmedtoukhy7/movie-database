import React, { useEffect } from 'react'
import Sliderpic from '../Sliderpic/Sliderpic'
import { useDispatch, useSelector } from 'react-redux'
import {Helmet} from "react-helmet";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CirclesWithBar } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { gettrendingTv } from '../../Redux/treandingTvSlice';
import TrendMovieSlider from '../TrendMovieSlider/TrendMovieSlider';
import TrendTvSlider from '../TrendTvSlider/TrendTvSlider';
import TrendPeopleSlider from '../TrendPeopleSlider/TrendPeopleSlider';

export default function Home() {



  return <>

<Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
                
  </Helmet>
  <div className='log'>
  <div className='container'>
  <Sliderpic/>
  <TrendMovieSlider/>
  <TrendTvSlider/>
  <TrendPeopleSlider/>

  </div>
  </div>



   









 

 
   
  
  </>
}
