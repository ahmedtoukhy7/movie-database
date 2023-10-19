import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { gettok } from '../../Redux/tokSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'


export default function Login(props) {
    let dispa=useDispatch()
    useEffect(()=>{
      
    },[])

    //let{tok}=useSelector((state)=>state.tok)
    //console.log(tok)
   
    if(localStorage.getItem('userToken')!=null){
         dispa(gettok(localStorage.getItem('userToken')))
    }
 
    let [error,setError]=useState('')
    let [loading,setLoading]=useState(false)
    let nav =useNavigate()
   
        //yup
    let validationSchema= Yup.object({
      
        email:Yup.string().email('email is invalid').required('email is required'),
     
        password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{3,15}$/,'must starting with Uppercase'),
        
    })

    //formik

  async function submitLogin(values){

setLoading(true)
let { data }= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values).catch((err)=>{
    console.log(err.response.data.message)
    setError(err.response.data.message)
    setLoading(false)
})

console.log(data)

if(data.message=="success"){
    setLoading(false)
    

    dispa(gettok(data.token))
   localStorage.setItem('userToken',data.token)
   nav('/')
}
}

    
let formik =useFormik({
    initialValues:{
    
        email:'',
       
        password:'',
        
    },
    validationSchema:validationSchema,

    onSubmit:submitLogin
})



  return <>
<div className='log'>
<div className='container py-5'>

<h1 className='text-center mb-3 text-light'>Login Now</h1>
{error==""? "" : <div className='alert alert-danger'>{error}</div>}

<form onSubmit={formik.handleSubmit}>
   

    <label className='text-light ' htmlFor="email">Email :</label>
    <input placeholder='Enter Your Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className='form-control my-2'id='email' />
    {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div>:null}

    

    <label className='text-light ' htmlFor="password">Password :</label>
    <input placeholder='Enter Your Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className='form-control my-2'id='password' />
    {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div>:null}

  

    <button type='submit' className='btn btn-info mx-auto d-block mt-4 text-light'> {loading ?  <i className="fa-solid fa-spinner fa-spin"></i> : 'Login' }</button>
    
   
    {/* <Link className='ms-4 text-main' to='/forgetpassword'>Forget Password ?...</Link> */}
</form>


</div>


<Helmet>
  <meta charSet="utf-8" />
  <title>Login</title>
            
</Helmet>

</div>
  
  </>
}