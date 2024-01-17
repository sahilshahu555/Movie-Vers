import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({elm,i}) => {
  return (
    <Link to={`/singlemovie/${i+1}`}>
    <div className='  m-10  flex flex-col justify-between  items-center 
    rounded-xl gap-5  
    text-white curser-pointer ...  shadow-lg shadow-violet-400/100 ... '>
     
      <img src={elm.Poster} alt=""  className=' rounded-xl  h-60 ' />
      <h2  className='lg:text-l'>{elm.Title}</h2>
      <p>{elm.Year}</p>
      
    </div>
    </Link>
  )
}

export default Card
