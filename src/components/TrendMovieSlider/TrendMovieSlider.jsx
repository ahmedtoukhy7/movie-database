import React, { useState } from 'react'
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrending } from '../../Redux/trendingSlice'
import OwlCarousel from 'react-owl-carousel';
import { Link, NavLink } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from "jquery";
import { CirclesWithBar } from 'react-loader-spinner';
export default function TrendMovieSlider() {
    let {loading , trendList ,error}= useSelector((state)=> state.trending)

    // let [arr,setarr]=useState([])
    // setarr(trendList)
    // console.log(arr)
  
 let dispa=useDispatch()
    useEffect(()=>{
      dispa(getTrending())
      // console.log(trendList);
      //    let btns=document.querySelectorAll('.clicks')

        //  btns.forEach((ele)=>{
        //   ele.addEventListener('click',function(e){
        //       btns.forEach((ele)=>{
        //           ele.classList.remove('active')
        //       })
      
        //       e.target.classList.add('active')
        //   })
        //  })

        // $('.span').click(function(e){
        //   $(e.target).addClass('active')
        //   $('.span').not(e.target).removeClass('active')
        // })



        //  btns.forEach((ele) => {
        //      ele.addEventListener('click',function(e){
 
             
        //      dispa(getTrending(e.target.getAttribute('data')))
 
             
 
 
    //          })
         
    //  });
 

    
    },[])

    function mainFuncc (type) {

      $('.span').click(function(e){
        $(e.target).addClass('active')
        $('.span').not(e.target).removeClass('active')
      }
    )
      dispa(getTrending(type))
    }

    if(trendList.length ===0) {
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

<div className='trending my-5 text-light'>
   <div className='d-flex gap-4 '>
   <h3>Trending Movies</h3>
    <div className='clicks text-light mb-4'>
    <span   onClick={()=>mainFuncc("day")}   className='span active'> Today </span>
    <span  onClick={()=>mainFuncc("week")}  className='span' >This Week</span>
    </div>
   </div>


<OwlCarousel className='owl-theme' items={5} autoPlay loop margin={5}  nav>

{trendList.map((movie,ind)=>{
return <div key={ind} className='item'>
   <Link className='nav-link' to={'/treandingmovie/'+ movie.id}>
   
  <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} alt="img" />
  <h3 className='h6 title text-center mt-3 text-decoration-none'>{movie.title}</h3> 
   </Link>
</div>

})}

</OwlCarousel>
</div>
  
  
  </>
  
}
