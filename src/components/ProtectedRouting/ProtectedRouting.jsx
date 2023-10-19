import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRouting({children}) {

    let token=localStorage.getItem('userToken')
    //console.log(token)

    if(token !=null){
        return children
    }
    else{
        return <Navigate to='/login'/>
    }

 



  return (
    <div>ProtectedRouting</div>
  )
}
