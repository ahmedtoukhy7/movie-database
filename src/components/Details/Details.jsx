import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CirclesWithBar } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'

export default function Details() {
    let {id,type}=useParams()

    let [tre,settre]=useState([])
    let [show,setshow]=useState(false)
    

    let [details,setDetails]=useState(null)

    useEffect(()=>{
        getDetails(id,type)
        video(id,type)
    },[])

    async function getDetails(id,type){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
            }
          };
        let {data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}` ,options)
        setDetails(data)
    }

  

    //video

    async function video(id,type){
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
          }
        };

        try {
            let {data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`,options)
            console.log(data)
        settre(data.results)
        } catch (error) {
            console.log(error.response.data.status_message)
        }
        // let {data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`,options).catch((err)=>console.log(err.response.data.status_message))
        // console.log(data)
        // settre(data.results)
       }


  return <>
  
<div className='log'>
  
{ details ?  <div className='container py-5'>
    <div className='lay'>
        
    </div>
  <div className='row'>
    <div className='col-md-4'>
    { details.poster_path ?<img className='w-100 rounded-3' src={'https://image.tmdb.org/t/p/w500'+ details.poster_path  } alt={details.title} />:
        <img className='w-100 rounded-3' src={'https://image.tmdb.org/t/p/w500'+ details.profile_path  } alt={details.title} />}
    </div>    

    <div className='col-md-8'>

    {show ? <YouTube
   videoId= { tre[0]?.key}
                   // defaults -> ''
  
/> : ''}
    <div className='content text-light'>

            
{details.name?<h2 className='my-3'>{details.name}</h2>:<h2 className='my-3'>{details.original_title}</h2>}
{details.biography ? <h4 className='h6'>{details.biography}</h4>: ''}
{details.birthday ? <h4 className='h6 my-4'>{'Birthday : ' + details.birthday}</h4>: <div onClick={()=>setshow(true)} className='d-flex Trailer pointer align-items-center  mb-2 gap-2 fs-4  '>
          <i className="fa-brands fa-youtube"></i>
           <span className='text-light Trailer rounded-3 ' >Play Trailer</span>
          </div>}
<div className='row align-items-center'>
   <div className='col-md-4 col-sm-6'>
   {details.release_date ?<h3 className='h5 my-3'>{details.release_date}</h3> :<h3 className='h5 my-3'>{details.first_air_date}</h3>}
   </div>


<div className='col-md-4 col-sm-6'>

{details.genres?.map((ele,ind)=>{
    return <span key={ind} className='ms-3'>{ele.name}</span>
})}
</div>
</div>
         
{details.vote_average ?<div className='d-flex gap-2 align-items-center my-3'>
<i className="fa-solid fa-star text-warning"></i>
<h4>{details.vote_average.toFixed(1)}</h4>
</div>:'' }

{details.number_of_seasons ?  <h4 className=' my-3'>{'number of sessons is '+ details.number_of_seasons}</h4> : ''}
{details.tagline ?   <h3 className='h5 mb-3'>{'Tagline ' +details.tagline}</h3> : ''}
{details.overview ? <h5 className='text-white-50'>Overview : {details.overview} </h5> : ''}
<Helmet>
      <meta charSet="utf-8" />
      <title>{details.name ? details.name : details.title }</title>
                
  </Helmet>

</div>
    </div>   
    
       
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
