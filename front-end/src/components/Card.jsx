import React from 'react'

const Card = ({elm}) => {
  return (
    <div className='flex flex-col m-10 text-red-300'>
     
      <img src={elm.Poster} alt="" width={"200px"}  />
      <h1>{elm.Title}</h1>

    </div>
  )
}

export default Card
