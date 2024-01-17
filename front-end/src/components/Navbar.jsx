import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    
    <div className= 'grid grid-cols-3     text-slate-300  p-5 lg:mx-16 mx-6 bg-gradient-to-r from-purple-500 to-pink-500  font-medium rounded-xl mb-5' >
      <Link to={"/"}
      className='hover:text-black   '
      >Home</Link>
      <Link to={"/addmovie"}
      className='  hover:text-black  '
      >Add Movie</Link>
      <div className='flex justify-around lg:gap-10 gap-3 ' >
      <Link to={"/login"}
      className='hover:text-black '
      >Login</Link>
      <Link to={"/signup"}
      className='hover:text-black '
      >Signup</Link>
      </div>
      
    </div>
  )
}

export default Navbar
