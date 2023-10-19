import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTrendingTvDetails } from '../../Redux/trendTvDetailsSlice'
import { CirclesWithBar } from 'react-loader-spinner'
import axios from 'axios'
import YouTube from 'react-youtube'
import { Helmet } from 'react-helmet'

export default function TrendTvDetails() {
    let [tre,settre]=useState([])
  let [show,setshow]=useState(false)
    let{trendTvDetailsList , loding , error}= useSelector((state)=>state.trendTvDetails)
    let {id}=useParams()
let dispa= useDispatch()
    useEffect(()=>{
        
        dispa(getTrendingTvDetails(id))
        video(id)
    },[])
    console.log(trendTvDetailsList)


    //video

    async function video(id){
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
          }
        };
        let {data}=await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos`,options)
        console.log(data)
        settre(data.results)
      }




  return <>

<div className='log'>
{ trendTvDetailsList ?  <div className='container py-5'>
    <div className='lay'>
        
    </div>
  <div className='row'>
    <div className='col-md-4'>
    <img className='w-100 rounded-3' src={'https://image.tmdb.org/t/p/w500'+ trendTvDetailsList.poster_path} alt={trendTvDetailsList.title} />
    </div>
    <div className='col-md-8'>

    {show ? <YouTube
   videoId= { tre[0]?.key}
                   // defaults -> ''
  
/> : ''}
    <div className='content text-light'>
            <h2 className='my-3'>{trendTvDetailsList.name}</h2>
            <div className='row g-2 align-items-center'>
            <div className='col-md-4'>
            <h3 className='h5 my-3'>{'Released : '+trendTvDetailsList.first_air_date}</h3>
            </div>
            <div className='col-md-4'>
              Geners : 
            {trendTvDetailsList.genres.map((ele,ind)=>{
                return <span key={ind} className='ms-2'>{ele.name}</span>
            })}
            </div>
            </div>
           <div className='d-flex gap-2 align-items-center my-3'>
            <h4>{'Rate : '+trendTvDetailsList.vote_average.toFixed(1)}</h4>
           <i className="fa-solid fa-star text-warning"></i>
           </div>
           <div onClick={()=>setshow(true)} className='d-flex Trailer pointer align-items-center  mb-4 gap-2 fs-4  '>
          <i className="fa-brands fa-youtube"></i>
           <span className='text-light Trailer rounded-3 ' >Play Trailer</span>
          </div>
            <h4 className=' my-3'>{'number of sessons is '+ trendTvDetailsList.number_of_seasons}</h4>
            <h3>{trendTvDetailsList.tagline}</h3>
            <h5 className='text-white-50'>Overview : {trendTvDetailsList.overview} </h5>
        </div>
    </div>

    <Helmet>
      <meta charSet="utf-8" />
      <title>{trendTvDetailsList.name  }</title>
                
  </Helmet>
       
    </div>

  </div> : <div className='loading d-flex justify-content-center align-items-center'>
  <CirclesWithBar
  height="50"
  width="50"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
  </div>  }

 

 

  
</div>
  
  </>
}
