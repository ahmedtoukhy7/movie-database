import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CirclesWithBar } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import { Helmet } from 'react-helmet';

export default function Movie() {

    let [movieList,setmovieList]=useState(null)
    let [newmovieList,setnewmovieList]=useState([])
    useEffect(()=>{
        getnum()
        getMovie()

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
                getMovie(e.target.getAttribute('num'))
        })
    })
    }

   
  
    
    async function getMovie(n='1'){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
            }
          };

         let {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${n}`,options)
        setmovieList(data.results)
        
    }

    
 //search 

//  function search(name){
//     let newmovie=newmovieList.filter((ele)=> ele.title.toLowerCase().includes(name.toLowerCase())==true)
//     console.log(newmovie)
//     setmovieList(newmovie)
// }

async function search(title){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU4YWQ5ZGZjYTE1ZDNlMzZmNWUzMDZhNjA0ZDBmMSIsInN1YiI6IjY0ZDE2NjliZDlmNGE2MDNiNTRhOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlkGHf94mhu4YjHoaasrt5GsU1W5NYC7lfTnHJgJwvc'
    }
  }
  let {data}= await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}`, options)
  console.log(data)

  setmovieList(data.results)

  if(data.results.length==0){
    getMovie()
  }
  
  
  
}



console.log(movieList)
  return <> <div className='container py-5 text-light'>
    <h2 className='text-center mb-4'>Popular Movies</h2>
    <input onChange={(e)=>search(e.target.value)} type="text" className='form-control w-75 mx-auto bg-transparent my-5 text-light' placeholder='Search By Name' />
    <div className='row g-4'>
         {movieList ? movieList.map((ele,ind)=>{
             return <div key={ind} className='col-md-3'>
                <Link className='nav-link' to={`/details/${ele.id}/movie`}>
                    <div className='item text-light text-decoration-none'>
                <img className='w-100 rounded-3' src={'https://image.tmdb.org/t/p/w500'+ ele.poster_path} alt={ele.title} />
                <h3 className='h5 my-3'>{ele.title}</h3>
                <h4 className='h6 text-white-50 my-3'>{ele.overview.split(' ').slice(0,10).join(' ')}</h4>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='h6'>{ele.release_date}</h4>
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
      <title>Popular Movie</title>
                
  </Helmet>

   
    <nav aria-label="...">
  <ul className="pagination pagination-lg d-flex justify-content-center">
    <li className="page-item pointer" aria-current="page">
      <a num='1' className="page-link bg-info">1</a>
    </li>
    <li className="page-item pointer"><a num='2' className="page-link" >2</a></li>
    <li className="page-item pointer"><a num='3' className="page-link" >3</a></li>
    <li className="page-item pointer"><a num='4' className="page-link" >4</a></li>
    <li className="page-item pointer"><a num='5' className="page-link" >5</a></li>
    <li className="page-item pointer"><a num='6' className="page-link" >6</a></li>
    <li className="page-item pointer"><a num='7' className="page-link" >7</a></li>
    <li className="page-item pointer"><a num='8' className="page-link" >8</a></li>
    <li className="page-item pointer"><a num='9' className="page-link" >9</a></li>
    <li className="page-item pointer"><a num='10' className="page-link" >10</a></li>
  </ul>
</nav>
</>
}


