import React from 'react'

const Card = ({elm}) => {
  return (
    <div className='flex flex-col m-8  justify-between  items-center 
    rounded-xl
    text-red-300 border'>
     
      <img src={elm.Poster} alt=""  className='w-auto rounded-xl' />
      <h2>{elm.Title}</h2>
      <p>{elm.Year}</p>
      
    </div>
  )
}

export default Card
