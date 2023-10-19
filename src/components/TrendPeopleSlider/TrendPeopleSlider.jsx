import React, { useEffect } from 'react'
import { getTrendPeople } from '../../Redux/trendingPeopleSlice'
import { useDispatch, useSelector } from 'react-redux'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CirclesWithBar } from 'react-loader-spinner';


export default function TrendPeopleSlider() {
    let {peopleList, loading , error } = useSelector((state)=>state.trendpeople)
    let dispa= useDispatch()
    useEffect(()=>{
        dispa(getTrendPeople())
    },[])
  
  console.log(peopleList)
  if(peopleList.length ===0) {
    return <div className='loading d-flex justify-content-center align-items-center'>
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
    </div>
  }

  return <>

  <div className='trendPeople text-light'>
    <h2>Trending People</h2>
    <OwlCarousel className='owl-theme' items={5} autoPlay loop margin={5}  nav>

{peopleList.map((p,ind)=>{
return <div key={ind} className='item '>
   
   <Link className='nav-link' to={`/details/${p.id}/person`}>
   <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+ p.profile_path} alt="img" /> 
   <h3 className='h6 title text-light text-decoration-none'>{p.name}</h3>
   </Link>
   
</div>

})}

</OwlCarousel>
  </div>
  
  
  </>
}
