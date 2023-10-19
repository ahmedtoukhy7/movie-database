import React, { useEffect } from 'react'
import { getTrendPeople } from './../../Redux/trendingPeopleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CirclesWithBar } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function TrendingPeople() {
    let dispa=useDispatch()
    
    useEffect(()=>{
dispa(getTrendPeople())
    },[])

    let {peopleList, loading , error } = useSelector((state)=>state.trendpeople)
  return <>

{loading ? <div className='loading d-flex justify-content-center align-items-center'>
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
        {peopleList?.map((ele,ind)=>{
            return  <div key={ind} className='col-md-3 col-sm-12'>
             
              <div className='item h-100'>
                <Link className='nav-link' to={`/details/${ele.id}/person`}>
            <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+ ele.profile_path} alt={ele.title} />
            <h2 className='mt-3 text-light fw-medium fs-4'>{ele.name }</h2>
            </Link>
           
            
            </div>
             
           
        </div>
        })}
    </div>
  </div> }
  <Helmet>
      <meta charSet="utf-8" />
      <title>People</title>
                
  </Helmet>

  
  
  
  </>
}
