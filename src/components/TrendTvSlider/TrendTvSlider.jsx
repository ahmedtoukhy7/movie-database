import React from 'react'

import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrending } from '../../Redux/trendingSlice'
import OwlCarousel from 'react-owl-carousel';
import { Link, NavLink } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CirclesWithBar } from 'react-loader-spinner';
import { gettrendingTv } from '../../Redux/treandingTvSlice';
import $ from "jquery";
export default function TrendTvSlider() {

    let {isloading , trendTv ,iserror}= useSelector((state)=>state.trendTv)
    let dispa=useDispatch()
   
    useEffect(()=>{


      dispa(gettrendingTv())
    //   console.log("trendTv" , trendTv);`
    //     try {
    //       let btn=document.querySelectorAll('.clicks')
    //     btn.forEach((ele) => {
    //         ele.addEventListener('click',function(e){

    //         console.log(e.target.getAttribute('type'))
    //         dispa(gettrendingTv(e.target.getAttribute('type')))

            


    //         })
        
    // });

    // $('.spa').click(function(e){
    //     $(e.target).addClass('active')
    //     $('.spa').not(e.target).removeClass('active')
    //   }
    // )
    //     } catch (error) {
    //       console.log(error);
    //     }

//    btn.forEach((ele)=>{
//     ele.addEventListener('click',function(e){
//         btn.forEach((ele)=>{
//             ele.classList.remove('active')
//         })

//         e.target.classList.add('active')
//     })
//    })
   
         
    },[])



    function mainFunc (type) {

      $('.spa').click(function(e){
        $(e.target).addClass('active')
        $('.spa').not(e.target).removeClass('active')
      }
    )
      dispa(gettrendingTv(type))
    }


    if(trendTv.length ===0) {
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

  <div className='trentv text-light'>
   <div className='d-flex gap-4'>
   <h2>Trending TvShow</h2>
   <div className='clicks text-light mb-4'>
    <span onClick={()=>mainFunc("day")} type='day' className='active spa '>Today</span>
    <span onClick={()=>mainFunc("week")} type='week' className='spa'>This Week</span>
    </div>
   </div>

   <OwlCarousel className='owl-theme' items={5} autoPlay loop margin={5}  nav>

   {trendTv.map((tv,ind)=>{
    return <div key={ind} className='item'>
   <Link className='nav-link' to={'/treandingtv/'+ tv.id}>
   <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+ tv.poster_path} alt="img" />
   <h3 className='h6 title text-center mt-3 text-decoration-none'>{tv.name}</h3>  
   </Link>
</div>

})}

</OwlCarousel>


</div> 
  
  
  </>
}
