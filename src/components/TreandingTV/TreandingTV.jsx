import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrending } from '../../Redux/trendingSlice'
import { CirclesWithBar } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { gettrendingTv } from '../../Redux/treandingTvSlice'
export default function TreandingTV() {

    let dispa=useDispatch()
    
    useEffect(()=>{
dispa(gettrendingTv())
    },[])

    let {isloading , trendTv ,iserror}= useSelector((state)=>state.trendTv)
    console.log(trendTv)

    
  return <>

  {isloading ? <div className='loading d-flex justify-content-center align-items-center'>
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
  </div> : <div className='container text-light'>
    <h2 className='text-center py-5 '>Trending Now</h2>
    <div className='row g-4'>
        {trendTv?.map((ele,ind)=>{
            return  <div key={ind} className='col-md-3 col-sm-12'>
              <Link className='link' to={'/treandingtv/'+ ele.id} >
              <div className='item h-100'>
            <img className='w-100 rounded-3' src={'https://image.tmdb.org/t/p/w500'+ ele.poster_path} alt={ele.title} />
            <h2 className='mt-3 text-light fw-medium fs-4'>{ele.title ?ele.title : ele.name }</h2>
            <h3 className='h6 text-light  mt-3'>{ele.overview.split(' ').slice(0,15).join(' ')}</h3>
            <div className='data d-flex text-light justify-content-between align-items-center mt-3'>
                <h5 className='text-light'>{ele.release_date ? ele.release_date: ele.first_air_date}</h5>
                <h5>
                <i className="fa-solid fa-star text-warning"></i>
                    {ele.vote_average.toFixed(1)}</h5>
            </div>
            
            </div>
              </Link>
           
        </div>
        })}
    </div>
  </div> }


  
  

   
  
  
  </>
}
