import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    
    <div className= 'flex justify-around align-center text-slate-300  p-4 mx-16 bg-gradient-to-r from-purple-500 to-pink-500  font-medium rounded-xl mb-2' >
      <Link to={"/"}
      className='hover:text-black'
      >Home</Link>
      <Link to={"/addmovie"}
      className='hover:text-black '
      >Add New movie</Link>
      <div className='flex justify-around gap-10'>
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
