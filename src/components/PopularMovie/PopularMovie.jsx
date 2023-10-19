import React, { useEffect } from 'react'
import { getPopular } from '../../Redux/popularMovieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CirclesWithBar } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function PopularMovie() {
    let {popularList,loading}=useSelector((state)=>state.popularMovie)
    let dispa=useDispatch()
    useEffect(()=>{
dispa(getPopular())
    },[])
    console.log(popularList)
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
  </div> :  <div className='container'>
    <div className='row g-4'>
     <h2 className='text-center text-light mb-4'>Top Rated Movies</h2>
        {popularList.map((ele)=>{
           return <div className='col-md-3'>
            
            <Link className='nav-link' to={`/details/${ele.id}/movie`} >
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

  <nav className='mt-5' aria-label="...">
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

<Helmet>
      <meta charSet="utf-8" />
      <title>Top Rated Movie</title>
                
  </Helmet>
  
  
  </>
}
