import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CirclesWithBar } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import { Helmet } from 'react-helmet';

export default function Tv() {
    let [tvList,settvList]=useState(null)
    let [newmovieList,setnewmovieList]=useState([])
    useEffect(()=>{
        getnum()
        getTv()
        $('.page-link').click(function(e){
            $(e.target).addClass('bg-info')
            $('.page-link').not(e.target).removeClass('bg-info')
        })
    },[])
    function getnum(){
    let pagination=document.querySelectorAll('.pagination')
    pagination.forEach((ele)=>{
        ele.addEventListener('click',function(e){
                console.log(e.target.getAttribute('num'))
                getTv(e.target.getAttribute('num'))
        })
    })
    }

    async function getTv(n='1'){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
            }
          };

         let {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?page=${n}`,options)
         settvList(data.results)
         setnewmovieList(data.results)
    }

    // function search(name){
    //     let newmovie=newmovieList.filter((ele)=> ele.name.toLowerCase().includes(name.toLowerCase())==true)
    //     console.log(newmovie)
    //     settvList(newmovie)
    // }

    //search

    async function search(name){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
        }
      }
      let {data}= await axios.get(`https://api.themoviedb.org/3/search/tv?query=${name}`, options)
      console.log(data)
    
      settvList(data.results)
    
      if(data.results.length==0){
        getTv()
      }

    }


    console.log(tvList)
    return <> <div className='container py-5 text-light'>
    <h2 className='text-center mb-4'>Popular TV Show</h2>
    <input onChange={(e)=>search(e.target.value)} type="text" className='form-control w-75 mx-auto bg-transparent my-5 text-light' placeholder='Search By Name' />
    <div className='row g-4'>
         {tvList ? tvList.map((ele,ind)=>{
             return <div key={ind} className='col-md-3'>
                <Link className='nav-link' to={`/details/${ele.id}/tv`}>
                    <div className='item text-light text-decoration-none'>
                <img className='w-100 rounded-3' src={'https://image.tmdb.org/t/p/w500'+ ele.poster_path} alt={ele.title} />
                <h3 className='h5 my-3'>{ele.name}</h3>
                <h4 className='h6 text-white-50 my-3'>{ele.overview.split(' ').slice(0,10).join(' ')}</h4>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='h6'>{ele.first_air_date}</h4>
                    <h4 className='h6'>
                    <i className="fa-solid fa-star text-warning"></i>
                        {ele.vote_average}</h4>

                </div>
                </div>
                    </Link>
               
            </div>
         }): <div className='loading d-flex justify-content-center align-items-center'>
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
         </div>}
        
    </div>
  </div>

   
  <Helmet>
      <meta charSet="utf-8" />
      <title>Popular Tv-Show</title>
                
  </Helmet>
</>
}
