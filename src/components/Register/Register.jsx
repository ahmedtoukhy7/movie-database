import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export default function Register() {

    let [error,setError]=useState('')
    let [loading,setLoading]=useState(false)
    let nav =useNavigate()

        //yup
    let validationSchema= Yup.object({
        name:Yup.string().max(15,'max length is 15').min(3,'min length is 3').required('name is required'),
        email:Yup.string().email('email is invalid').required('email is required'),
        phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'phone is invalid '),
        password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{3,15}$/,'must starting with Uppercase'),
        rePassword:Yup.string().required('repassword is required').oneOf([Yup.ref('password')],'password not match')
    })

    //formik

  async function submitReg(values){

setLoading(true)
let { data }= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).catch((err)=>{
    console.log(err.response.data.message)
    setError(err.response.data.message)
    setLoading(false)
})

console.log(data)

if(data.message=="success"){
    setLoading(false)
    nav('/login')
}
}

    
let formik =useFormik({
    initialValues:{
        name:'',
        email:'',
        phone:'',
        password:'',
        rePassword:''
    },
    validationSchema:validationSchema,

    onSubmit:submitReg
})



  return <>
<div className='log'>
<div className='container py-5'>

<h1 className='text-center text-light mb-3'>Register Now</h1>
{error==""? "" : <div className='alert alert-danger'>{error}</div>}

<form onSubmit={formik.handleSubmit}>
    <label className='text-light ' htmlFor="name">Name :</label>
    <input placeholder='Enter Your Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" className='form-control my-2' id='name'  />
    {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div>:null}

    <label className='text-light ' htmlFor="email">Email :</label>
    <input placeholder='Enter Your Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className='form-control my-2'id='email' />
    {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div>:null}

    <label className='text-light ' htmlFor="phone">Phone :</label>
    <input placeholder='Enter Your Phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" className='form-control my-2'id='phone' />
    {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div>:null}

    <label className='text-light ' htmlFor="password">Password :</label>
    <input placeholder='Enter Your Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className='form-control my-2'id='password' />
    {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div>:null}

    <label className='text-light ' htmlFor="rePassword">Re-password :</label>
    <input placeholder='Enter Your RePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type="password" className='form-control my-2'id='rePassword' />
    {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div>:null}

    <button className='btn btn-info mx-auto d-block mt-4 text-light'> {loading ?  <i className="fa-solid fa-spinner fa-spin"></i> : 'Register' }</button>
    
   
   
</form>


</div>

<Helmet>
  <meta charSet="utf-8" />
  <title>Register</title>
            
</Helmet>


</div>
  
  </>
}