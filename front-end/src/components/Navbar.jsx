import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='flex justify-around align-center text-white bg-red-400 p-2'>
      <Link to={"/"}>Home</Link>
      <Link to={"/addmovie"}>Add New movie</Link>
      <div className='flex justify-around gap-10'>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
      </div>
      
    </div>
  )
}

export default Navbar
