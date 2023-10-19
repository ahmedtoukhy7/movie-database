import React, { useEffect, useState } from 'react'
import { getTrendingDetails } from '../../Redux/trendingDetailsSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CirclesWithBar } from 'react-loader-spinner'
import axios from 'axios'
import Youtube from 'react-youtube'
import { Helmet } from 'react-helmet'
export default function TreandingDetails() {

  let [tre,settre]=useState([])
  let [show,setshow]=useState(false)
    let {loading , trendDetailsList ,error} = useSelector((state)=>state.trendingDetails)
    let {id}=useParams()
    console.log(id)
    let dispa=useDispatch()
useEffect(()=>{
    dispa(getTrendingDetails(id))
    video(id)
},[])


async function video(id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
    }
  };
  let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`,options)
  console.log(data)
  settre(data.results)
}
   
console.log(tre[0]?.key)

console.log(trendDetailsList)



  return <>
<div className='log'>
  
{ trendDetailsList ?  <div className='container py-5'>
    
    <div className='row myrow g-4 ' >
      
      <div className='col-md-4 '>
      <img className='w-100 rounded-3 ' src={'https://image.tmdb.org/t/p/w500'+ trendDetailsList.poster_path} alt={trendDetailsList.title} />
      </div>
  
      <div className='col-md-8 ' >
  
        {show ? <Youtube
     videoId= { tre[0]?.key}                 // defaults -> ''
    
  /> : ''}
  
       
     
      <div className='content text-light' >
              <h2 className='my-3'>{trendDetailsList.title}</h2>
              <div className='row g-2 align-items-center'>
              <div className='col-md-4'>
              <h3 className='h5 my-3'>{'Relesed In : ' +trendDetailsList.release_date}</h3>
              </div>
              <div className='col-md-4'>
                Geners : 
              {trendDetailsList.genres.map((ele,ind)=>{
                  return <span key={ind} className='ms-2'>{ele.name}</span>
              })}
              </div>
              </div>
             <div className='d-flex gap-2 align-items-center my-3'>
              <h4>{ 'Rate : ' +trendDetailsList.vote_average.toFixed(1)}</h4>
             <i className="fa-solid fa-star text-warning"></i>
             </div>
            <div onClick={()=>setshow(true)} className='d-flex Trailer pointer align-items-center  mb-4 gap-2 fs-4  '>
            <i className="fa-brands fa-youtube"></i>
             <span className='text-light Trailer rounded-3 ' >Play Trailer</span>
            </div>
              <h3>{trendDetailsList.tagline}</h3>
              <h5 className='text-white-50'>Overview : {trendDetailsList.overview} </h5>
          </div>
      </div>
     
         
      </div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>{trendDetailsList.title}</title>
                
  </Helmet>
  
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
