import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    let{id}=useParams()

    async function getMovie(){
        let {data}=await axios.get()
    }
  return (
    <div>MovieDetails</div>
  )
}
