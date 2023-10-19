import { isAction } from '@reduxjs/toolkit'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/29c6fee-blue_short.svg'
import { useSelector } from 'react-redux'
export default function Navbar() {
    let token =localStorage.getItem('userToken')
    let nav=useNavigate()

    function logout(){
      localStorage.removeItem('userToken')
      nav('/login')
    }

    let{tok}=useSelector((state)=>state.tok)
    console.log(tok)


  return <>

<div className='navv'>
<nav className="navbar w-100  px-1 rounded-4 fixed-top  navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to='/'>
     <h1 className='text-light'>NOXE</h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars text-light"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <NavLink className= 'nav-link'   aria-current="page" to="/">Home</NavLink>
        </li>
        
        <li className="nav-item dropdown">
          <NavLink className= 'nav-link dropdown-toggle '  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movie
          </NavLink>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/movie">Popular</Link></li>
            <li><Link to='treandingmovie' className="dropdown-item" >Trending</Link></li>
            <li><Link to='/popularmovie' className="dropdown-item" >Top-Rated</Link></li>
    
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink className= 'nav-link dropdown-toggle'  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV Show
          </NavLink>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/tv"> Popular </Link></li>
            <li><Link className="dropdown-item" to="/treandingtv">Trending</Link></li>
           
            <li><Link className="dropdown-item" to="/populartv">Top-Rated</Link></li>
            
          </ul>
          
        </li>
        <li className="nav-item">
          <NavLink className='nav-link ' to="/treandingpeople">People</NavLink>
        </li>
        
      </ul>

      <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>

        {token ?  <li className='nav-item'>
            <span onClick={logout}  className='pointer text-light' href="">Logout</span>
        </li> : <>
        <li className='nav-item'>
            <Link to='register' className='nav-link' href="">Regiser</Link>
        </li>
        <li className='nav-item'>
            <Link to='login' className='nav-link' href="">Login</Link>
        </li>

        </> }


       
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
  
  
  </>
}
